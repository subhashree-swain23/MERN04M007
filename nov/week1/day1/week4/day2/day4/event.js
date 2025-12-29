// some extra event

//for the tags input,select
//what are the event (input,change,focus,blur);
let input = document.querySelector("input");
//input.addEventListner("input",(e)=>{
    // console.log(e.target.value)
    // })
input 
// console.log(e)
console.log()


  


input.addEventListener("blur",(e)=>{
        console.log(e)
        console,log("input feiled blur")
    })

    // mouse
// what are the event mousemove,mouseup,mouse down,mousecenter,mouseleave
// let p = document.querySelector("p");
// p.addEventListner("mousemove", (e)=>{
//     console.log(e)
//     console.log("mouse move")
// })

// p.addEventListener("mousedown", (e)=>{
//     console.log(e)
//     console.log("mouse down")
// })

// p.addEventListener("mouseup", (e)=>{
//     console.log(e)
//     console.log("mouse up")
// })

// p.addEventListener("mousedown", (e)=>{
//     console.log(e)
//     console.log("mouse down")
// })

// p.addEventListener("mousecenter", (e)=>{
    // console.log(e)
    // console.log("mouse center")
// })

// p.addEventListener("mouseleave", (e)=>{
//     console.log(e)
//     console.log("mouse leave")
// })

// key
//what are the event of key keyup,keydown,keypress

// document.addEventListener("keydown",()=>{
//     console.log("key down")
// })

// document.addEventListener("keyup",()=>{
//     console.log("key up")
// })

// document.addEventListener("keypress",()=>{
//     console.log("key press")
// })

// document.addEventListener("keydown",(e)=>{
//     console.log("object",e)
//     console.log("key ",e.key);
//     console.log("key code ",e.keyCode);
//     console.log("code ",e.code);
//     console.log("is alt key pressed ",e.altKey)
//     console.log("is ctrl key pressed ",e.ctrlKey)
//     console.log("is shift key pressed ",e.shiftKey)
//     console.log("key down")
// })

// special events
// Load,DOMcontentLoaded , scroll,resize

// window.addEventListener("Load",(e)=>{
//     console.log(e)
//     console.log("window content Loaded")
// })

// window.addEventListener("DOMContentLoaded",(e)=>{
//     console.log(e)
//     console.log("window content Loaded")
// })

// window.addEventListener("scroll",(e)=>{
//     console.log(e)
//     console.log("page scroll event")
// })


window.addEventListener("resize",(e)=>{
    console.log(e)
    console.log("page resize")
})




// Task : 1st you have to craete a register page having fields are (fllName,age,phone,email,password)

// step 2
//stored the register data to the LocaLStorage

//step 3
//create a login form having fields (email,password)

//step 4
//compare the user input email and password (Login) with the email 

