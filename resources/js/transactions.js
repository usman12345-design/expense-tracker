import { Modal }          from "bootstrap"
import { get, post, del } from "./ajax"
import DataTable          from "datatables.net"

window.addEventListener('DOMContentLoaded', function () {
    const newTransactionModal  = new Modal(document.getElementById('newTransactionModal'))
    const editTransactionModal = new Modal(document.getElementById('editTransactionModal'))

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
            {data: "date"},
            {
                sortable: false,
                data: row => `
                    <div class="d-flex flex-">
                        <button type="submit" class="btn btn-outline-primary delete-transaction-btn" data-id="${ row.id }">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                        <button class="ms-2 btn btn-outline-primary edit-transaction-btn" data-id="${ row.id }">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                `
            }
        ]
    });

    document.querySelector('#transactionsTable').addEventListener('click', function (event) {
        const editBtn   = event.target.closest('.edit-transaction-btn')
        const deleteBtn = event.target.closest('.delete-transaction-btn')

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