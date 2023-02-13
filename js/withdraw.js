//add withdraw button event handler
//get withdraw amount by using getInputFieldValueById function
// get previous withdraw amount by using getTextElementValueById function
//calculate new withdraw total and set the value
// set new withdraw total by using setTextElementValueById
// get previous balance total using getTextElementValueById
// calculate new balance total
// set balance total using setTextElementValueById 

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getFieldInputValueById('withdraw-field');
    
    const error=withoutNumberInput(newWithdrawAmount);
    
    if(error==false){
        alert('please insert positive numeric value');
    }
    else{
        const previousWithdrawTotal=getElementValueById('withdraw-total');
           
            
            const previousBalanceTotal=getElementValueById('total-balance');
            if(newWithdrawAmount>previousBalanceTotal){
                alert('you do not have enough balance');
            }
            else{
                const NewTotalWithdraw=newWithdrawAmount+previousWithdrawTotal;
                setTextElementValueById('withdraw-total',NewTotalWithdraw);
            const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
            setTextElementValueById('total-balance',newBalanceTotal);
        }
          
        
    }
    
    })