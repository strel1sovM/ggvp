const ebanoefoto = document.querySelectorAll('img')
ebanoefoto.forEach(foto => {
    foto.classList.add('.add')
})
document.querySelectorAll('.add').forEach(button => {
    button.addEventListener('click', function () {
        let row = this.closest('tr');
        row.querySelectorAll('td:not(:first-child):not(:last-child)').forEach((td, index) => {
            if (!td.querySelector('input')) {
                let text = td.textContent;
                let input = document.createElement('input');

                input.classList.add('check');
                input.type = 'text';
                input.value = text;
                input.placeholder = 'input.value'
                input.name = index === 0 ? 'name' : 'year';
                td.textContent = '';
                td.appendChild(input);
            }
        });

    });
});

document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function () {
        let row = this.closest('tr');
        row.querySelectorAll('td:not(:first-child):not(:last-child)').forEach(td => {
            let input = td.querySelector('input');
            if (input) {
                td.textContent = input.value;
            }
        });
    });
});

const users = [];

document.querySelectorAll('.add').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let row = e.target.closest('tr');
        let user = {};
        const inputs = row.querySelectorAll('input.check');


        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                user[input.name] = input.value;
            }
        });

        if (Object.keys(user).length > 0) {
            users.push(user);
            console.log(user);
        }
        let icon = e.target;

        icon.src = 'img/clipboard-check-svgrepo-com.svg';



    });
});
document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let row = e.target.closest('tr');
        let user = {};
        const inputs = row.querySelectorAll('input.check');


        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                user[input.name] = input.value;
            }
        });

        if (Object.keys(user).length > 0) {
            users.push(user);
            console.log(user);
        }
        const created = document.querySelectorAll('.add')
        created.forEach(item => {
            item.src = " img/clipboard-add-svgrepo-com.svg"
        })
    });
}); 