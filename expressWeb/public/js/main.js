const submitBtn = document.getElementById("submitBtn");

const getInfo = (event)=>{
    event.preventDefault();
    alert("Hi");
}

submitBtn.addEventListener('click',getInfo);