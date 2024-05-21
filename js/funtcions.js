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
      document.getElementById("fecha").value = new Date();
      let fecha= new Date();
      document.getElementById("dia").innerText = fecha.getDay();
      document.getElementById("año").innerText = fecha.getFullYear();
      document.getElementById("mes").innerText = fecha.getMonth();
      document.getElementById("dia_mes").innerText = fecha.getDate();
      document.getElementById("hora").innerText = fecha.getHours()
      document.getElementById("minute").innerText = fecha.getMinutes()
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
      if(password == password2 ){
        Swal.fire({
          title:"Contraseña correcta",
          Text:"contraseña valida",
          icon:"valido"
        });
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
//ARRAYS 
var dias_sem=["lunes","martes","miercoles","jueves","viernes", "sabado","domingo"];
var array_num=[1,2,3,4,5,6,7,8,9];
var array_mix=[1,2,3, "abc"];
var array_mul=[
  {name:"andrea",age: 18,color:"green"},
  {name:"gerardo", age:18, color:"white"},
  {name:"mildred",age:46,color:"black"},
  {name:"valentina",age:14,color:"gray"}
]
// es utilizada nosql
var json_ejm={
  name:"andrea",
  lastname:"casadiegos",
  phone:"3228963551",
  email:"acasadiego979@gmail.com"
}
console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);

for(let i=0; i< dias_sem.length;i++){
  console.log(dias_sem[i]);
}
var j=0;
while(j<array_num.length){
  console.log(array_num[j])
  j++
}
var acum=0;
for(let h = 0;h<array_num.length; h++){
   acum += array_num[h];
}
console.log(acum);
var acum2=0;
for(let n=0; n< array_mul.length;n++){
  acum2 += array_mul[n].age;
 
}
// document.write(acum2);
document.getElementById("print_age").innerText = "el valor de la suma es: "+ acum2;
//value una propiedad que tienen los imput 
document.getElementById("valores").value =array_num;

// para limpiar una casa de 
function limpiar(){
  document.getElementById("valores").value="";
}
// array.pop para agregar 
// let un tipo de variable para funciones 
var array_ejem =[1,2,3,4,5,6,7,8,9];
function agregar(){
  let val_new =array_ejem.push(10);
  document.getElementById("valores").value=array_ejem;
}
// array.push añade un elemento al final 
// no se puede agragar un elemento a la mitad de array por que daño el array 

function eliminar(){
  array_ejem.pop()
  document.getElementById("valores").value="";
}
//agregar un imput que escriba un numero en el primero y que elimine el primero  
function imp_rever(){
  document.getElementById("text_rever").innerText= array_ejem.reverse();
  document.getElementById("valores") = false;
}
var array_num2 =[1,2,3,4];
function agregarp(){
  let val_new1=array_num2.unshift();
  document.getElementById("valores").value=array_num2;
}
function eliminarp(){
  let val_new2= array_num2.shift();
  document.getElementById("valores").value="";
}
// funcion para enviar el nombre concatenado
function send_name(){
  let name_one = document.getElementById("name_one").value;
  let name_two = document.getElementById("name_two").value;
  let search_var = document.getElementById("search_var").value;
  let name_com=name_one.toUpperCase()+" "+ name_two.toUpperCase();
  // let variable= name_com.indexOf("I");
  // let variable = name_com.charAt(3);
  let variable = name_com.charAt(search_var);
  if(search_var<=name_com.length && search_var == 0){
    // console.log(variable); // el swal.fire no esta diseñado paraa mostrar numero entreros 
    // swal.fire( variable+" ");
    document.getElementById("print_name").innerText ="la letra correspondiente es numero al #"+ search_var+" es:"+variable;
  }
  else if(isNaN(search_var != false)){
      Swal.fire({
        title: "error",
        text: "el numero no concuerda con la cantidad del nombre ",
        icon: "error"
      });
  }
  // else if(search_var == 0){
  //   Swal.fire({
  //     title: "error",
  //     text: "el campo esta vacio",
  //     icon: "error"
  //   });
  // }
  else{
    Swal.fire({
      title: "error",
      text: "el numero no tiene valor o no concuerda con la cantidad del nombre ",
      icon: "error"
    });
    document.getElementById("print_name").innerText ="";
  }

  

}