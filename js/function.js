// history button section
function getHistoryButtonById (id){
    const removeClass =document.getElementById(id).classList.add('bg-lime-300');
    const addClass=document.getElementById(id).classList.remove('border-2');
    return removeClass, addClass;
}
// donation button section
function getDonationButtonById (id){
    const removeClass =document.getElementById(id).classList.remove('bg-lime-300');
    const addClass =document.getElementById(id).classList.add('border-2');
    return removeClass, addClass;
}

// hidden add & remove function
function getAddHiddenById(id){
    const add =document.getElementById(id).classList.add('hidden');
    return add;
}
function getRemoveHiddenById(id){
    const remove = document.getElementById(id).classList.remove('hidden');
    return remove;
}

//input element function
function getInputElemantById (id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
// text element function
function getTextElementById(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue ;
}
