const wayLogin = document.querySelector('.way__login');
const wayEmail = document.querySelector('.way__email');
const wayPhone = document.querySelector('.way__phone');

const formLogin = document.querySelector('.form__login');
const formEmail = document.querySelector('.form__email');
const formPhone = document.querySelector('.form__phone');

// form
const formStart = document.querySelector('.form__start');
const formEnd = document.querySelector('.form__end');
const formError = document.querySelector('.form__error');
const formRestore = document.querySelector('.form__restore-pass');
const formRequestMessage = document.querySelector('.form__restore-request-message');

const forms = document.querySelectorAll('.forms__item');

const hideForms = ()=>{
    forms.forEach(form => {
        form.classList.add('hidden');
    });
}
wayLogin.addEventListener('click', ()=>{
    hideForms();
    formLogin.classList.remove('hidden');
    console.log('по-логину');
})
wayEmail.addEventListener('click', ()=>{
    hideForms();
    formEmail.classList.remove('hidden');
    console.log('по-email');
})
wayPhone.addEventListener('click', ()=>{
    hideForms();
    formPhone.classList.remove('hidden');
    console.log('по-телефону');
})


const formSended = ()=>{
    formStart.classList.add('flyaway');
        setTimeout(()=>{
            formStart.classList.add('hidden');
            formEnd.classList.remove('hidden');
            setTimeout(()=>{formEnd.classList.add('reveal');}, 50);
            }, 300)
}
const formErrorEvent = ()=>{
    formEnd.classList.remove('reveal');
    formEnd.classList.add('flyaway');
        setTimeout(()=>{
            formEnd.classList.add('hidden');
            formError.classList.remove('hidden');
            setTimeout(()=>{formError.classList.add('reveal');}, 50);
            }, 300)
}

// Форма 1
const formSend = document.querySelector('.send');
formSend.addEventListener('click', ()=>{
    document.querySelector('.form__start .error__text').classList.remove('hidden');
    //для тестирования ошибки пока, но эту функцию надо, вероятно, поставить в ajax на ошибку, но здеь я без ойгукн пишу, просто добавил его с скрипты
    setTimeout(()=>{formSended();}, 3000);
})
// Форма 2
const codeConfirm = document.querySelector('.confirm');
codeConfirm.addEventListener('click', function(){
    document.querySelector('.form__end .error__text').classList.remove('hidden');
    setTimeout(()=>{
        formErrorEvent();
    }, 5000)

})
// Форма 3 Восстановление пароля
const formRestorePass = ()=>{
    formStart.classList.add('flyaway');
        setTimeout(()=>{
            formStart.classList.add('hidden');
            formRestore.classList.remove('hidden');
            setTimeout(()=>{formRestore.classList.add('reveal');}, 50);
            }, 300)
    }
    document.querySelector('.restore').addEventListener('click', formRestorePass);

// Запрос
// const formRequestSend = ()=>{
//     formRestore.classList.add('flyaway');
//         setTimeout(()=>{
//             formRestore.classList.add('hidden');
//             formRequestMessage.classList.remove('hidden');
//             setTimeout(()=>{formRequestMessage.classList.add('reveal');}, 50);
//             }, 300)
//     }
    document.querySelector('.restore-request-send').addEventListener('click', ()=>{
        formRestore.classList.add('hidden');
        formRequestMessage.classList.remove('hidden');
    });

// NO_CODE
const noCodeLink = document.querySelector('.no-code__link');
const noCodeText = document.querySelector('.no-code__text');

noCodeLink.addEventListener('click', function(){
    noCodeText.classList.remove('hidden');
    this.classList.add('hidden');
})
noCodeText.addEventListener('click', function(){
    noCodeLink.classList.remove('hidden');
    this.classList.add('hidden');
});

// NO_REQUEST LINK
const noRequestLink = document.querySelector('.no-request__link');
const noRequestText = document.querySelector('.no-request__text');

noRequestLink.addEventListener('click', function(){
    noRequestText.classList.remove('hidden');
    this.classList.add('hidden');
})
noRequestText.addEventListener('click', function(){
    noRequestLink.classList.remove('hidden');
    this.classList.add('hidden');
});