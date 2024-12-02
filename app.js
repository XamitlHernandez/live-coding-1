// Escribe tu código aquí.
let a ="mosca";
const b= ["arboles", "robles","nom"];
let d=[];
function devolverValores(a,b){
for (let i=0  ; i<b.length;i++){
    let c = b[i];
    if (a.length<c.length){
        d.push(c);
    }
}
return d;
}
function crearLista(d){
    const listaPalabras= document.getElementById("lista");
    d.forEach(element => {
        const li= document.createElement("li");
        li.textContent=element;
        listaPalabras.appendChild(li);    
   
    });
};
devolverValores(a,b);
crearLista(d);