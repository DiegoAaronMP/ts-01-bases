(()=> {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.541456
    }

    const { poder, vision } = avengers;

    console.log(poder.toFixed(2), vision.toUpperCase());
    

    const printAvenger = ({ vision, ...resto }:Avengers) => {
        console.log(vision, resto);
    }

    printAvenger(avengers);
    

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 4561.6451];

    const [capi, ironman, numero] = avengersArr;
    console.log(ironman, capi, numero);
    



})();