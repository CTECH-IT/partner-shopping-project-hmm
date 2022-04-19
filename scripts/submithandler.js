
document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    email = document.getElementById('email-input').value
    remoteDataStore.add({'emailAddress': email, 'factor': "calebtyler", 'pdata': JSON.stringify(cartItems), 'sdata': JSON.stringify(itemPrices)});
    console.log(cartItems)
})