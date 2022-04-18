let form = document.getElementById("form")
let text = document.getElementById("text")
let date = document.getElementById("date")
let desc = document.getElementById("desc")


let loaddata= ()=>{
    let values = JSON.parse(localStorage.getItem("data"))
    document.getElementById('box-cont').innerHTML =''
    values.forEach((x, el) => {  
        document.getElementById('box-cont').innerHTML +=` <div id="${el}" class="box">
        <h4>${x.text}</h4>
        <p>${x.desc}</p>
        Due Date <small> ${x.date}</small>
        <span>
        <button  onClick="EditPost(this)">Edit</button>
        <button  onClick="DeletePost(this)">Delete</button>
        </span>
        </div>`
    });
    date.value=''
    text.value=''
    desc.value=''
}
let data = JSON.parse(localStorage.getItem("data"))
console.log(data);
ready()
function ready(){
    loaddata()
}


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    Errorcheck()
})

let Errorcheck = ()=>{
    if (text.value ===""){
        document.getElementById("txterror").innerHTML='This field is required'
    }
    else if (date.value ===""){
        document.getElementById("dateerror").innerHTML='This field is required'
    } 
    else if (desc.value ===""){
        document.getElementById("descerror").innerHTML='This field is required'
    }
    else{
        acceptdata()
        document.getElementById("txterror").innerHTML=''
        document.getElementById("dateerror").innerHTML=''
        document.getElementById("descerror").innerHTML=''
    }
}
let acceptdata = ()=>{
        data.push({
            text:text.value,
            date: date.value,
            desc:desc.value,
        })
    
    localStorage.setItem("data", JSON.stringify(data));
    loaddata()
}

let DeletePost=(e)=>{
    let x =e.parentElement.parentElement.id
    console.log(x); 
    data.splice(x, 1)
    localStorage.setItem("data", JSON.stringify(data));
    loaddata()
    }   

let EditPost=(e)=>{
    let parentitems=e.parentElement.parentElement
    text.value = parentitems.children[0].innerHTML
    date.value = parentitems.children[2].innerHTML
    desc.value = parentitems.children[1].innerHTML
    let x =e.parentElement.parentElement.id
    data.splice(x, 1)
    localStorage.setItem("data", JSON.stringify(data));
}


