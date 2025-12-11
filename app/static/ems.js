console.log("sucessfully");
let tTable=document.getElementById("empsContainer")
let addEmpForm=document.getElementById("addEmpForm")
function loadEmps(){
    tTable.innerHTML=""
    let dataAllEmps=JSON.parse(localStorage.getItem("emps"))
    dataAllEmps.forEach(emp=>{
        let tRow=document.createElement("tr")
        tRow.innerHTML=`
        <td>${emp.id}</td>
         <td>${emp.name}</td>
          <td>${emp.email}</td>
           <td>${emp.salary}</td>
          <button>delete</button> `
        tTable.append(tRow)})}
addEmpForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let empsFormLS=JSON.parse(localStorage.getItem("emps"))||[]
    let newEmp={
        id:empsFormLS.length+1,
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        salary:document.getElementById("salary").value}
    fetch("api/create-emp/",{
        method:"POST",
        headers:{
            "content-Type":"application/json"},
        body:JSON.stringify(newEmp)
    }).then(res=>res.json())
      .then(res=>{
        console.log(res,"res")
        empsFormLS.push(newEmp)
        localStorage.setItem("emps",JSON.stringify(empsFormLS))
        addEmpForm.reset()
        
        loadEmps()
    });
});
document.addEventListener("DOMContentLoaded",loadEmps)