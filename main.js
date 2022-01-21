let containerElement = document.getElementById('container');
console.log(containerElement);

for (let i = 1; i <= 100; i++){

        if(i%15==0){
            containerElement.innerHTML += "<div class='box-red'>" + "fizzbuzz" + "</div>"
        } 
        
        else if(i%5==0){
            containerElement.innerHTML += "<div class='box-yellow'>" + "buzz" + "</div>"
        }
        
        else if(i%3==0){
            containerElement.innerHTML += "<div class='box-green'>" + "fizz" + "</div>"
        }
        
        else{
            containerElement.innerHTML += "<div class='box'>" + i + "</div>";

        }
}







