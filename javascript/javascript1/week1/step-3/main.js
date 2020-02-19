//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets
document.addEventListener('DOMContentLoaded', (event)=>{

//######################################## week1 javascript homeworks##########################
    const data =[
        {
            'id':  3,
            'pic' : 'https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'title' : 'lion in sudan'
        },

        {
            'id':  3,
            'pic' : 'https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'title' : 'lion in africa'
            
        },

        {
            'id':  3,
           'pic' : 'https://images.pexels.com/photos/2220336/pexels-photo-2220336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
           'title' : 'lion in africa'
        }

        ]

   
        const elementCard = elementStyle => {
            // Create elements needed to build a card
            const div = document.createElement("div");
            const h4 = document.createElement("h4");
            const a = document.createElement("a");
            const img = document.createElement("img");
            // Append newly created elements into the DOM
            const body = document.querySelector("body");
            body.append(div);
            h4.append(a);
            div.append(h4);
            div.append(img);
            // Set content and attributes
            a.innerHTML = elementStyle.title;
            a.setAttribute("href", elementStyle.info);
            img.setAttribute("src", elementStyle.pic);
            div.setAttribute("class", "card");
          };
          
          data.forEach(elementStyle => elementCard(elementStyle));


        


        

        // to calculate the date of birth and the future age of a person
        //we should create two variables including dateOfBirth and yourFutreAge
        //First Example to print out in console
        let DateOfBirth = 1987;
        let FutureAge = 2027;

        let AgeResult = FutureAge - DateOfBirth; 
        console.log(`your future Age will be ${AgeResult}`)


       //Age-ify (A future age calculator)
       //we should create two variables including dateOfBirth and yourFutreAge
        //Second Example to print out in on page with hard code
        let YourDateOfBirth = 1987;
        let YourFutureAge = 2027;

        let YourAgeResult = YourFutureAge - YourDateOfBirth; 
        let AgeOutput = `
          <p>${YourAgeResult}</p>
        `
        document.getElementById('ageOutput').innerHTML += AgeOutput;




       //Goodboy-Oldboy (A dog age calculator) 
      // lets create three variable to find the dog future age
      let DogYearOfBirth = 2017
      let DogYearFuture = 2027
      let DogYearResult = DogYearFuture - DogYearOfBirth;
      let shouldShowResultInDogYears = true;
      
      if(shouldShowResultInDogYears == true){
            console.log(`your dog will be ${DogYearResult} human years old in ${DogYearFuture}`)
      }
    
     else{
        
         console.log(`your dog will be ${DogYearResult} dog year old is ${DogYearFuture}`)
     }
     


     

        })
