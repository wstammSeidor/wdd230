const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    if (input.value != '') {
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        li.textContent = input.value;
        deleteBtn.textContent = '❌';
        li.append(deleteBtn);
        list.append(li);
        deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
        });
        input.value = '';
        input.focus();
    }
    });