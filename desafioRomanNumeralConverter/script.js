const convertBtn = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output');

const romanNumber = [
    {
        name: 'unit',
        0: '',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
    },
    {
        name: 'tens',
        0: '',
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L',
        6: 'LX',
        7: 'LXX',
        8: 'LXXX',
        9: 'XC',
    },
    {
        name: 'hundreds',
        0: '',
        1: 'C',
        2: 'CC',
        3: 'CCC',
        4: 'CD',
        5: 'D',
        6: 'DC',
        7: 'DCC',
        8: 'DCCC',
        9: 'CM',
    },
    {
        name: 'unit_of_thousand',
        1: 'M',
        2: 'MM',
        3: 'MMM'
    }

]

const checkNumber = () => {
    const stringNum = number.value;
    const break_down = stringNum.split('');
    const roman_number_unit = romanNumber[0];
    const roman_number_tens = romanNumber[1];
    const roman_number_hundreds = romanNumber[2];
    const roman_number_unit_thousand = romanNumber[3];
    let text_template;
    
    if(break_down.length === 1){
        text_template = `${roman_number_unit[break_down[0]]}`
    }
    else if(break_down.length === 2){
       text_template = `${roman_number_tens[break_down[0]]}${roman_number_unit[break_down[1]]}`
    }
    else if(break_down.length === 3) {
        text_template = `${roman_number_hundreds[break_down[0]]}${roman_number_tens[break_down[1]]}${roman_number_unit[break_down[2]]}`
    }
    else {
        text_template = `${roman_number_unit_thousand[break_down[0]]}${roman_number_hundreds[break_down[1]]}${roman_number_tens[break_down[2]]}${roman_number_unit[break_down[3]]}`
    }
    output.textContent= text_template;
}


convertBtn.addEventListener('click',()=>{
    const int = parseInt(number.value);
    console.log(int)
    if(isNaN(int)){
        output.textContent = "Please enter a valid number";
    }
    else if (int < 0) {
        output.textContent = 'Please enter a number greater than or equal to 1';
    }
    else if(int >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
    }
    else{
        checkNumber();
    }
})

number.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        const int = parseInt(number.value);
        if(isNaN(int)){
            output.textContent = "Please enter a valid number";
        }
        else if (int < 0) {
            output.textContent = 'Please enter a number greater than or equal to 1';
        }
        else if(int >= 4000) {
            output.textContent = 'Please enter a number less than or equal to 3999';
        }
        else {
            checkNumber();
        }
    }
})

