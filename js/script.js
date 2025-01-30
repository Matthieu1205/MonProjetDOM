document.addEventListener('DOMContentLoaded', () => {
    const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll('.card').forEach(card => {
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', ''));
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        total += unitPrice * quantity;
      });
      document.querySelector('.total').textContent = `${total} $`;
    };
  
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
      button.addEventListener('click', () => {
        const quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
      button.addEventListener('click', () => {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = --quantity;
          updateTotalPrice();
        }
      });
    });
  
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card-body');
        card.remove();
        updateTotalPrice();
      });
    });
  });
  
        
