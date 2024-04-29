const checkButton = document.getElementById('check-btn');
const telNumber = document.getElementById('user-input');
const clearButton = document.getElementById('clear-btn');
const result = document.getElementById('results-div');


const numberRegex = /^(?:1|)\s*?-?(\d){3}\s*?-?(\d){3}\s*?-?(\d){4}$/;
const numberRegexP = /^(?:1|)\s*?-?\((\d){3}\)\s*?-?(\d){3}\s*?-?(\d){4}$/;

const isValid = (number) => {
    let matchRegex = false;
    
    if(numberRegex.test(number) || numberRegexP.test(number)){
        matchRegex = true;
    }

    return matchRegex;
}

checkButton.addEventListener('click', ()=> {
    if(telNumber.value === ''){
        alert('Please provide a phone number')
    }

    if(isValid(telNumber.value)){
        result.innerHTML += `<p>Valid US number: ${telNumber.value}</p>`;
        telNumber.value = '';
    }
    
    else {
        result.innerHTML += `<p>Invalid US number: ${telNumber.value}</p>`;
        telNumber.value = '';
    }
})

clearButton.addEventListener('click', ()=> {
    if(result.value !== ''){
        return result.textContent = '';
    }
})