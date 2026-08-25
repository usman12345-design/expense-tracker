import { Modal }          from "bootstrap"
import { get, post, del } from "./ajax"
import DataTable          from "datatables.net"

window.addEventListener('DOMContentLoaded', function () {
    const newTransactionModal  = new Modal(document.getElementById('newTransactionModal'))
    const editTransactionModal = new Modal(document.getElementById('editTransactionModal'))
    const uploadReceiptModalEl  = document.getElementById('uploadReceiptModal')
    const uploadReceiptModal    = new Modal(uploadReceiptModalEl)

    const table = new DataTable('#transactionsTable', {
        serverSide: true,
        ajax: '/transactions/load',
        orderMulti: false,
        columns: [
            {data: "description"},
            {
                data: row => new Intl.NumberFormat(
                    'en-US',
                    {
                        style: 'currency',
                        currency: 'USD',
                        currencySign: 'accounting'
                    }
                ).format(row.amount)
            },
            {data: "category"},
            {
                data: row => {
                    let icons = []
                    const receipts = row.receipts ?? []

                    for (let i = 0; i < receipts.length; i++) {
                        const receipt = receipts[i]

                        const span       = document.createElement('span')
                        const anchor     = document.createElement('a')
                        const icon       = document.createElement('i')
                        const deleteIcon = document.createElement('i')

                        deleteIcon.role = 'button'

                        span.classList.add('position-relative')
                        icon.classList.add('bi', 'bi-file-earmark-text', 'download-receipt', 'text-primary', 'fs-4')
                        deleteIcon.classList.add('bi', 'bi-x-circle-fill', 'delete-receipt', 'text-danger', 'position-absolute')

                        anchor.href   = `/transactions/${ row.id }/receipts/${ receipt.id }`
                        anchor.target = 'blank'
                        anchor.title  = receipt.name

                        deleteIcon.setAttribute('data-id', receipt.id)
                        deleteIcon.setAttribute('data-transactionId', row.id)

                        anchor.append(icon)
                        span.append(anchor)
                        span.append(deleteIcon)

                        icons.push(span.outerHTML)
                    }

                    return icons.join('')
                }
            },
            {data: "date"},
            {
                sortable: false,
                data: row => `
                    <div class="d-flex flex-">
                        <button type="submit" class="btn btn-outline-danger delete-transaction-btn" data-id="${ row.id }">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                        <button class="ms-2 btn btn-outline-primary edit-transaction-btn" data-id="${ row.id }">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="ms-2 btn btn-outline-primary open-receipt-upload-btn" data-id="${ row.id }">
                            <i class="bi bi-upload"></i>
                        </button>
                    </div>
                `
            }
        ]
    });

    document.querySelector('#transactionsTable').addEventListener('click', function (event) {
        const editBtn   = event.target.closest('.edit-transaction-btn')
        const deleteBtn = event.target.closest('.delete-transaction-btn')
        const uploadReceiptBtn = event.target.closest('.open-receipt-upload-btn')
        const deleteReceiptBtn = event.target.closest('.delete-receipt')
        if (editBtn) {
            const transactionId = editBtn.getAttribute('data-id')

            get(`/transactions/${ transactionId }`)
                .then(response => response.json())
                .then(response => openEditTransactionModal(editTransactionModal, response))
        }  else if (deleteBtn) {
            const transactionId = deleteBtn.getAttribute('data-id')

            if (confirm('Are you sure you want to delete this transaction?')) {
                del(`/transactions/${ transactionId }`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Delete failed');
                        }
                        return response.json();
                    })
                    .then(data => {
                            if (data.success) {
                                table.draw();
                            }
                    })
                    .catch(error => {
                        console.error('Delete error:', error);
                    });

            }
        }else if (uploadReceiptBtn) {
            const transactionId = uploadReceiptBtn.getAttribute('data-id')

            uploadReceiptModal._element
                .querySelector('.upload-receipt-btn')
                .setAttribute('data-id', transactionId)

            uploadReceiptModal.show()
        }else if (deleteReceiptBtn) {
            const receiptId     = deleteReceiptBtn.getAttribute('data-id')
            const transactionId = deleteReceiptBtn.getAttribute('data-transactionid')

            if (confirm('Are you sure you want to delete this receipt?')) {
                del(`/transactions/${ transactionId }/receipts/${ receiptId }`).then(response => {
                    if (response.ok) {
                        table.draw()
                    }
                })   // close .then()
            }        // close if(confirm)
        }
    })

    document.querySelector('.create-transaction-btn').addEventListener('click', function (event) {
        post(`/transactions`, getTransactionFormData(newTransactionModal), newTransactionModal._element)
            .then(response => {
                if (response.ok) {
                    table.draw()
                    newTransactionModal.hide()
                        // More thorough cleanup
                        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
                        document.body.classList.remove('modal-open');

                        // Remove ALL overflow styles
                        document.body.style.overflow = '';
                        document.body.style.overflowY = '';
                        document.body.style.overflowX = '';
                        document.body.style.paddingRight = '';

                        // Some modal libraries add these
                        document.body.style.position = '';
                        document.body.style.top = '';
                        document.body.style.width = '';

                        // Force a small delay to ensure modal library finishes its cleanup
                        setTimeout(() => {
                            document.body.style.overflow = '';
                            document.body.style.overflowY = '';
                            document.body.style.paddingRight = '';
                        }, 100);
                }
            })
    })

    document.querySelector('.save-transaction-btn').addEventListener('click', function (event) {
        const transactionId = event.currentTarget.getAttribute('data-id')

        post(`/transactions/${ transactionId }`, getTransactionFormData(editTransactionModal), editTransactionModal._element)
            .then(response => {
                if (response.ok) {
                    table.draw()
                    editTransactionModal.hide()
                }
            })
    })
    // ADD THIS - event delegation on the modal
    uploadReceiptModal._element.addEventListener('click', function (event) {
        const uploadBtn = event.target.closest('.upload-receipt-btn');

        if (uploadBtn) {
            event.preventDefault();
            const transactionId = uploadBtn.getAttribute('data-id');
            const formData = new FormData();
            const fileInput = uploadReceiptModal._element.querySelector('input[type="file"]');
            const files = fileInput.files;

            if (files.length === 0) {
                alert('Please select a file first');
                return;
            }

            for (let i = 0; i < files.length; i++) {
                formData.append('receipt', files[i]);
            }

            console.log('Uploading receipt for transaction:', transactionId); // Debug

            // Debug: Check FormData contents before sending
            console.log('FormData entries before sending:');
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }

            post(`/transactions/${transactionId}/receipts`, formData, uploadReceiptModal._element)
                .then(response => {
                    console.log('Response status:', response.status); // Debug
                    if (response.ok) {
                        table.draw();
                        uploadReceiptModal.hide();
                        // Clean up backdrop
                        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
                        document.body.classList.remove('modal-open');
                        document.body.style.overflow = '';
                    }
                })
                .catch(error => {
                    console.error('Upload error:', error); // Debug
                });
        }
    });
})

function getTransactionFormData(modal) {
    let data     = {}
    const fields = [
        ...modal._element.getElementsByTagName('input'),
        ...modal._element.getElementsByTagName('select')
    ]

    fields.forEach(select => {
        data[select.name] = select.value
    })

    return data
}

function openEditTransactionModal(modal, {id, ...data}) {
    for (let name in data) {
        const nameInput = modal._element.querySelector(`[name="${ name }"]`)

        nameInput.value = data[name]
    }

    modal._element.querySelector('.save-transaction-btn').setAttribute('data-id', id)

    modal.show()
}