class BuscadorLibros extends HTMLElement {

constructor(){
super()

this.libros = [
    {nombre:"Cien Años de Soledad", genero:"Novela", autor:"Gabriel García Márquez", year:1967},
    {nombre:"El Principito", genero:"Infantil", autor:"Antoine de Saint", year:1943},
    {nombre:"Clean Code", genero:"Tecnologia", autor:"Robert Martin", year:2008},
    {nombre:"Don Quijote", genero:"Novela", autor:"Miguel de Cervantes", year:1605},
    {nombre:"Harry Potter y la Piedra Filosofal", genero:"Fantasia", autor:"J.K. Rowling", year:1997},
    {nombre:"El Señor de los Anillos", genero:"Fantasia", autor:"J.R.R. Tolkien", year:1954},
    {nombre:"La Odisea", genero:"Clasico", autor:"Homero", year:-700},
    {nombre:"Romeo y Julieta", genero:"Drama", autor:"William Shakespeare", year:1597},
    {nombre:"1984", genero:"Ciencia Ficcion", autor:"George Orwell", year:1949},
    {nombre:"Fahrenheit 451", genero:"Ciencia Ficcion", autor:"Ray Bradbury", year:1953},
    {nombre:"Orgullo y Prejuicio", genero:"Romance", autor:"Jane Austen", year:1813},
    {nombre:"Moby Dick", genero:"Aventura", autor:"Herman Melville", year:1851},
    {nombre:"El Hobbit", genero:"Fantasia", autor:"J.R.R. Tolkien", year:1937},
    {nombre:"Drácula", genero:"Terror", autor:"Bram Stoker", year:1897},
    {nombre:"Frankenstein", genero:"Terror", autor:"Mary Shelley", year:1818},
    {nombre:"Los Juegos del Hambre", genero:"Ciencia Ficcion", autor:"Suzanne Collins", year:2008},
    {nombre:"Código Da Vinci", genero:"Misterio", autor:"Dan Brown", year:2003},
    {nombre:"Sherlock Holmes", genero:"Misterio", autor:"Arthur Conan Doyle", year:1892},
    {nombre:"El Alquimista", genero:"Novela", autor:"Paulo Coelho", year:1988},
    {nombre:"Padre Rico Padre Pobre", genero:"Finanzas", autor:"Robert Kiyosaki", year:1997},
    {nombre:"Introducción a JavaScript", genero:"Tecnologia", autor:"Mark Myers", year:2015},
    {nombre:"Estructuras de Datos", genero:"Tecnologia", autor:"Niklaus Wirth", year:1976},
    {nombre:"Bases de Datos", genero:"Tecnologia", autor:"Elmasri Navathe", year:2010},
    {nombre:"Aprendiendo HTML", genero:"Tecnologia", autor:"Jon Duckett", year:2011}
]
}

connectedCallback(){

this.innerHTML = `

<style>
.buscador{
width:400px;
margin:auto;
font-family:Arial;
}

#resultado{
max-height:300px;
overflow-y:auto;
border:1px solid #ccc;
padding:10px;
margin-top:10px;
}

.cardLibro{
border:1px solid #999;
padding:8px;
margin:6px 0;
border-radius:6px;
background:#f5f5f5;
}

#mensaje{
margin-top:10px;
font-weight:bold;
}
</style>

<div class="buscador">

<h2>¿Qué deseas buscar?</h2>

<select id="tipoBusqueda">
<option value="">Seleccione</option>
<option value="nombre">Nombre</option>
<option value="autor">Autor</option>
<option value="genero">Género</option>
<option value="year">Año</option>
</select>

<div id="campoBusqueda"></div>

<div id="mensaje"></div>
<div id="resultado"></div>

</div>
`

this.querySelector("#tipoBusqueda")
.onchange = ()=> this.mostrarCampo()
}

mostrarCampo(){

let tipo = this.querySelector("#tipoBusqueda").value
let contenedor = this.querySelector("#campoBusqueda")

contenedor.innerHTML=""

if(tipo==="genero"){
contenedor.innerHTML=`
<select id="valor">
    <option value="">Seleccione género</option>
    <option>Novela</option>
    <option>Infantil</option>
    <option>Tecnologia</option>
    <option>Fantasia</option>
    <option>Ciencia Ficcion</option>
    <option>Terror</option>
    <option>Misterio</option>
    <option>Romance</option>
    <option>Aventura</option>
    <option>Drama</option>
    <option>Clasico</option>
    <option>Finanzas</option>
</select>`
}else{
contenedor.innerHTML=
`<input type="text" id="valor"
placeholder="Escriba aquí">`
}

this.querySelector("#valor")
.oninput = ()=> this.filtrar()
}

filtrar(){

let tipo = this.querySelector("#tipoBusqueda").value
let valor = this.querySelector("#valor").value.toLowerCase()

let resultado = this.querySelector("#resultado")
let mensaje = this.querySelector("#mensaje")

if(valor===""){
resultado.innerHTML=""
mensaje.innerHTML=""
return
}

let filtrados = this.libros.filter(libro=>{

if(tipo==="nombre")
return libro.nombre.toLowerCase().includes(valor)

if(tipo==="autor")
return libro.autor.toLowerCase().includes(valor)

if(tipo==="genero")
return libro.genero.toLowerCase().includes(valor)

if(tipo==="year")
return libro.year.toString().includes(valor)

})

resultado.innerHTML=""

if(filtrados.length>0){

mensaje.innerHTML=`✅ ${tipo.toUpperCase()} ENCONTRADO`

filtrados.forEach(libro=>{
resultado.innerHTML+=`
<div class="cardLibro">
<h3>${libro.nombre}</h3>
<p><b>Autor:</b> ${libro.autor}</p>
<p><b>Género:</b> ${libro.genero}</p>
<p><b>Año:</b> ${libro.year}</p>
</div>`
})

}else{
mensaje.innerHTML=`❌ NO EXISTE`
}

}

}

customElements.define(
"buscador-libros",
BuscadorLibros
)