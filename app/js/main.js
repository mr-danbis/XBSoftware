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

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        openModal();
    });
}

let openModal = () => {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

let closeModal = () => {
    let modal = document.querySelector('.modal');
    let closeBTN = modal.querySelector('button');
    
    closeBTN.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

let animateAfterLoaded = () => {
    document.querySelector('.contact__wrapper').classList.add('visible');
    document.querySelector('.contact__info').classList.add('visible');
    document.querySelector('.form').classList.add('visible');
}


document.addEventListener('DOMContentLoaded', () => {
    animateAfterLoaded()
    openSelectList();
    sendForm();
    closeModal();
});