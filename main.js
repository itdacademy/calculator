const calculator_container= document.querySelector(".calculator_container");
const display_area= document.querySelector(".display_area");


function clear(){
    display_area.textContent="";
}
function Add(value){

    display_area.textContent+=value;
}
function Delete(){
    let content = display_area.textContent;

    display_area.textContent=content.substring(0,content.length-1)
}

function calcu(){

    try{
        let calculation =math.evaluate(display_area.textContent);
        display_area.textContent=calculation;
    }catch{
        display_area.textContent="Error Operatiom"
        console.log(Error);
        
    }
  
}


calculator_container.addEventListener("click",e=>{

    if(e.target.nodeName ==="BUTTON"){

        const buttontext=e.target.textContent;

        if(buttontext ==="C"){
            clear();
        }else if(buttontext ==="DEL"){
            Delete();
        }else if(buttontext ==="="){
            calcu();
        }else{
            Add(buttontext)
        }
    }

});