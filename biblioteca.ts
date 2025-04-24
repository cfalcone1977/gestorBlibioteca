 import { Libro, arregloLibros, GestorLibros } from "./librosDatos";
 
let lugar:number;
const libro1 = {autor: "NuevoGeorge Orwell", titulo: "N1984", genero: "NCiencia Ficcion", tipo:"Nuevonovela",ibsn:"N978-0451524935"};
const ManejoLibros = new GestorLibros(arregloLibros);
ManejoLibros.insertarLibro(libro1);
lugar=ManejoLibros.buscarLibroISBN("978-0060927611");
console.log(lugar);





