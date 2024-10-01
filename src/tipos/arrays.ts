(() => {


    // number[]
    // const numbers = [1,2,3,4,5,6,7,8,9,10];

    // (string | number)[]
    // const numbers = [1,2,3,4,5,'6',7,8,9,10];

    const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];

    numbers.push(11);
    numbers.push('12');

    numbers.push(true);


    const villanos = ['Omega Rojo', 'Dormamu', 'Duende Verde'];

    villanos.forEach(villano => console.log(villano.toUpperCase()))

})();