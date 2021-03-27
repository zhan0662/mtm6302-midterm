const $container = document.getElementById(`container`)
const $Weather = document.getElementById(`Weather`)
const $Lunch = document.getElementById(`Lunch`)
const $Mission = document.getElementById(`Mission`)
const $h3 = document.getElementById(`h3`).style.fontSize = "1.5rem"
const $h4 = document.getElementById(`h4`)
const $h5 = document.getElementById(`h5`)
const $create = document.getElementById(`create`)

let list = ''

let $form = document.getElementById('form')




$Mission.addEventListener ('click',function(){
    
    const word = [ 'Adjective', 'Verb 1','Verb 2', 'Plural Noun 1', 'Plural Noun 2','Plural Noun 3']

     list = `
    
    <ul style="list-style-type:none;">
      <li><input type = "text" placeholder="${word[0]}"></input></li>
      <li><input type = "text" placeholder="${word[1]}"></input></li>
      <li><input type = "text" placeholder="${word[2]}"></input></li>
      <li><input type = "text" placeholder="${word[3]}"></input></li>
      <li><input type = "text" placeholder="${word[4]}"></input></li>
      <li><input type = "text" placeholder="${word[5]}"></input></li>
      
      </ul>
      <button id = "read">Read Story</button>
      `
         
   
    $form.innerHTML= `<h3 id='h3'></h3>`

    $form.innerHTML = $form.innerHTML + list
    
    const $read = document.getElementById(`read`)
   $read.addEventListener ('click',function(event){
    event.preventDefault()
    const words={
        'Adjective': $form.elements[0].value,
        'Verb 1': $form.elements[1].value,
        'Verb 2' :$form.elements[2].value,
        'Plural Noun 1':$form.elements[3].value,
        'Plural Noun 2':$form.elements[4].value,
        'Plural Noun 3':$form.elements[5].value
    }
    document.getElementById('h4').innerHTML = stories[0].title
   document.getElementById('result').innerHTML = stories[0].output(words)
   document.getElementById('create').innerHTML = `<button id= "create-btn"> Create another story</button>`
   document.getElementById('create-btn').addEventListener ('click',function(event){
           document.getElementById('container').innerHTML =
            ` <h3 id='h3'></h3>
           <h5 id= 'h5'></h5>
            <form class='form' id="form">
             
            </form>
         
         
         
         <h4 id='h4'></h4>
         <p id = 'result'></p>
         <div id= "create"></div>`
   })

})
   document.getElementById('h5').innerHTML = stories[0].title
  document.getElementById('h3').innerHTML = "Provide the following words"

})

    
    



/////////////////////////////////////////////////////////////////////////////////////////////


    $Lunch.addEventListener ('click',function(){

       
    
    
    const word = [ 'Animal',
    'Adjective 1',
    'Adjective 2',
    'Vegetable 1',
    'Vegetable 2',
    'Noun',
    'Container']

    list = `
    <ul style="list-style-type:none;">
      <li><input type = "text" placeholder="${word[0]}"></input></li>
      <li><input type = "text" placeholder="${word[1]}"></input></li>
      <li><input type = "text" placeholder="${word[2]}"></input></li>
      <li><input type = "text" placeholder="${word[3]}"></input></li>
      <li><input type = "text" placeholder="${word[4]}"></input></li>
      <li><input type = "text" placeholder="${word[5]}"></input></li>
      <li><input type = "text" placeholder="${word[6]}"></input></li>
      </ul>
      <button id = "read">Read Story</button>
      `
         
    $form.innerHTML= `<h3 id='h3'></h3>`
    $form.innerHTML = $form.innerHTML + list
    
    

        const $read = document.getElementById(`read`)
        $read.addEventListener ('click',function(event){
         event.preventDefault()
         const words={
            'Animal': $form.elements[0].value,
            'Adjective 1': $form.elements[1].value,
             'Adjective 2': $form.elements[2].value,
             'Vegetable 1' :$form.elements[3].value,
             'Vegetable 2':$form.elements[4].value,
             'Noun':$form.elements[5].value,
             'Container':$form.elements[6].value
         }
       document.getElementById('h4').innerHTML = stories[1].title
       document.getElementById('result').innerHTML = stories[1].output(words)
       document.getElementById('create').innerHTML = `<button id= "create-btn"> Create another story</button>`
   document.getElementById('create-btn').addEventListener ('click',function(event){
           document.getElementById('container').innerHTML = 
           ` <h3 id='h3'></h3>
           <h5 id= 'h5'></h5>
            <form class='form' id="form">
             
            </form>
         
         
         
         <h4 id='h4'></h4>
         <p id = 'result'></p>
         <div id= "create"></div>`
   })
         
    })
    
    
    
    document.getElementById('h5').innerHTML = stories[1].title
    document.getElementById('h3').innerHTML = "Provide the following words"

})


/////////////////////////////////////////////////////////////////////////////////////////////


$Weather.addEventListener ('click',function(){
    
    
    const word = [ 'Adjective 1',  
    'Adjective 2',
    'Article of Clothing',
    'Number 1',
    'Number 2',
    'Plural Noun 1',
    'Plural Noun 2']

    list = `
    <ul style="list-style-type:none;">
      <li><input type = "text" placeholder="${word[0]}"></input></li>
      <li><input type = "text" placeholder="${word[1]}"></input></li>
      <li><input type = "text" placeholder="${word[2]}"></input></li>
      <li><input type = "text" placeholder="${word[3]}"></input></li>
      <li><input type = "text" placeholder="${word[4]}"></input></li>
      <li><input type = "text" placeholder="${word[5]}"></input></li>
      <li><input type = "text" placeholder="${word[6]}"></input></li>
      </ul>
      <button id = "read">Read Story</button>
      `
         
    $form.innerHTML= `<h3 id='h3'></h3>`
    $form.innerHTML = $form.innerHTML + list

    const $read = document.getElementById(`read`)
        $read.addEventListener ('click',function(event){
         event.preventDefault()
         const words={
            'Adjective 1': $form.elements[0].value,
            'Adjective 2': $form.elements[1].value,
            'Article of Clothing': $form.elements[2].value,
             'Number 1' :$form.elements[3].value,
             'Number 2':$form.elements[4].value,
             'Plural Noun 1':$form.elements[5].value,
             'Plural Noun 2':$form.elements[6].value
         }
       document.getElementById('h4').innerHTML = stories[2].title
       document.getElementById('result').innerHTML = stories[2].output(words)
       document.getElementById('create').innerHTML = `<button id= "create-btn"> Create another story</button>`
   document.getElementById('create-btn').addEventListener ('click',function(event){
           document.getElementById('container').innerHTML = 
           ` <h3 id='h3'></h3>
          <h5 id= 'h5'></h5>
           <form class='form' id="form">
            
           </form>
        

        
        <h4 id='h4'></h4>
        <p id = 'result'></p>
        <div id= "create"></div>`
   })
         })
    
   
    
    document.getElementById('h5').innerHTML = stories[2].title
    document.getElementById('h3').innerHTML = "Provide the following words"
})






  






























