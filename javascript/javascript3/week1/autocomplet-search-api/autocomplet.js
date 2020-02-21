
document.addEventListener('DOMContentLoaded', (event)=>{
    let API_KEY = '4ce4bfd2c2aef0cfa95eb4dad76a03b4';
    let IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=4ce4bfd2c2aef0cfa95eb4dad76a03b4'
    //SELECTING ELEMENTS FROM THE DOM
    let buttonElement = document.querySelector('#search');
    let inputElement = document.querySelector('#exampleInputEmail1');
    let movieSearchable = document.querySelector('#movies-searchable');

   function movieSection(movies){
    return movies.map((movie) =>{
        if(movie.poster_path){
             return `
        <img src= ${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>
        `
        }
       
    })
   }

    function createMoviesContainer(movies){
        let movieElement = document.createElement('div');
        movieElement.setAttribute('class', 'movie')

        let movieTemplate = `
         <section class= "section">
         ${movieSection(movies)}
         </section>
         <div class="content">
           <p id="content-class">x</p>
         </div>
         
        `
        movieElement.innerHTML = movieTemplate;
        return movieElement;
    }

    buttonElement.onclick = function(event){
        event.preventDefault();
        let value = inputElement.value;
         
        //to get the value dynamically
        let newUrl = url + '&query=' + value;

        fetch(newUrl)
        .then((res) => res.json())
        .then((data)=>{
         
            let movies = data.results;
           let movieBlock = createMoviesContainer(movies);
           movieSearchable.appendChild(movieBlock)
            console.log('Data', data)
        })
        .catch((error)=>{
            console.log('error is happened', error)
        })

        console.log('Value:', value)
    }
})