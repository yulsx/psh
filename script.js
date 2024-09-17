// Script for CRUD operations

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crud-form');
    const tableBody = document.querySelector('#data-table tbody');
    let editingRow = null;

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value;
            const email = form.email.value;

            if (editingRow) {
                // Update existing row
                editingRow.children[0].textContent = name;
                editingRow.children[1].textContent = email;
                editingRow = null;
                document.getElementById('update-btn').style.display = 'none';
            } else {
                // Add new row
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>
                        <button class="edit" onclick="editRow(this)">Edit</button>
                        <button class="delete" onclick="deleteRow(this)">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            }

            form.reset();
        });
    }
});

function editRow(button) {
    const row = button.closest('tr');
    const name = row.children[0].textContent;
    const email = row.children[1].textContent;
    
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('update-btn').style.display = 'inline';
    document.getElementById('crud-form').addEventListener('submit', function update(e) {
        e.preventDefault();
        row.children[0].textContent = document.getElementById('name').value;
        row.children[1].textContent = document.getElementById('email').value;
        document.getElementById('update-btn').style.display = 'none';
        document.getElementById('crud-form').removeEventListener('submit', update);
        document.getElementById('crud-form').reset();
    });
}

function deleteRow(button) {
    button.closest('tr').remove();
}

// Script for Calculator

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
