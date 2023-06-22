let print=document.getElementById("input1");
let touch=document.querySelectorAll("button");
let string="";
let lop=Array.from(touch);
lop.forEach(button=>{
    button.addEventListener("click",(v)=>{
        if(v.target.innerHTML=="=")
        {
            string=eval(string);
            print.value=string;
        }
        else if(v.target.innerHTML=="c")
        {
         string="";
         print.value=string;
        }
        else
        {
        string+=v.target.innerHTML;
        print.value=string;
        }
    })
})