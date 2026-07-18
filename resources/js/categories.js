import { Modal } from "bootstrap"
import { get, post, del } from "./ajax"
import DataTable          from "datatables.net"

window.addEventListener('DOMContentLoaded', function () {
    // 1. Check if the table actually exists in the DOM first to stop the crash
    const tableElement = document.getElementById('categoriesTable');
    if (!tableElement) {
        console.error("Fatal: #categoriesTable element not found in the DOM.");
        return; // Halts execution gracefully instead of crashing
    }

    const editCategoryModal = new Modal(document.getElementById('editCategoryModal'))

    // 2. Initialize DataTable safely
    const table = new DataTable('#categoriesTable', {
        serverSide: true,
        ajax: '/categories/load',
        orderMulti: false,
        columns: [
            {data: "name"},
            {data: "createdAt"},
            {data: "updatedAt"},
            {
                sortable: false,
                data: row => `
                    <div class="d-flex">
                        <button type="button" class="btn btn-outline-danger delete-category-btn" data-id="${row.id}">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                        <button type="button" class="ms-2 btn btn-outline-primary edit-category-btn" data-id="${row.id}">
                            <i class="bi bi-pencil-fill"></i>
                        </button>
                    </div>
                `
            }
        ]
    });

    // 3. Attach the event listener to the safe DOM element reference
    tableElement.addEventListener('click', function (event) {
        const editBtn = event.target.closest('.edit-category-btn')
        const deleteBtn = event.target.closest('.delete-category-btn')

        if (editBtn) {
            const categoryId = editBtn.getAttribute('data-id')

            get(`/categories/${categoryId}`)
                .then(response => response.json())
                .then(response => openEditCategoryModal(editCategoryModal, response))
        } else if (deleteBtn) { // 👈 FIXED: Changed from 'else' to 'else if' to prevent null pointer exceptions
            const categoryId = deleteBtn.getAttribute('data-id')

            if (confirm('Are you sure you want to delete this category?')) {
                del(`/categories/${categoryId}`).then(response => {
                    if (response.ok) {
                        table.ajax.reload(); // 👈 BETTER FOR CLIENT-SIDE: Reloads data array seamlessly
                    }
                })
            }
        }
    })

    // 4. Save Button Logic scoped inside DOMContentLoaded safely
    const modalElement = document.getElementById('editCategoryModal');
    if (modalElement) {
        const saveBtn = modalElement.querySelector('.save-category-btn');

        if (saveBtn) {
            saveBtn.addEventListener('click', function (event) {
                const categoryId = event.currentTarget.getAttribute('data-id');

                post(`/categories/${categoryId}`, {
                    name: editCategoryModal._element.querySelector('input[name="name"]').value
                }, editCategoryModal._element).then(response => {
                    if (response.ok) {
                        table.ajax.reload();
                        editCategoryModal.hide();
                    }
                });
            });
        } else {
            console.error("Could not find .save-category-btn inside #editCategoryModal");
        }
    } else {
        console.error("Could not find #editCategoryModal element in the DOM");
    }
});

function openEditCategoryModal(modal, {id, name}) {
    const nameInput = modal._element.querySelector('input[name="name"]')
    nameInput.value = name
    modal._element.querySelector('.save-category-btn').setAttribute('data-id', id)
    modal.show()
}