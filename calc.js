let a = ''; // first number
let b = ''; //second number
let sign = ''; // знак операции
let finish = false; 

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/', '%', '+/-'];

//экран
const out = document.querySelector('.cals_screen p');

function clearAll() {
    a = ''; // first number
    b = ''; //second number
    sign = ''; // знак операции
    finish = false; 
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) =>{
    //нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    //нажата кнопка clearAll ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent;

    //если нажата 0-9 || .
    if (digit.includes(key)) {
        if (b === ''&& sign === '') {
            a+= key;
            console.log(a, b, sign)
            out.textContent = a;
        }else if (a !=='' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }else{
            b += key
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

     //если нажата +, -, /, * || .
    if (action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(sign)
        return
    }

    // if ( key === "+/-"){
    //     if (b === ''){
    //         a = -a
    //         out.textContent = a;
    //     }else{
    //         b = -b
    //         out.textContent = b;
    //     }
    //     return;
    // }

    // if (key === "+/-"){
    //      b = parseFloat(out.textContent);
    //     b = -b;
    //     out.textContent = b
    //     return
    // }
    
    if (key === '+/-'){
        if (b === '') return;
        a = parseFloat(a) * -1
        out.textContent = a;
        return
    }

    if ( key === "%"){
        if ( b === ''){
            a = a / 100;
            out.textContent = a;
        }else{
            b = ( a * b ) / 100;
            out.textContent = b;
        }
        return
    }

    //нажата =
    if (key === '='){
        if ( b === '') b = a;
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break
            case "-":
                a = a - b;
                break
            case "x":
                a = a * b;
                break
            case "/":
            if (b === "0"){
                out.textContent = 'Error';
                a = '';
                b = '';
                sing = '';
                return;
            }
                a = a / b;
                break

            case "%":

        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign)
    }
}

