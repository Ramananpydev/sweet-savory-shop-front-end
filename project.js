   let quantity = 1;

    function increase() {
      quantity++;

      document.getElementById('qty').value = quantity;
      document.getElementById('price').innerHTML = quantity * 40;
      
    }

    function decrease() {
      if (quantity > 1) {
        quantity--;
        document.getElementById('qty').value = quantity;
        document.getElementById('price').innerHTML = quantity * 40;
      }
    }

    
    // Automatically show or hide card details
    
document.querySelectorAll('input[name="payment"]').forEach(option => {
  option.addEventListener('change', function() {
    const cardDetails = document.getElementById('card-details');
    if (this.value === 'card') {
      cardDetails.style.display = 'block';
    } else {
      cardDetails.style.display = 'none';
    }
  });
});

    

    document.querySelector(".checkout-form").addEventListener("submit", function(e) {
      e.preventDefault();
      window.location.href = "order-success.html";
    });