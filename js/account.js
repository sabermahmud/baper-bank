document.getElementById('deposit-btn').addEventListener('click', function () {

    const inputField = document.getElementById('input-field');
    const input = inputField.value;
    const inputData = parseFloat(input)

    const displayDepo = document.getElementById('display-dipo');
    const displayDeposit = displayDepo.innerText;
    const depositData = parseFloat(displayDeposit);
    displayDepo.innerText = depositData + inputData;
    inputField.value = "";

    const totalBalance = document.getElementById('total-Balance');
    const displayTotal = totalBalance.innerText;
    const balanceData = parseFloat(displayTotal);
    totalBalance.innerText = balanceData + inputData;

})




document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInput = withdrawInputField.value;
    withdrawInputData = parseFloat(withdrawInput);
    
    const withdrawDisplay = document.getElementById('withdraw-display');
    const displayWithdraw = withdrawDisplay.innerText;
    displayWithdrawData = parseFloat(displayWithdraw);
    withdrawDisplay.innerText= displayWithdrawData + withdrawInputData;
    withdrawInputField.value = "";

    const totalBalance = document.getElementById('total-Balance');
    const displayTotal = totalBalance.innerText;
    const balanceData = parseFloat(displayTotal);
    totalBalance.innerText = balanceData - withdrawInputData;

})

document.getElementById('back-btn').addEventListener('click',function(){
    location.href = 'http://127.0.0.1:5500/index.html'
})