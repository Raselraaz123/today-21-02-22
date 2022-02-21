function getinputValue(inputd) {
    const inputFild = document.getElementById(inputd);
    const valueInText = inputFild.value;
    const convertValue = parseFloat(valueInText);
    inputFild.value = ' ';
    return convertValue;
    console.log(convertValue)
}
function updatetotal(inputd,amount) {
    const inputFild=document.getElementById(inputd)
}


document.getElementById("deposit-btn").addEventListener('click', function () {
    const amount = getinputValue('deposit-input')
    updatetotal(deposit, amount)

   
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getinputValue('withdraw-input');
})