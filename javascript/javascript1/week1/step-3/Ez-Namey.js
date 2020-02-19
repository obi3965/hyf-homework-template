
document.addEventListener('DOMContentLoaded', function(){

    let firstWords = ['Hapi.js', 'koa.js', 'nest.js', 'javascript', 'express js', 'mysql', 'sql', 'sequelize', 'mongoDB','mongoose']
    let secondWords = ['html5', 'css3', 'bootstrap4', 'scss', 'javascript', 'react js', 'angular', 'sevelt js', 'vue js','pwa']

    const randomNumber = Math.floor(Math.random() * 10) + 0;
    const randomNumber1 = Math.floor(Math.random() * 10) + 0;
    let startName = firstWords[randomNumber] + " " + secondWords[randomNumber1];
   console.log("The startup: " + "\"" + startName + "\"" + " contains " + startName.length + " characters.");

})