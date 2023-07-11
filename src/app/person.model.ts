
export class Person{
    /*
    nombre:string = ""
    apellido:string = ""

    constructor(nombre:string,apellido:string){ //Buena practica declarar de que tipo sera la variable para que no sea tipo any

        this.nombre = nombre
        this.apellido = apellido

    }*/

    constructor(public nombre:string, public apellido :string){} //Es lo mismo que declarar las variables y crear un constructor como en la parte de arriba

}