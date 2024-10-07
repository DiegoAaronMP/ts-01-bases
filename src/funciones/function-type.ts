(()=>{

    // * Tipo number
    const addNumbers = (a: number, b: number) => {
        return a + b;
    }

    // * Tipo string
    const greet = (name: string) => {
        return `Hola ${name}`;
    }
    
    // * Tipo string
    const saveTheWorld = () => {
        return 'El mundo está salvado';
    }


    // ! Tipo any
    // ! let myFunction;

    // * Tipo Función
    // let myFunction: Function;

    // * Tipo Función de cierto tipo
    // let myFunction: (y:number, z:number) => number;
    // let myFunction: (y:string) => string;
    let myFunction: () => string;

    // ! myFunction = 10;
    // ! console.log(myFunction);

    // myFunction = addNumbers;
    // console.log(myFunction(1,2));
   
    // myFunction = greet;
    // console.log(myFunction('Shrek'));
    
    myFunction = saveTheWorld;
    console.log(myFunction());
})();