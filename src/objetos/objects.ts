(()=>{

    // * En los objetos no importa donde se coloquen las propiedades opcionales
    // ! Pero
    // Se recomienda ponerlos por orden alfabético o por orden de aparición/creación
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    }
 
    flash = {
        name: 'Wally West',
        age: 16,
        powers: ['Lanzar rayos'],
        getName(){
            return this.name;
        }
    }

    console.log( flash.getName() );
    
})();