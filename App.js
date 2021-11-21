let input =document.querySelector('#input');
let searchBtn =document.querySelector('#search');
searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    let word= input.value;
    if(word===''){
        aleert('word required');
        return;
    }
    getData(word);
})
function getData{
    
}