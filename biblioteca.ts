 import { Libro, arregloLibros, GestorLibros } from "./librosDatos";


const ManejoLibros = new GestorLibros(arregloLibros);
const libro1 = {autor: "NuevoGeorge Orwell", titulo: "N1984", genero: "NCiencia Ficcion", tipo:"Nuevonovela",isbn:"N978-0451524935"};
const libro2 = {autor: "Cristian Falcone", titulo: "Naranjito", genero: "Infantil", tipo:"Cuento",isbn:"NCOF-207420"};
const libroModificado ={autor: "Autor_Modificado", titulo: "Titulo_Modificado", genero: "Genero_Modificado", tipo:"Tipo_Modificado",isbn:"ISBN_Modificado"}

ManejoLibros.insertarLibro(libro1);

let posicion:number;
posicion=ManejoLibros.buscarLibroISBN("978-0547928227");
if (posicion!=-1){
                  ManejoLibros.consultarLibro(posicion);
                 } else {
                  console.log("El LIBRO BUSCADO NO EXISTE");
                 }

ManejoLibros.buscarLibroAutor("Gabriel García Márquez"); 


ManejoLibros.insertarLibro(libro2);        

ManejoLibros.mostrarbiblioteca();    

ManejoLibros.eliminarLibro(1);

ManejoLibros.mostrarbiblioteca();

ManejoLibros.modificarLibro(libroModificado,0);

ManejoLibros.mostrarbiblioteca();






