document.addEventListener('DOMContentLoaded', function () {

  //FIRST EXAMPLE SEARCHING FOR A SINGLE GIPHY
  //CREATE REFERENCE FOR API KEY
  let APIKEY = "AF6T4p8KB0RcEau1fgEpNnYXNASChGVt";


  document.getElementById('btnSearch').addEventListener('click', event => {
    event.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById('search').value;

    url = url.concat(str);
    console.log(url)

    //we are going to fetch our url
    fetch(url).then(response => response.json())
      .then(content => {

        //data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
      })
      .catch(err => {
        console.error(err);
      });
  })




  //SECOND EXAMPLE FOR MANY GIPHY IMAGES SEARCHING



  let searchForm = document.getElementById('search-many');
  let searchInput = document.getElementById('search-input')
  let resultsEl = document.getElementById("results")

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let q = searchInput.value;
    searching(q)
  })

  function searching(q) {
    let api_key = 'AF6T4p8KB0RcEau1fgEpNnYXNASChGVt';
    let path = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=cats`;


    //it is an object but we stil waiting for response
    fetch(path)
      .then(function (res) {
        return res.json()

      })
      .then(function (json) {
        console.log(json.data[0].images.fixed_width.url)
       
        let resultsHTML = '';
        json.data.forEach(function (obj) {
          console.log(obj.images.fixed_width.url)
          let url = obj.images.fixed_width.url;
          let width = obj.images.fixed_width.width;
          let height = obj.images.fixed_width.height;
          let title = obj.title;
          resultsHTML += `
              <img src="${url}" 
              width="${width}" 
              height="${height}"
              alt="${obj.title}">
              `
        })
        resultsEl.innerHTML = resultsHTML;
      }).catch(function (err) {
        console.log(err.message)
      })
  }

})