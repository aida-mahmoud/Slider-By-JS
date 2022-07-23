var arrowR=document.getElementById("right") ;
var arrowL=document.getElementById("left") ;
var myslider=Array.from(document.querySelectorAll(".S"));
var b=Array.from(document.querySelectorAll("b")) ;
var count=0;
function Left(){
                if(count==myslider.length-1){count=0;}
                else{ count++;}
                myslider.forEach((slid)=>{
                    slid.classList.add("hidden");
                    slid.classList.remove("active");
                    b[myslider.indexOf(slid)].classList.remove("activeb");
                })
                myslider[count].classList.add("active")
                myslider[count].classList.remove("hidden");
                b[count].classList.add("activeb");
}
function Right(){
                if(count==myslider.length-1){count=0;}
                else{ count++;}
                myslider.forEach((slid)=>{
                    slid.classList.add("hidden");
                    slid.classList.remove("active");
                    b[myslider.indexOf(slid)].classList.remove("activeb");
                })
                myslider[count].classList.add("active");
                myslider[count].classList.remove("hidden");
                b[count].classList.add("activeb");
                
}
b.forEach((US)=>{
    US.addEventListener("click",()=>{
        myslider.forEach((slid)=>{
            slid.classList.add("hidden");
            slid.classList.remove("active");
            b[myslider.indexOf(slid)].classList.remove("activeb");
            
        })
        US.classList.add("activeb");
        console.log(myslider[b.indexOf(US)].getAttribute("id"));
        myslider[b.indexOf(US)].classList.add("active");
        myslider[b.indexOf(US)].classList.remove("hidden");
    })
})
arrowL.addEventListener("click",Left);
arrowR.addEventListener("click",Right);
//Right();
//Left();

setInterval(Left,6000);