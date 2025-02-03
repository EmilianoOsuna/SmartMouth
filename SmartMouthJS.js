function generate1Letter(){
   const letterCode = Math.floor(Math.random() * 26) + 65;
   const letter1 = document.getElementById("letter1");
   letter1.innerHTML = String.fromCharCode(letterCode);
}

function generate2Letter(){
    const letterCode2 = Math.floor(Math.random() * 26) + 65;
    const letter2 = document.getElementById("letter2");
    if(letterCode2 != 81 && letterCode2 != 72 && letterCode2 != 75 && letterCode2 != 87 && letterCode2 != 88){
        letter2.innerHTML = String.fromCharCode(letterCode2);
    }
    else{
        generate2Letter();
        console.log("Letra invalida generada, generando nueva letra...");
    }
 }

 function startRandomText(param) {
    const element = document.getElementById(param);
    const originalText = element.innerText;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const duration = 700; // Duration of the effect in milliseconds
    const intervalTime = 1000; // Time between each character change in milliseconds
    let startTime = null;

    const randomizeText = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        // Generate random text
        element.innerText = originalText
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("");

        // Continue the loop until the duration is reached
        if (progress < duration) {
            requestAnimationFrame(randomizeText);
        } else {
            // Restore the original text after the effect is done
            element.innerText = originalText;
        }
    };

    // Start the animation
    requestAnimationFrame(randomizeText);
}
function startRandomText(param) {
    const element = document.getElementById(param);
    const originalText = element.innerText;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const duration = 700; // Duration of the effect in milliseconds
    const intervalTime = 1000; // Time between each character change in milliseconds
    let startTime = null;

    const randomizeText = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        // Generate random text
        element.innerText = originalText
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("");

        // Continue the loop until the duration is reached
        if (progress < duration) {
            requestAnimationFrame(randomizeText);
        } else {
            // Restore the original text after the effect is done
            element.innerText = originalText;
        }
    };

    // Start the animation
    requestAnimationFrame(randomizeText);
}

 

