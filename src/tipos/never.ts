(() => {

    const error = (message: string):never => {
        throw new Error(message);
    }

    error('Este tipo de funcion Nunca debe terminar exitosamente');
    console.log('Hola mundo');
    
})();