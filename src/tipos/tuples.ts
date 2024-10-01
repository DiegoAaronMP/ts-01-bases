(()=> {

    // * El primer valor debe ser un string y el segundo un number
    // const hero: [string, number] = ['Dr Strange' , 100];
    const hero: [string, number, boolean] = ['Dr Strange' , 100, true];

    // ! Esto no se puede
    // hero[0] = 50;
    // hero[1] = 'Iron Man';

    // * Esto si se puede
    hero[0] = 'Iron Man';
    hero[1] = 50;

    hero[2] = false;

    console.log(hero);

})();