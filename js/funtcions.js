//formas de imprimir en pantalla
// alert("HOLA SOY UN ALERT DESDE EL ARCUVO EXTERNO DE JS");
// console.log("hola soy un mensaje de consola");
// document.write("hola soy la interfas principal");
Swal.fire("Soy una alerta de una libreria");

//variables y tipos de datos

const pi=3.14; //decimal
var name="Andrea Casadiegos";//string
name=name+"ing";
// las variable le deben ir en funciones 
let edad=18;
let edad_string="18";
var bool= false;
// operadores basicos + - / * %
var suma=5-2;
console.log(suma);
console.log(edad_string+ suma);
var one= 10;
var two=20;
console.log(one+two);
console.log(one-two);
console.log(one*two);
console.log(one/two);
console.log(one%two);

// operadores de comparacion 
// < > >= <= <>
// = asignacion 
// == comparacion 5== "5"
// ===comparacion 5 == "5"

// OPERADORES LOGICOS
// AND && OR
console.log("Mi nombre"+ name+ "tiene como edad"+ edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        imageAlt: "A tall image"
      });
      
}
function send_info(){
    let name= document.getElementById("name").value;
    let last_name= document.getElementById("last_name").value;
    let password= document.getElementById("password").value;
    let password2= document.getElementById("password2").value;
    if(name.length == 0 || last_name.length == 0 || password.length == 0 || password2.length ==0){
      Swal.fire({
        title:"campos vacios",
        Text:"Alguno de los campos de encuentra vacio",
        icon:"error"
      });
      if(name.length == 0){
        document.getElementById("name").style.border = "2px solid red"
      }else{
        document.getElementById("name").style.border = "2px solid green"
      }
      if(last_name.length == 0){
        document.getElementById("last_name").style.background = "red"
      }else{
        document.getElementById("last_name").style.background = "green"
      }
      if(password== password2 ){
        document.write("contraseña correcta");
      }else{
        Swal.fire({
            title:"Contraseña incorrecta",
            Text:"contraseña no valida",
            icon:"error"
          });
          document.getElementById(password);
      }
    }else{
        document.getElementById("print").innerText = name+" "+last_name;
    }

}