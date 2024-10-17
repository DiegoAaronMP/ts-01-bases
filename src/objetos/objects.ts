(()=>{

    let flash: { name: string, age?: number, powers: string[] } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    }
 
    flash = {
        name: 'Wally West',
        age: 16,
        powers: ['Lanzar rayos'],
        // getNombre(){
        //     return this.name;
        // }
    }

    console.log(flash);
    
})();