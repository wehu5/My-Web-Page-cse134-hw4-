const form = document.getElementById('chatBox');
const nameField = document.getElementById('visitorName');
const contactField = document.getElementById('visitorContact');
const questionField = document.getElementById('visitorQuestion');

const error = document.getElementById('error');
const submission = document.getElementById('submission');

const regexPattern1 = /^[A-Za-z ]+$/;
const regexPattern2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPattern3 = /^[A-Za-z0-9\s?!,.'"-]+$/;

nameField.addEventListener("input", (event) => {
    if (!regexPattern1.test(nameField.value)) {
        error.textContent = 'Please enter in English alphabets';
        error.style.display = 'block';
        error.style.backgroundColor = 'rgb(255, 199, 199)';
        error.style.borderRadius = '5px';
        nameField.classList.add('invalid-input');
        setTimeout(() => {
            nameField.classList.remove('invalid-input');
          error.style.display = 'none';
        }, 3000);
    } else {
        submission.textContent = 'Valid';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        contactField.setCustomValidity("");
    }
    event.preventDefault();
});

contactField.addEventListener("input", (event) => {
    if(!regexPattern2.test(contactField.value)) {
            error.textContent = 'Invalid email entered';
            error.style.display = 'block';
            error.style.backgroundColor = 'rgb(255, 199, 199)';
            error.style.borderRadius = '5px';
            contactField.classList.add('invalid-input');
            setTimeout(() => {
                contactField.classList.remove('invalid-input');
                error.style.display = 'none';
            }, 3000);
    } else {
        submission.textContent = 'Valid';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        contactField.setCustomValidity("");
    }
    event.preventDefault();
});

questionField.addEventListener("input", (event) => {
    let num = 50;
    if(!regexPattern3.test(questionField.value)) {
            error.textContent = 'There might be some invalid characters or punctuations';
            error.style.display = 'block';
            error.style.backgroundColor = 'rgb(255, 199, 199)';
            error.style.borderRadius = '5px';
            questionField.classList.add('invalid-input');
            setTimeout(() => {
                questionField.classList.remove('invalid-input');
                error.style.display = 'none';
            }, 3000);
    } else {
        submission.textContent = 'Valid';
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
        }
        else if(len > 50) {
            document.getElementById('count').innerHTML = 'Question/comment cannot exceed 50 characters';
            submission.style.display = 'none';
            questionField.classList.add('invalid-input');
            setTimeout(() => {
                questionField.classList.remove('invalid-input');
                document.getElementById('count').style.display = 'none';
            }, 3000);
            event.preventDefault();
        }
        contactField.setCustomValidity("");
    }
    event.preventDefault();
});

form.addEventListener('submit', function (event) {
    if (nameField.value === '') {
        nameField.setCustomValidity("Please enter your name");
        event.preventDefault(); // Prevent form submission
    } else if (!regexPattern1.test(nameField.value)) {
        error.textContent = 'Please enter in English alphabets';
        error.style.display = 'block';
        error.style.backgroundColor = 'rgb(255, 199, 199)';
        error.style.borderRadius = '5px';
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
        event.preventDefault(); // Prevent form submission
    } else {
        submission.textContent = 'Valid';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        nameField.setCustomValidity("");
    }

    if (contactField.value === '' || contactField.validity.typeMismatch) {
        contactField.setCustomValidity("Enter an email");
        event.preventDefault(); // Prevent form submission
    } else if(!regexPattern2.test(contactField.value)) {
        error.textContent = 'Invalid email entered';
        error.style.display = 'block';
        error.style.backgroundColor = 'rgb(255, 199, 199)';
        error.style.borderRadius = '5px';
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
        event.preventDefault(); // Prevent form submission
    } else {
        submission.textContent = 'Valid';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        contactField.setCustomValidity("");
    }

    if (questionField.value ==='') {
        questionField.setCustomValidity("Please enter a question or comment");
        event.preventDefault(); // Prevent form submission
    } 
    else if(!regexPattern3.test(questionField.value)) {
        error.textContent = 'There might be some invalid characters or punctuations';
        error.style.display = 'block';
        error.style.backgroundColor = 'rgb(255, 199, 199)';
        error.style.borderRadius = '5px';
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
        event.preventDefault(); // Prevent form submission
    } else {
        submission.textContent = 'Valid';
        submission.style.display = 'block';
        submission.style.backgroundColor = 'azure';
        submission.style.borderRadius = '5px';
        setTimeout(() => {
            submission.style.display = 'none';
        }, 3000);
        questionField.setCustomValidity("");
    }
});