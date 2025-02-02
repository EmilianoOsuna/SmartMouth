function generate1Letter(){
   const letterCode = Math.floor(Math.random() * 26) + 65;
   const letter1 = document.getElementById("letter1");
   letter1.innerHTML = String.fromCharCode(letterCode);
}

function generate2Letter(){
    const letterCode2 = Math.floor(Math.random() * 26) + 65;
    const letter2 = document.getElementById("letter2");
    if(letterCode2 != 81){
        letter2.innerHTML = String.fromCharCode(letterCode2);
    }
    else{
        generate2Letter();
        letter2.innerHTML = String.fromCharCode(letterCode2);
        console.log("Q was generated, generating new letter");
    }
    
 }
 
 
 
 


