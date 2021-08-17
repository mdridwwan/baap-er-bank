//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function() {
    // get the amount deposit
    const depositField = document.getElementById('deposit-input');
    const newDepositAmount = depositField.value;
    // console.log(deposit)
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    const totalBalanceAll = parseFloat(newDepositAmount) + balanceTotalNumber;
    balanceTotal.innerText = totalBalanceAll;

    //input clear
    depositField.value = '';
})

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function() {
    //in[ut field]
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawField.value;
    //withdraw view
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalNumber = parseFloat(withdrawTotalText);
    // withdraw +
    const totalWithdraw = withdrawTotalNumber + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = totalWithdraw;
    //balance widthrow
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    const totalBalanceAll = balanceTotalNumber - newWithdrawAmount;
    balanceTotal.innerText = totalBalanceAll;
    //input clear
    withdrawField.value = '';
})