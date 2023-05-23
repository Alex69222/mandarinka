const form = document.getElementById('form');
const modal = document.querySelector('.modal-wrapper');

const modalInfoP = modal.querySelector('.modal-info');
const modalBtn = modal.querySelector('.js-modal-btn');

const nameInput = form.querySelector("input[name='name']");
const emailInput = form.querySelector("input[name='email']");
const phoneInput = form.querySelector("input[name='phone']");
const agreementCheckBox = form.querySelector("input[name='agreement']");
const sendBtns = form.querySelectorAll('.js-send');

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

sendBtns.forEach(btn => {
    btn.addEventListener('click', validateAndSendForm)
});

[nameInput, emailInput, phoneInput, agreementCheckBox].forEach(input => {
    input.addEventListener('focus', () => input.parentElement.classList.remove('error'))
});

let blockSendForm = false;
let sendingForm = false;

function validateAndSendForm(e) {
    e.preventDefault();
    if(sendingForm){
        console.log('already sending')
        return;
    }
    if(blockSendForm){
        showModal('Ваша заявка уже отправлена!');
        return;
    }
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const agreement = agreementCheckBox.checked;
    const action = e.currentTarget.dataset.sendAction;
    let errorsCount = 0;

    if (!name.length || name.length < 3) {
        nameInput.parentElement.classList.add('error');
        errorsCount++;
    }
    if (!email.length || !email.match(mailFormat)) {
        emailInput.parentElement.classList.add('error');
        errorsCount++;
    }
    if(phone.length !== 18){
        phoneInput.parentElement.classList.add('error');
        errorsCount++;
    }
    if (!agreement) {
        agreementCheckBox.parentElement.classList.add('error');
        errorsCount++;
    }

    const data = {name, email, phone, agreement, action}
    if (errorsCount === 0) {
        console.log('start sending')
        sendData(data);
    }
}

async function  sendData (data){
    sendingForm = true;
    if(true){
        setTimeout(()=> {
            showModal('Ваша заявка успешно отправлена');
            blockSendForm = true;
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            sendingForm = false;
        }, 4000)

    }else{
        showModal('Произошла ошибка.<br>Повторите попытку позже.' )
    }
    console.log(data)
}



function showModal(modalInfoText){
    modalInfoP.innerHTML = modalInfoText;
    document.body.style.overflowY = 'hidden';
    modal.classList.add('show');
}
modalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.overflowY = 'scroll';
    modal.classList.remove('show');
})
function maskBtn() {
    [].forEach.call(
        document.querySelectorAll("input[type=tel]"),
        function (input) {
            let keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                let pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                let matrix = "+7 (___) ___-__-__",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    newValue = matrix.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                    });
                i = newValue.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    newValue = newValue.slice(0, i);
                }
                let reg = matrix
                    .substr(0, this.value.length)
                    .replace(/_+/g, function (a) {
                        return "\\d{1," + a.length + "}";
                    })
                    .replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (
                    !reg.test(this.value) ||
                    this.value.length < 5 ||
                    (keyCode > 47 && keyCode < 58)
                )
                    this.value = newValue;
                if (event.type == "blur" && this.value.length < 5) this.value = "";
            }
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false);
        }
    );
}
maskBtn();
