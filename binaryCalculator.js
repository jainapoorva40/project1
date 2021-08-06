/*const li=document.createElement('li');
li.className='collection-item';
//li.id="hi";
const textelement=document.createTextNode('One more Element');
li.append(textelement);
document.querySelector('ul.collection').appendChild(li);


//remove a element
//we can use the remove function
//for that we will have to get a particular function

//for normal deletion

const lis=document.querySelectorAll('li');
lis[5].remove();
//OR
//if we have to delete using parent child
const list=document.querySelector('ul');
list.removeChild(lis[0]);
//classes and attribute
//greetings would be there
//for replacing(for modifying classes)
const firstli=document.querySelector('li:first-child');
firstli.classList.add('test');
firstli.classList.remove('test');
console.log(firstli);

//on clicking off a particular button you want to modify something
//then for that we would require attributes
var link=document.querySelector('.link');
//it will show us all the attribues
var val=link.getAttribute('href');
val=link.setAttribute('href','https://google.com');
val=link.hasAttribute('target');
val=link.removeAttribute('target');
console.log(val);

var linkk=document.querySelector(".linkk");
var vall=linkk.getAttribute('href');
vall=linkk.setAttribute('href','https://youtube.com');
console.log(vall);

var linkkk=document.querySelector(".img");
var valll=linkkk.getAttribute('href');
valll=linkkk.setAttribute('href','https://gmail.com');
console.log(valll);


//to select a button
//to perform something upon the click
//what does e stands for?
//it stands for event
document.querySelector('.simplebutton').addEventListener('click',function(e){
    console.log("hello world");
    //it is used to prevent any sort of any error
    e.preventDefault();
});

document.querySelector('.simplebutton').addEventListener('click',function(e){
    
    console.log("hello");
    e.preventDefault();
})

//now if we want to do this using onclick function
//then this is how we would do this
document.querySelector('.simplebutton').addEventListener('click',onclick);
function onclick(e)
{
console.log("hello World");
e.preventDefault;
}

document.querySelector('.simplebutton').addEventListener('click',onclick);
function onclick(e){
val=e.target;
console.log(val);
}*/


/*
document.querySelector(.simplebutton).addEventListener('click',onclick);
function onclick(e){
    let val=e;
    val=e.target;
    val=e.target.className;
    val=e.type;
    val=e.timeStamp;
    //works with window
    //takes entire webpage as the game play
    //it will give us a margin
    //it will start counting from start
    val=e.clientY;
    val=e.clientX;
    //it takes extreme values
    //do not take it entirely
    //it will start taking values from the box only
    //it will start counting from the box
    val=e.offsetY;
    val=e.offsetX;

console.log(val);
}

*/

const button=document.querySelector('.simplebutton');

const heading=document.querySelector('#task-heading');
const card=document.querySelector('.card');
//document.querySelector('.simplebutton').addEventListener('dblclick' , runEvent);


card.addEventListener('mouseover',runEvent);
card.addEventListener('mouseout',runEvent);
card.addEventListener('mouseenter',runEvent);
card.addEventListener('mouseleave',runEvent);
card.addEventListener('mousemove',runEvent);

function runEvent(e){
heading.textContent=`MouseX : ${e.offsetX},MouseY : ${e.offsetY}`;
 document.body.style.backgroundColor=(`rgb(${e.offsetX},${e.offsetY},100`);
 console.log(`MouseX:${e.offsetX},MouseY:${e.offsetY}`);

    console.log(`Event Type : ${e.type}`);
}


    
//to remove or add text
//const form=document.querySelector('.input');
//form.value=' ';
//will have to make a form first


//$ for variable
//to make it understand

//mouse enter=whenever you go over an event,only when something is in real there
//mouse over/mouseover==even if nothing there,still it will work



