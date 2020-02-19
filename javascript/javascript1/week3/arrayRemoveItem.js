document.addEventListener('DOMContentLoaded', function(){

    let names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
    let nameToRemove = 'Ahmad';
    
     for(let index = 0; index < names.length; index++){
         if(names[index] === 'Ahmad'){
             names.splice(index, 1)
         }
     }
    console.log(names)


    
})