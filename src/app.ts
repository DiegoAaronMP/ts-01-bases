// (() => {
    const a:number = 10;
    
    let b: string;
    
    // ! b = 3.1416;
    // ! b = {};
    // ! b = [];
    b = 'hola';
    
    function sayHello( msg: string ) {
        console.log(msg + ' ' + 'Diego');
    }

    console.log(a);
    sayHello(b);    
// })();