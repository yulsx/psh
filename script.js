document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crud-form');
    const tableBody = document.querySelector('#data-table tbody');
    const updateButton = document.getElementById('update-btn');
    let editingRow = null;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (editingRow) {
            editingRow.querySelector('.name').textContent = name;
            editingRow.querySelector('.email').textContent = email;
            editingRow = null;
            updateButton.style.display = 'none';
        } else {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td class="name">${name}</td>
                <td class="email">${email}</td>
                <td>
                    <button class="edit" onclick="editRow(this)">Edit</button>
                    <button class="delete" onclick="deleteRow(this)">Delete</button>
                </td>
            `;
        }

        form.reset();
    });

    window.editRow = (btn) => {
        editingRow = btn.closest('tr');
        document.getElementById('name').value = editingRow.querySelector('.name').textContent;
        document.getElementById('email').value = editingRow.querySelector('.email').textContent;
        updateButton.style.display = 'inline';
    };

    window.deleteRow = (btn) => {
        if (confirm('Are you sure you want to delete this row?')) {
            btn.closest('tr').remove();
        }
    };
});
