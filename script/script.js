document.addEventListener("DOMContentLoaded", init);

function init() {

/* grabbing clock hands: secondHand, minuteHand and hourHand */
    const secondHand = document.querySelector(".second-hand");
    const minsHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
   
    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
/* to change running seconds chand for rotating move of the clock hands - degrees: */
/* the '90', it is aligning from the default */
        const secondsDegrees = ( (seconds / 60) * 360 ) + 90; 
        secondHand.style.height = "3.5px";
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();              // minut hand
        const minsDegrees = ( (mins / 60) * 360 ) + 90;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hours = now.getHours();               // hour hand
        const hourDegrees = ( (hours / 12) * 360 ) + 90;
        hourHand.style.height = "10px";
        hourHand.style.transform = `rotate(${hourDegrees}deg)`; 
/* secondHand after the top location runs the clock face around to start new cycle */
    }
    setInterval(setDate, 1000); /* ... tick every second */
    setDate();

/*
visual effects - shadow aroud the clock while moving the coursor
*/

    const clock = document.querySelector(".clock");
    const clockFace = clock.querySelector("div");
    // const hourHand = clockFace.querySelector(".hour-hand");
    const walk = 50; // 100px
    
    function shadow(e) {
        
        const { offsetWidth: width, offsetHeight: height } = clock;
        // grabbing coursor position:
        let { offsetX: x, offsetY: y } = e;
        // console.log(x, y);
    
        if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
        }
        // ensuring the size of the shadow:
        const xWalk = (x / width * walk) - (walk / 2);
        const yWalk = (y / height * walk) - (walk / 2);
        console.log(xWalk, yWalk);

        clock.style.boxShadow = `
        ${xWalk}px ${yWalk}px 0 rgb(135, 206, 250, 0.6)
        `;
        hourHand.style.boxShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(135, 206, 250, 0.6)
        `;
        minsHand.style.boxShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(135, 206, 250, 0.6)
        `;
        secondHand.style.boxShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(135, 206, 250, 0.6)
        `;


    }
    clock.addEventListener("mousemove", shadow);

}