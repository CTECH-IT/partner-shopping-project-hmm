const HIDDEN_DETAIL_CLASS = "invisible";


document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    
    if (document.getElementById('email-input').value) {
        email = document.getElementById('email-input').value;
        remoteDataStore.add({'emailAddress': email, 'factor': 'calebtyler', 'pdata': JSON.stringify(cartItems), 'sdata': JSON.stringify(itemPrices)});
        console.log(cartItems);
        remoteDataStore.remove('ABCabc15739');
        remoteDataStore.add({'emailAddress': 'ABCabc15739', 'pdata': {}, 'sdata': {}});
        window.location.reload()
    } else {
        
    }
})
