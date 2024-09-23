function addClassListById (id){
    document.getElementById(id).classList.add('bg-lime-300')
}
function removeClassListById (id){
    document.getElementById(id).classList.remove('bg-lime-300')
}

// history button clicked
document.getElementById('btn-history').addEventListener('click', function(){
    addClassListById('btn-history')
    removeClassListById('btn-donation')
    document.getElementById('btn-history').classList.remove('border-2')
    document.getElementById('btn-donation').classList.add('border-2')

    document.getElementById('history-list').classList.remove('hidden')
    document.getElementById('food-donate-saction').classList.add('hidden')
})
// donation button clicked
document.getElementById('btn-donation').addEventListener('click', function(){
    removeClassListById('btn-history')
    addClassListById('btn-donation')

    document.getElementById('btn-history').classList.add('border-2')
    document.getElementById('btn-donation').classList.remove('border-2')
    
    document.getElementById('history-list').classList.add('hidden')
    document.getElementById('food-donate-saction').classList.remove('hidden')
})

// donate-now-button-1
document.getElementById('donate-noakhali-btn').addEventListener('click', function(){
   const inputAmount = parseFloat(document.getElementById('input-amount-noakhali').value);
   
   const noakhaliTotalAmount = parseFloat(document.getElementById('noakhali-amount-donate').innerText);
   const totalAmount = noakhaliTotalAmount + inputAmount;
   document.getElementById('noakhali-amount-donate').innerText = totalAmount;

   const balance = document.getElementById('balance').innerText;
   const totalBalance = balance - inputAmount;
   document.getElementById('balance').innerText = totalBalance;
  
   
   
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
   const inputAmount = parseFloat(document.getElementById('input-amount-feni').value);
   
   const faniTotalAmount = parseFloat(document.getElementById('feni-amount-donate').innerText);
   const totalAmount = faniTotalAmount + inputAmount;
   document.getElementById('feni-amount-donate').innerText = totalAmount;

   const balance = document.getElementById('balance').innerText;
   const totalBalance = balance - inputAmount;
   document.getElementById('balance').innerText = totalBalance;




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
   const inputAmount = parseFloat(document.getElementById('input-amount-quota').value);
   
   const quotaTotalamount = parseFloat(document.getElementById('qouta-amount-donate').innerText);
   const totalAmount = quotaTotalamount + inputAmount;
   document.getElementById('qouta-amount-donate').innerText = totalAmount;

   const balance = document.getElementById('balance').innerText;
   const totalBalance = balance - inputAmount;
   document.getElementById('balance').innerText = totalBalance;





   const div = document.createElement('div');
   div.className = " border-2 rounded-lg p-6 space-y-2 mb-4";
   div.innerHTML = `
           
           <p class ="text-xl font-bold">${inputAmount} Taka is Donate for Aid for Injured in the Quota Movement, Bangladesh</p>
           <p class ="text-xs text-gray-500">Date: ${new Date()}</p>
   `
   document.getElementById('history-list').appendChild(div);

})







{/* <p class ="text-xs text-gray-500">Expenss: $${totalAmount.toFixed(2)}</p>
<p class ="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
` */}