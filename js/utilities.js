function getFieldInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const textElement=document.getElementById(elementId);
    const textElementValueString=textElement.innerText;
    const textElementValue=parseFloat(textElementValueString);
    return textElementValue;
}


function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
}
function withoutNumberInput(errorId){
    if(isNaN(errorId) || errorId<0){
        // alert('Please insert a numeric amount');
        return false;
    }
    else{
        return true;
    }
}