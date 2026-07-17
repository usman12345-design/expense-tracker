import { Modal } from "bootstrap"
import { get, post, del } from "./ajax"

window.addEventListener('DOMContentLoaded', function () {
    const editCategoryModal = new Modal(document.getElementById('editCategoryModal'))

    document.querySelectorAll('.edit-category-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            const categoryId = event.currentTarget.getAttribute('data-id')

            get(`/categories/${ categoryId }`)
                .then(response => response.json())
                // 2. Now 'data' is the actual JSON containing your {id, name}
                .then(data => {
                    console.log("Actual Category Data:", data); // You should see {id: 6, name: "..."} here!

                    // 3. Pass the clean data object to your modal function
                    openEditCategoryModal(editCategoryModal, data);
                })
                .catch(error => console.error("Error fetching category:", error));
        })
    })

    document.querySelector('.save-category-btn').addEventListener('click', function (event) {
        const categoryId = event.currentTarget.getAttribute('data-id')


        post(`/categories/${ categoryId }`, {
            name: editCategoryModal._element.querySelector('input[name="name"]').value
        }, editCategoryModal._element).then(response => {
            if (response.ok) {
                editCategoryModal.hide()
            }
        })
    });

    document.querySelector('.delete-category-btn').addEventListener('click', function (event) {
        const categoryId = event.currentTarget.getAttribute('data-id')

        if (confirm('Are you sure you want to delete this category?')) {
            del(`/categories/${ categoryId }`)
        }
    })


});
function openEditCategoryModal(modal, {id, name}) {
    const nameInput = modal._element.querySelector('input[name="name"]')
    console.log(name);
    nameInput.value = name
    console.log("Found HTML Input Element:", nameInput);

    modal._element.querySelector('.save-category-btn').setAttribute('data-id', id)

    modal.show()
}