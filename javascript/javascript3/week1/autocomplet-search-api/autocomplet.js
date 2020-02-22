document.addEventListener('DOMContentLoaded', function(){


let search = document.querySelector('#search');
let matchList = document.querySelector('#match-list')


//SEARCH AUTOCOMPLET.JSON AND FILTER IT
let searchStates = async searchText =>{
    let res = await fetch('././autocomplet.json')
    let states = await res.json();

    //GET MATCH TO CURRENT TEXT INPUT
    let matches = states.filter(state =>{
        let regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    })

    if(searchText.length === 0){
        matches =[];
    }

    outputHtml(matches);

    console.log(states)
}

let outputHtml = matches =>{
    if(matches.length > 0){
        let html = matches.map(match => `
        
         <div class="card card-body mb-1">
           <h4>${match.name}(${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
           <small>lat: ${match.lat} / long: ${match.long}</small>
         </div>
        `
        ).join('')
        // console.log(html)
        matchList.innerHTML = html;
    }
}
//WE CAN LISTEN FOR THE INPUT BECAUSE IT CAN BE ANY INPUTES.WE CAN ALSO USE THE KEYuP

search.addEventListener('input', ()=> searchStates(search.value))
})