// DRY- Do not repeat yourself
document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount=getFieldInputValueById('deposit-field');

    const error=withoutNumberInput(newDepositAmount);
    if(error===false){
        alert('please insert positive numeric balance');
    }
    else{
        const previousDeposit=getElementValueById('total-deposit');
        // get previous deposit deposit total
    
        const newDepositTotal=newDepositAmount + previousDeposit;
        // set deposit total value
        setTextElementValueById('total-deposit',newDepositTotal);
    
        //get previous balance by using function
        const previousBalanceTotal=getElementValueById('total-balance');
        const newBalanceTotal=previousBalanceTotal+newDepositAmount;
        setTextElementValueById('total-balance',newBalanceTotal);
    }
    // get input field value
   

})
