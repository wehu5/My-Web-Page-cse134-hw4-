const submit= document.getElementById('ask');
const nameField = document.getElementById('visitorName');
const contactField = document.getElementById('visitorContact');
const questionField = document.getElementById('visitorQuestion');

const error = document.getElementById('error');
const submission = document.getElementById('submission');

const regexPattern2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form_errors = [];

nameField.addEventListener("input", (event) => {
    if (nameField.validity.valueMissing) {
        nameField.setCustomValidity("Please enter your name");
        form_errors.push('No name entered');
    }
    else if(nameField.validity.patternMismatch) {
        error.textContent = 'Please enter in English alphabets';
        error.style.display = 'block';
        error.style.backgroundColor = 'rgb(255, 199, 199)';
        error.style.borderRadius = '5px';
        nameField.classList.add('invalid-input');
        submission.style.display = 'none';
        setTimeout(() => {
            nameField.classList.remove('invalid-input');
          error.style.display = 'none';
        }, 3000);
    } else {
        submission.textContent = 'Validating';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        contactField.setCustomValidity("");
    }
});

contactField.addEventListener("input", (event) => {
    if (contactField.validity.valueMissing || contactField.validity.typeMismatch) {
        contactField.setCustomValidity("Enter an email");
        form_errors.push('No contact entered');
    }
    else if(!regexPattern2.test(contactField.value)) {
            error.textContent = 'Invalid email entered';
            error.style.display = 'block';
            error.style.backgroundColor = 'rgb(255, 199, 199)';
            error.style.borderRadius = '5px';
            contactField.classList.add('invalid-input');
            submission.style.display = 'none';
            setTimeout(() => {
                contactField.classList.remove('invalid-input');
                error.style.display = 'none';
            }, 3000);
    } else {
        submission.textContent = 'Validating';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        contactField.setCustomValidity("");
    }
});

questionField.addEventListener("input", (event) => {
    let num = 50;
    if (questionField.validity.valueMissing) {
        questionField.setCustomValidity("Please enter a question or comment");
        form_errors.push('No question/comment entered');
    }
    else if(questionField.validity.patternMismatch) {
            error.textContent = 'There might be some invalid characters or punctuations';
            error.style.display = 'block';
            error.style.backgroundColor = 'rgb(255, 199, 199)';
            error.style.borderRadius = '5px';
            questionField.classList.add('invalid-input');
            submission.style.display = 'none';
            setTimeout(() => {
                questionField.classList.remove('invalid-input');
                error.style.display = 'none';
            }, 3000);
    } else {
        submission.textContent = 'Validating';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        let len = questionField.value.length;
        if(len >= 40 && len <= 50) {
            let remaining = num - len;
            document.getElementById('count').innerHTML = 'Character Until 50 limit: ' + remaining;
            document.getElementById('count').style.display = 'block';
            document.getElementById('count').style.margin = '0';
            document.getElementById('count').style.backgroundColor = 'azure';
            document.getElementById('count').style.borderRadius = '5px';
            contactField.setCustomValidity("");
        }
        else if(len > 50) {
            document.getElementById('count').innerHTML = 'Question/comment cannot exceed 50 characters';
            submission.style.display = 'none';
            questionField.classList.add('invalid-input');
            form_errors.push(document.getElementById('count').innerHTML);
            setTimeout(() => {
                questionField.classList.remove('invalid-input');
                document.getElementById('count').style.display = 'none';
            }, 3000);
            contactField.setCustomValidity("The character limit is 50.");
            event.preventDefault();
        }
    }
});

submit.addEventListener('click', function (event) {
    let errors = JSON.stringify(form_errors);
    document.getElementById('form-errors').value = errors;
    if (nameField.validity.valueMissing) {
        nameField.setCustomValidity("Please enter your name");
        form_errors.push('No name entered');
        event.preventDefault(); // Prevent form submission
    } else if (nameField.validity.patternMismatch) {
        event.preventDefault(); // Prevent form submission
        error.textContent = 'Please enter in English alphabets';
        error.style.display = 'block';
        error.style.backgroundColor = 'rgb(255, 199, 199)';
        error.style.borderRadius = '5px';
        form_errors.push('Invalid character(s) for name input');
        submission.style.display = 'none';
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
    } else {
        submission.textContent = 'Validating';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        nameField.setCustomValidity("");
    }

    if (contactField.validity.valueMissing || contactField.validity.typeMismatch) {
        contactField.setCustomValidity("Enter an email");
        form_errors.push('No contact entered');
        event.preventDefault(); // Prevent form submission
    } else if(!regexPattern2.test(contactField.value)) {
        event.preventDefault(); // Prevent form submission
        error.textContent = 'Invalid email entered';
        error.style.display = 'block';
        error.style.backgroundColor = 'rgb(255, 199, 199)';
        error.style.borderRadius = '5px';
        form_errors.push('Invalid email');
        submission.style.display = 'none';
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
    } else {
        submission.textContent = 'Validating';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        contactField.setCustomValidity("");
    }

    if (questionField.validity.valueMissing) {
        questionField.setCustomValidity("Please enter a question or comment");
        form_errors.push('No question/comment entered');
        event.preventDefault(); // Prevent form submission
    } else if(questionField.validity.patternMismatch) {
        event.preventDefault(); // Prevent form submission
        error.textContent = 'There might be some invalid characters or punctuations';
        error.style.display = 'block';
        error.style.backgroundColor = 'rgb(255, 199, 199)';
        error.style.borderRadius = '5px';
        submission.style.display = 'none';
        form_errors.push('Invalid character(s)/punctuation(s) entered');
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
    } else {
        submission.textContent = 'Validating';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        questionField.setCustomValidity("");
    }
    // console.log('Array: ');
    // console.log(form_errors);
    // console.log(form_errors.length);
    // let errors = JSON.stringify(form_errors);
    // document.getElementById('form-errors').value = errors;
    // console.log('JSON: ');
    // console.log(errors);
});

const lightSwitch = document.getElementsByClassName('slider')[0];
let mode = document.querySelector('[lang="en"]');
let modeText = document.getElementById('mode-text');

if(localStorage.getItem('theme') === null) {
    localStorage.setItem('mode', mode.getAttribute('theme'));
    mode.setAttribute('theme', mode.getAttribute('theme'));
}
else {
    mode.setAttribute('theme', localStorage.getItem('theme'));
    modeText.innerHTML = localStorage.getItem('theme') === 'dark' ? 'Dark Mode' : 'Bright Mode';
}
lightSwitch.addEventListener('click', function(event) {
        if(mode.getAttribute('theme') === 'bright') {
            mode.setAttribute('theme', 'dark');
            modeText.innerHTML = 'Dark Mode';
            localStorage.setItem('theme', 'dark');
        }
        else {
            mode.setAttribute('theme', 'bright');
            modeText.innerHTML = 'Bright Mode';
            localStorage.setItem('theme', 'bright');
        }
        console.log(mode.theme);
        console.log(modeText);
    }
);