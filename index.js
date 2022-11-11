let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e) =>{
        buttonText = e.target.innerText;
        console.log('button text is ',buttonText);
        if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
            console.log("SCREEN VALUE ",screen.value)

        }
        else if (buttonText == '=') {
            let a=eval(screenValue);
            console.log("a ",a);
            console.log(typeof(a));
            /*if(typeof(a)==Number){*/
                screen.value =a;
                console.log("SCREEN VALUE ",screen.value);
          /*  }
            else screen.value="error"*/
            
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
            console.log("SCREEN VALUE ",screen.value)
        }
    })
}