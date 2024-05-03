let hr=document.getElementById("hour")
let sc= document.getElementById("sec")
let mn= document.getElementById("min")
let dated=document.getElementById("dated")
function digitalWatch(){
    let date=new Date
    
    let hor=date.getHours()
 
    let mins=date.getMinutes()
    let secs= date.getSeconds()
    console.log(hor,mins,secs)
    hr.innerHTML=hor
    mn.innerHTML=mins
    sc.innerHTML=secs 
    let dater=date.getDate()
    let mon=date.getMonth()+1
    let year=date.getFullYear()
    console.log(dater,mon,year)
    dated.innerHTML=`The date: ${dater}, month: ${mon} and the Year is ${year}`

}

setInterval(digitalWatch,1000)
