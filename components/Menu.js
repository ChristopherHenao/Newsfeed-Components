// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


function menuMaker(array){
  // Created elements
  let menu = document.createElement("div");
  let list = document.createElement("ul");
  
  // Added class to element
  menu.classList.add("menu");

  // Appended elements
  document.body.appendChild(menu);
  menu.appendChild(list);

  // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  // Add those items to the <ul>
  array.map(function(item){
  let listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
  return listItem;
  })

  // Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  let menuButton = document.querySelector(".menu-button");

  // Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  menuButton.addEventListener("click", function(event){
    menu.classList.toggle("menu--open");

    // Step 5: Don't forget to return your div.menu.
    return menu;
  })  
}

// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
menuMaker(menuItems);


  
  
  
  
  
  
  


  



  



  

