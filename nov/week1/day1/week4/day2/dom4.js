console.log("today we are going to learn how to create element by using js");

//craeteElement()
let h1 = document.createElement("h1");
console.log(h1);
h1.innerText="this is heading";
h1.className="heading"
console.log(h1);

// doccument.body.appendChild(h1)


let div=document.getElementById("box");
div.appendChild(h1)

let p=document.createElement("p")
p.innerText="this is the paragraph"

let b=document.createElement("b");
b.innerText="this is a bold tag"

div.appendChild(p)
div.append(h1,p,b);


let h5=document.createElement("h5");
h5.innerText="this is heading 5"

div.prepend(h5);

let i=document.createElement("i");
i.innerText="this is italic word";

// div.before(i)
div.after(i)


let imgContainer=document.createElement("div");
imgContainer.style.cssText = "height:300px; width:300px; backgroundcolour:blue"

let img=document.createElement("img");
img.setAttribute("src","https://cdn.pixabay.com/photo/2025/02/18/21/14/sea-onion-9416402_1280.jpg");
    img.style.cssText="width:100%;height:100%"

    imgContainer.append(img);
    document.body.append(imgContainer);



    // events
    let clickedFunc=()=>{
        console.log("button clicked")
    }

let btn=document.getElementById("btn");
btn.oneclick=()=>{
    console.log("id btn clicked")
}

// addEventListener(event_name,event_handling_function,propagation_type)

let button=document.getElementById("btn_1");
button.addEventListener("click",()=>{
    console.log("addevent listner btn execute");
},false);


document.querySelector(".images").addEventListener("click", ( =>{
    console.log("parrent ul click");
})


let rabbitimg=document.getElementById("rabbitimg");
rabbitimg.addEventListener("click",(e) => {
e.stopPropagation();
console.log("")
})