var itemlist = document.querySelector('#items');

//parentNode


//console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = '#f4f4f4';

 // console.log(itemList.parentNode.parentliode.parentNode);


// parentElement


//console.log(itemlist.parentElement);

// itemlist.parentElement.style.backgroundColor = '#f4f4f4';



// console.log(itemlist.parentElement.parentElement.parentElement)


// childNodes

 // console.log(itemlist.childNodes);



console.log(itemList.children);

 console.log(itemList.children[1]);



// itemlist.children[1].style.backgroundColor= 'yellow';

console.log(itemlist.firstChild);
var newDiv = document.createElement('div');
newDiv.className= 'hello';
 newDiv.id = 'hello1';


// Add attr

 newDiv.setAttribute('title', 'Hello Div');


// Create text node

 var newDivText = document.createTextNode('Hello World');


newDiv.appendChild(newDivText);

 var container=document.querySelector('header .container');

 var h1 = document.querySelector('header h1'); 158

 console.log(newDiv);
 newDiv.style. fontSize = '30px';
  container.insertBefore(newDiv, h1);