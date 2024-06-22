function identitvAllButtons(){
    const allButtons = document.getElementsByClassName("button")

    const allButtonsArray = Array.from(allButtons);
    console.log(allButtonsArray);

    return allButtonsArray
}

function addClickListener(){

    const allButtonsArray = identitvAllButtons();

    allButtonsArray.forEach((button,index, buttonsAray)=>{

        button.addEventListener("click",handleGenericEvent)

    })
}


function handleGenericEvent(e){
  
    // console.log("Button Clicked" + e)
   const divButtonTarget = e.target
   const text = divButtonTarget.innerText;

   if(text == "CLEAR"){
    handleClear(e);
   }else if (text == "BACKSPACE"){
    handleBackspace(e);
   }else if (text == "="){
    handleEquals(e);
   }else{
    //TODO
   }

}

function handleNumber(e){

}

function handleOprators(e){

}

function handleClear(e){

}


function handleBackspace(e){

}


function handleParanthesis(e){

}


function handleEquals(e){

}

function handleDot(e){

}


function main(){
    addClickListener();
}

main();

