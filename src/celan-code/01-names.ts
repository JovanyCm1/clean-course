(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const archivosAEvaluar = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];

  // Archivos marcados para borrar - files to delete
  const archivosABorrar = archivosAEvaluar.map((f) => f.f);

  //malos nombres
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const diaDeHoy = new Date();

  // días transcurridos - elapsed time in days
  const diasTranscurridos: number = 23;

  // número de archivos en un directorio - number of files in directory
  const numeroArchivos = 33;

  // primer nombre - first name
  const primerNombre = "Jaime";

  // primer apellido - last name
  const primerApellido = "Carrizalez";

  // días desde la última modificación - days since modification
  const diasUltimaModificacion = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maximasClasesEstudiante = 6;

  // * Arreglos

  //malo
  const fruit = ["manzana", "platano", "fresa"];
  // regular
  const fruitList = ["manzana", "platano", "fresa"];
  // bueno
  const fruits = ["manzana", "platano", "fresa"];
  // mejor
  const fruitNames = ["manzana", "platano", "fresa"];
})();

(() => {
  // * Booleanos

  // mal
  const open = true;
  const write = true;
  const fruit = true;
  const active = false;
  const noValues = true;
  const notEmpty = true;

  // mejor
  const isOpen = true;
  const canWrite = true;
  const hasFruit = true;
  const isActive = false;
  const hasValues = false;
  const isEmpty = false;

  // * Números

  // mal
  const fruits = 10;
  const cars = 5;

  // mejor
  const numberOfFruits = 10;
  const maxOfFruits = 10;
  const minOfFruits = 0;

  const numberOfCars = 5;
  const totalOfCars = 5;

  // * Funciones
  //representar acciones

  // mal
  /*createUserIfNotExists();
  updateUserIfNotEmpty();
  sendEmailIfFieldsValid();
  */
  // mejor

  /*
  createUser();
  updateUser();
  sendEmail();
  */

})();
