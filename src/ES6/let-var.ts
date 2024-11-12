(()=> {


    const heroe = {
        a: 1,
        b: 2
    }

    // Esto es permitido
    heroe.b = 100;

    const nombre = 'Diego';

    const getName = () => {
        console.log('viejo getName');
        
    }

    // ! Si getName se creara con 'function' esto sería posible
    // getName = () => {
    //     console.log('Nuevo getName');
        
    // }
})();