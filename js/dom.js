const s1=document.getElementById("s1");
const h2=document.createElement("h2");
let mensaje="Modificaremos la pagina web desde JavaScript. HTML como CSS";
h2.textContent=mensaje;
h2.style.color="grey";
s1.appendChild(h2);

const s3=document.getElementById("s3");
const btnAgregar=document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",temperatura);
const alert=document.getElementById("alert")

function temperatura(){
    let h5=document.createElement("h5");
    let temp=document.getElementById("grados").value;
    if(temp>37){
        h5.textContent=temp+" grados. ==> Alta";
        h5.style.color="red";  
        alert.className="alert alert-danger";
        alert.textContent="Fiebre";
    }else if (temp<36){
        h5.textContent=temp+" grados. ==> Baja";
        h5.style.color="blue";
        alert.className=("alert alert-dark");
        alert.classContent="Frio"
    }else{
        h5.textContent=temp+" grados. ==> Normal";
        h5.style.color="Green";
        alert.className="alert alert-sucess"
        alert.textContent="Normal";
    }
    
    s3.appendChild(h5);
}
