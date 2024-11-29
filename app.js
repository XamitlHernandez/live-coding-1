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
    for(let j=0; j<d.length;j++){
     document.querySelector("ul").innerHTML= `<li> ${d[j]} </li>`;
    }
}
devolverValores(a,b);
crearLista(d);