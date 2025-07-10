(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }
  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getActorsInfo(id: string) {
    console.log({ id });
  }
  // funcion para obtener el bio del actor por el id
  function getActorBioById(Id: string) {
    console.log({ Id });
  }
  // Crear una película
  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    const newMovie: Movie = { title, description, rating, cast };
    console.log({ newMovie });
  }
  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;
    console.log("Crear actor");
    return true;
  }

  // Continuar

  function getActorMovies(actorId: string) {
    console.log({ actorId });
  }
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    let result: number;

    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  };

  // Mejorar la función getPayAmount

  const getPayAmountt = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) {
      return 1500;
    }

    if (isSeparated) {
      return 2500;
    }

    return isRetired ? 3000 : 4000;
  };

  // Mejorar la función getPayAmount
  const getPayAmounttt = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 4000;
  };
})();
