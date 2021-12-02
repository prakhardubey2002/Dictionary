let input =document.querySelector('#input');
let searchBtn =document.querySelector('#search');
let notFound = document.querySelector('.not_found');
let defbox = document.querySelector('.def');
searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    let word= input.value;
    if(word===''){
        alert('word required');
        return;
    }
    getData(word);
})
async function getData(word){
    const responses = await fetch(`https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=a7822f8c-46c7-43fe-aa18-f73023edf902`);

    const data = await responses.json();
    console.log(data);
    //if empty result
    if(!data.length){
        notFound.innerText = 'No result found you are typing gibberish maybe!'
        return;
    }
    //if result is suggestions
    if(typeof data[0] === 'string'){
         let heading = document.createElement('h3');
         heading.innerText = "Did you mean?"
         notFound.appendChild(heading);
         data.forEach(element => {
             let suggestion = document.createElement('span');
             suggestion.classList.add('suggested');
             suggestion.innerText = element;
             notFound.appendChild(suggestion)
         })
         return;
    }
    // result found
    let defination = data[0].shortdef[0];
    defbox.innerHTML= defination;
}
