const $container = document.getElementById(`container`)
const $Weather = document.getElementById(`Weather`)
const $Lunch = document.getElementById(`Lunch`)
const $Mission = document.getElementById(`Mission`)


$Mission.addEventListener ('click',function(){
    let result = 'Our mission is to ' + Adjective + 'our' + Verb1 + 'with' + 3 + 4 + 'that will' + 5 + 'their' + 6
    document.getElementById("result").innerHTML = result
    
    $read.addEventListener ('click',function(){
    let Adjective = document.getElementById("Adjective").value;
    let Verb1 = document.getElementById("Verb1").value;

    
    })
    
})

$Lunch.addEventListener ('click',function(){

    
    let result = 'Our mission is to ' + 1 + 'our' + 2 + 'with' + 3 + 4 + 'that will' + 5 + 'their' + 6
    document.getElementById("result").innerHTML = result
})

$Weather.addEventListener ('click',function(){

    
    let result = 'Our mission is to ' + 1 + 'our' + 2 + 'with' + 3 + 4 + 'that will' + 5 + 'their' + 6
    document.getElementById("result").innerHTML = result
})



































