export class Libro{
    autor:string;
    titulo:string;
    genero:string;
    tipo:string;
    isbn: string;
    constructor(Autor:string, Titulo:string, Genero:string, Tipo:string, ISBN:string){
          this.autor=Autor;
          this.titulo=Titulo;
          this.genero=Genero;
          this.tipo=Tipo;
          this.isbn=ISBN;
    }
  }



 export class GestorLibros{
    //libro:Libro = {autor:"",titulo:"",genero:"",tipo:"",isbn:""};
    arrayLibros: Libro[];
    
    constructor(arregloLibro:Libro[]){
       this.arrayLibros=arregloLibro;
       console.log("this.arrayLibros  "+this.arrayLibros);
    }
    buscarLibroAutor(arregloLibro:Libro[],BuscarAutor:string){
      
        
    }
    buscarLibroISBN(Buscarisbn:string):number{
          console.log(this.arrayLibros.length);
          for (let i = 0; i < this.arrayLibros.length; i=i+1) {   
              if (this.arrayLibros[i].isbn===Buscarisbn){
                                     console.log("Libro ENCONTRADO..."+i);
                                     console.log(this.arrayLibros[i].isbn);
                                     return i;
              }
          }
       return -1;
    }


    insertarLibro(nuevoLibro:any){ 
     console.log("nuevoLibro "+nuevoLibro);
     this.arrayLibros.push(nuevoLibro);
     console.log(this.arrayLibros);
 
    }
    consultarLibro(){
 
    }
 
    modificarLibro(){
 
    }
 
    eliminarLibro(){
 
 
    }
 }



export let arregloLibros: Libro[ ]= [
    {
      "autor": "Gabriel García Márquez",
      "titulo": "Cien años de soledad",
      "genero": "Realismo mágico",
      "tipo": "Novela",
      "isbn": "978-0307474728"
    },
    {
      "autor": "George Orwell",
      "titulo": "1984",
      "genero": "Ciencia ficción",
      "tipo": "Novela",
      "isbn": "978-0451524935"
    },
    {
      "autor": "Jane Austen",
      "titulo": "Orgullo y prejuicio",
      "genero": "Romance",
      "tipo": "Novela",
      "isbn": "978-0141439518"
    },
    {
      "autor": "Ernest Hemingway",
      "titulo": "El viejo y el mar",
      "genero": "Aventura",
      "tipo": "Novela",
      "isbn": "978-0684801223"
    },
    {
      "autor": "Harper Lee",
      "titulo": "Matar a un ruiseñor",
      "genero": "Ficción",
      "tipo": "Novela",
      "isbn": "978-0061120084"
    },
    {
      "autor": "F. Scott Fitzgerald",
      "titulo": "El gran Gatsby",
      "genero": "Ficción",
      "tipo": "Novela",
      "isbn": "978-0743273565"
    },
    {
      "autor": "J.R.R. Tolkien",
      "titulo": "El Señor de los Anillos",
      "genero": "Fantasía",
      "tipo": "Novela",
      "isbn": "978-0547928227"
    },
    {
      "autor": "Agatha Christie",
      "titulo": "Asesinato en el Orient Express",
      "genero": "Misterio",
      "tipo": "Novela",
      "isbn": "978-0062073616"
    },
      {
      "autor": "Isabel Allende",
      "titulo": "La casa de los espíritus",
      "genero": "Realismo mágico",
      "tipo": "Novela",
      "isbn": "978-0307390134"
    },
    {
      "autor": "Julio Cortázar",
      "titulo": "Rayuela",
      "genero": "Ficción experimental",
      "tipo": "Novela",
      "isbn": "978-8437609404"
    },
    {
      "autor": "Mario Vargas Llosa",
      "titulo": "La ciudad y los perros",
      "genero": "Ficción",
      "tipo": "Novela",
      "isbn": "978-8466325785"
    },
    {
      "autor": "Jorge Luis Borges",
      "titulo": "Ficciones",
      "genero": "Cuento",
      "tipo": "Antología",
      "isbn": "978-0802130308"
    },
    {
      "autor": "Juan Rulfo",
      "titulo": "Pedro Páramo",
      "genero": "Realismo mágico",
      "tipo": "Novela",
      "isbn": "978-9681600415"
    },
    {
      "autor": "Gabriel García Márquez",
      "titulo": "El amor en los tiempos del cólera",
      "genero": "Romance",
      "tipo": "Novela",
      "isbn": "978-0141032485"
    },
    {
      "autor": "Stephen King",
      "titulo": "It",
      "genero": "Terror",
      "tipo": "Novela",
      "isbn": "978-1501142942"
    },
    {
      "autor": "J.K. Rowling",
      "titulo": "Harry Potter y la piedra filosofal",
      "genero": "Fantasía",
      "tipo": "Novela",
      "isbn": "978-0747532696"
    },
    {
      "autor": "Dan Brown",
      "titulo": "El código Da Vinci",
      "genero": "Misterio",
      "tipo": "Novela",
      "isbn": "978-0385504327"
    },
    {
      "autor": "Stieg Larsson",
      "titulo": "Los hombres que no amaban a las mujeres",
      "genero": "Novela negra",
      "tipo": "Novela",
      "isbn": "978-9788423339644"
    },
    {
      "autor": "Paulo Coelho",
      "titulo": "El alquimista",
      "genero": "Fábula",
      "tipo": "Novela",
      "isbn": "978-0061122415"
    },
    {
      "autor": "Isabel Allende",
      "titulo": "Paula",
      "genero": "Autobiografía",
      "tipo": "No Ficción",
      "isbn": "978-0060927611"
    }
  ];