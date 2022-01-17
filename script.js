//question 1
var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];

  for (var i = 0; i < pets.length; i++)
  if (pets[i].age >= 4){
    console.log(pets[i].type); 
  }
  

//question 2
 let blue = true
 let green = 12
  function valuepassed(blue){
      
    if (typeof blue=="boolean"){
    console.log(blue)
}
    else 
    console.log("Please pass a boolean value in")
  }
  valuepassed(blue)
  valuepassed(green)

  //question 3 


  const subheading = document.querySelector("h2")
  const colorbutton = document.querySelector("button")

  function changeheading(){
      subheading.innerHTML ="Updated subheading"
      subheading.style.color ="blue"

  }

  colorbutton.onclick = changeheading;