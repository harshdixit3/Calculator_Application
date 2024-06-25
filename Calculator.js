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
  
//    console.log("Button Clicked" + e)
   const divButtonTarget = e.target
   const text = divButtonTarget.innerText;

   if(text == "CLEAR"){
     console.log("CLEAR BUTTON")
    handleClear(e);
   }else if (text == "BACKSPACE"){
        console.log("BACKSPACE BUTTON")
    handleBackspace(e);
   }else if (text == "="){
    console.log("= BUTTON")
    handleEquals(e);
   }else{
    // numbers
    appendDisplayPanel(e);
   }

}

function appendDisplayPanel(e){
    //existing Content
   

    const A = getIOPanelText();
   
    // user typed / Clicked content

    const divButtonTarget = e.target
    const B = divButtonTarget.innerText;

    const finalText = A + B ;

    setIOPanelText(finalText);

    
    
    // 



}

function handleOprators(e){

}

function handleClear(e){
   
    setIOPanelText("")

}


function handleBackspace(e){
    const ioPanelText = getIOPanelText();

    if (ioPanelText.length  != 0){

    }else {
        console.log("No text present in IOPanel")
    }

}


function handleParanthesis(e){

}


function handleEquals(e){

}

function handleDot(e){

}

function setIOPanelText(text){
    const ioPanel =  document.getElementById("ioPanel");
    ioPanel.innerText = text;

}

function getIOPanelText(){

    const ioPanel = document.getElementById("ioPanel");
    const text = ioPanel.innerText

    return text;

}

function main(){
    addClickListener();
}

main();

