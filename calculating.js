//hyponeuse can calculate the oppisite end of the right angle 

/////////////////////////Decimal functions/////////////////////

function decimal_add() {
    dec_add1 = window.prompt('choose a number to add..');
    dec_add2 = window.prompt('choose another number to add..');
    dec_add1 = parseFloat(dec_add1);
    dec_add2 = parseFloat(dec_add2);
    document.write(dec_add1 + dec_add2);

}

function decimal_subtract(){
    dec_sub1 = window.prompt('choose a number to subtract..');
    dec_sub2 = window.prompt('choose another number to subtract..');
    dec_sub1 = parseFloat(dec_sub1);
    dec_sub2 = parseFloat(dec_sub2);
    document.write(dec_sub1 - dec_sub2);

}

function decimal_multiply() {
    dec_mult1 = window.prompt('choose a number to multiple..');
    dec_mult2 = window.prompt('choose another number to multiple..');
    dec_mult1 = parseFloat(dec_mult1);
    dec_mult2 = parseFloat(dec_mult2);
    document.write(dec_mult1 * dec_mult2);

}

function decimal_divide() {
    dec_div1 = window.prompt('choose a number to divide..');
    dec_div2 = window.prompt('choose another number to divide..');
    dec_div1 = parseFloat(dec_div1);
    dec_div2 = parseFloat(dec_div2);
    document.write(dec_div1/dec_div2);

}


////////////////////Whole number functions//////////////////
function adding() {
    add1 = window.prompt('choose a number to add..');
    add2 = window.prompt('choose another number to add..');
    add1 = parseInt(add1);
    add2 = parseInt(add2);
    document.write(add1 + add2);


}

function subtraction() {

    sub1 = window.prompt('choose a number to subtract..');
    sub2 = window.prompt('choose another number to subtract..');
    sub1 = parseInt(sub1);
    sub2 = parseInt(sub2);
    document.write(sub1 - sub2);

}

function multiple() {
    mult1 = window.prompt('choose a number to multiple..');
    mult2 = window.prompt('choose another number to multiple..');
    mult1 = parseInt(mult1);
    mult2 = parseInt(mult2);
    document.write(mult1 * mult2);

}

function divide() {
    div1 = window.prompt('choose a number to divide..');
    div2 = window.prompt('choose another number to divide..');
    div1 = parseInt(div1);
    div2 = parseInt(div2);
    document.write(div1/div2);

}



//////////////////////////which interger functions/////////////////////////////////////
function whole_numbers() {
    var choose = window.prompt("Do you want to add, subtract, multiple, or divide?");
    if (choose == 'add'){
        adding()
    } else if (choose == 'subtract'){
        subtraction()
    } else if (choose == 'multiple'){
        multiple()
    } else if (choose == 'divide'){
        divide()
    } else {
    
        document.write('that is not a choice..');
    }

}

function decimal_numbers() {
    var choose = window.prompt("Do you want to add, subtract, multiple, or divide the decimals?");
    if (choose == 'add'){
        decimal_add()
    } else if (choose == 'subtract'){
        decimal_subtract()
    } else if (choose == 'multiple'){
        decimal_multiply()
    } else if (choose == 'divide'){
        decimal_divide()
    } else {
    
        document.write('that is not a choice..');
    }
}


//////////////////////////////Intro//////////////////////////////////////////////
var pick = window.prompt("Welcome to Hunter's calculator! Do you want to calculate whole numbers or decimals?");
if (pick == 'whole numbers'){
    whole_numbers()
} else if (pick == 'decimals') {
    decimal_numbers()

} else {
    document.write('that is not a choice..');
}



/*
var num1 = window.prompt('Enter a numer for adding..');
var num2 = window.prompt('Enter another number for adding..');

num1 = parseInt(num1);
num2 = parseInt(num2);

document.write(num1 + num2);
*/