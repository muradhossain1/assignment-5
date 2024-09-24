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

// blog button clicked
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html';
})

// history button clicked
document.getElementById('btn-history').addEventListener('click', function(){
    getHistoryButtonById('btn-history');
    getDonationButtonById('btn-donation')

    getRemoveHiddenById('history-list')
    getAddHiddenById('food-donate-saction')
})
// donation button clicked
document.getElementById('btn-donation').addEventListener('click', function(){
    getDonationButtonById('btn-history')
    getHistoryButtonById('btn-donation')

    getAddHiddenById('history-list')
    getRemoveHiddenById('food-donate-saction')
})

// donate-now-button-1
document.getElementById('donate-noakhali-btn').addEventListener('click', function(){
   const inputAmount = getInputElemantById('input-amount-noakhali');
   const noakhaliTotalAmount = getTextElementById('noakhali-amount-donate');
   const totalAmount = noakhaliTotalAmount + inputAmount;
   document.getElementById('noakhali-amount-donate').innerText = totalAmount;

   const balance = getTextElementById('balance');
   const totalBalance = balance - inputAmount;
   document.getElementById('balance').innerText = totalBalance;
  
   // history massage
   const div = document.createElement('div');
   div.className = " border-2 rounded-lg p-6 space-y-2 mb-4";
   div.innerHTML = `
           
           <p class ="text-xl font-bold">${inputAmount} Taka is Donate for Flood at Noakhali, Bangladesh</p>
           <p class ="text-xs text-gray-500">Date: ${new Date()}</p>
   `
   document.getElementById('history-list').appendChild(div);
})

// donate-now-button-2
document.getElementById('donate-feni-btn').addEventListener('click', function(){
   const inputAmount = getInputElemantById('input-amount-feni');
   const faniTotalAmount = getTextElementById('feni-amount-donate');
   const totalAmount = faniTotalAmount + inputAmount;
   document.getElementById('feni-amount-donate').innerText = totalAmount;

   const balance = document.getElementById('balance').innerText;
   const totalBalance = balance - inputAmount;
   document.getElementById('balance').innerText = totalBalance;

  // history massage
   const div = document.createElement('div');
   div.className = " border-2 rounded-lg p-6 space-y-2 mb-4";
   div.innerHTML = `
           
           <p class ="text-xl font-bold">${inputAmount} Taka is Donate for Flood Relief in Feni,Bangladesh, Bangladesh</p>
           <p class ="text-xs text-gray-500">Date: ${new Date()}</p>
   `
   document.getElementById('history-list').appendChild(div);

})

// donate-now-button-3
document.getElementById('donate-quota-btn').addEventListener('click', function(){
   const inputAmount = getInputElemantById('input-amount-quota');
   const quotaTotalamount = getTextElementById('qouta-amount-donate');
   const totalAmount = quotaTotalamount + inputAmount;
   document.getElementById('qouta-amount-donate').innerText = totalAmount;

   const balance = document.getElementById('balance').innerText;
   const totalBalance = balance - inputAmount;
   document.getElementById('balance').innerText = totalBalance;

   // history massage
   const div = document.createElement('div');
   div.className = " border-2 rounded-lg p-6 space-y-2 mb-4";
   div.innerHTML = `
           
           <p class ="text-xl font-bold">${inputAmount} Taka is Donate for Aid for Injured in the Quota Movement, Bangladesh</p>
           <p class ="text-xs text-gray-500">Date: ${new Date()}</p>
   `
   document.getElementById('history-list').appendChild(div);

})


const btnContinue = document.getElementById('btn-continue');
btnContinue.addEventListener('click', function () {
    window.location.reload(inputAmount);
});



{/* <p class ="text-xs text-gray-500">Expenss: $${totalAmount.toFixed(2)}</p>
<p class ="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
` */}