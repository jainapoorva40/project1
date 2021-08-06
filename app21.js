/*document.querySelector('.get-jokes').addEventListener('click',getJokes);
function getJokes(e)
{
    const number=document.getElementById('number').value;
    const xhr=new XMLHttpRequest();

    //console.log('Click');
    //e.preventDefault();
    
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload=function(){
        if(this.status==200)
        {
            let output=``;
            const response=JSON.parse(this.responseText);
            if(response.type=='success')
            {
            response.value.forEach(function(joke){
                output+=`<li>${joke.joke}</li>`;
            })
            }
            else
            {
                output+=`<li>Something went wrong</li>`
            }
        document.querySelector('.jokes').innerHTML=output;
}}
xhr.send();
//console.log('Click');
e.preventDefault();
}*/



document.querySelector('.get-jokes').addEventListener('click',getJokes);
function getJokes(e)
{
const hello=document.getElementById('number').value;
const xhr=new XMLHttpRequest();

xhr.open('GET',`http://api.icndb.com/jokes/random/${hello}`,true);
xhr.onload=function(){
    if(this.status==200){
        let output=``;
        const response=JSON.parse(this.responseText);
        //console.log(response);
        if(response.type=='success')
        {
            response.value.forEach(function(joke){
                output+=`<li>${joke.joke}</li>`;
            })
        }
        else
        {
            output+=`<li>SOMETHING WENT WRONG</li>`
        }
        document.querySelector('.jokes').innerHTML=output;
    }
}
xhr.send();
//console.log(number);
e.preventDefault();
}




document.getElementById('button4').addEventListener('click',getAPI2);
function getAPI2(){
    //fetch('https://api.github.com/users/jainapoorva40')
    fetch('https://type.fit/api/quotes')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let outpu=``;
        data.forEach(function(name){
            outpu+=`<li>${name.text}</li>`;
        })
    
    document.getElementById('output').innerHTML=outpu;
    })
}

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
