let openSelectList = () => {
    let allSelests = document.querySelectorAll('.form__select');
    let isListVisible = false;

    allSelests.forEach(select => {
        select.querySelector('div').addEventListener('click', () => {
            isListVisible = !isListVisible;
            select.querySelector('.form__select-options').style.display = isListVisible ? 'block' : 'none';
            if (isListVisible) {
                select.classList.add('active');
            } else {
                select.classList.remove('active');
            }
            selectOption(select);
        });
    });
}

let selectOption = (select) => {
    select.querySelectorAll('li').forEach(option => {
        option.addEventListener('click', () => {
            select.querySelectorAll('li').forEach(opt => opt.classList.remove('active'));
            select.querySelector('div').textContent = option.textContent;
            select.classList.add('selected');
            option.classList.add('active');

            if (select.classList.contains('invalid')){
                select.classList.remove('invalid')
            }
        });
    });
};

let sendForm = () => {
    let form = document.querySelector('.form');
    let allInputs = form.querySelectorAll('.formInput');
    let btn = form.querySelector('button');
    
    btn.addEventListener('click', function (event) {
        allInputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });

        form.querySelectorAll('.form__select').forEach(select => {
            if (!select.classList.contains('selected')){
                select.classList.add('invalid');
            }
        });
    });


    allInputs.forEach(input => {
        input.addEventListener('input', function () {
            if (input.value.trim() !== '') {
                input.classList.remove('invalid');
            } else {
                input.classList.add('invalid');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    openSelectList();
    sendForm();
});