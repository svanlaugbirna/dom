document.addEventListener('DOMContentLoaded', function () {
    const shoppingList = document.getElementById('shoppingList');
  
    function createListItem(itemName) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${itemName}</span>
        <input type="number" value="1" min="1">
        <button class="removeBtn">Remove</button>
      `;
  
      const removeBtn = li.querySelector('.removeBtn');
      removeBtn.addEventListener('click', function () {
        li.remove();
      });
  
      shoppingList.appendChild(li);
    }
  
    const addItemForm = document.createElement('form');
    addItemForm.innerHTML = `
      <input type="text" id="itemName" placeholder="Enter item name" required>
      <button type="submit">Add Item</button>
    `;
  
    addItemForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const itemNameInput = document.getElementById('itemName');
      const itemName = itemNameInput.value.trim();
      if (itemName !== '') {
        createListItem(itemName);
        itemNameInput.value = '';
      }
    });
  
    document.querySelector(".container").insertBefore(addItemForm, shoppingList); 
  });
  