(()=> {
    type Avenger = {
        name: string,
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Iron Man',
        weapon: 'Armorsuit'
    }

    const cap: Avenger = {
        name: 'Captain America',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ ironman, cap, thor ];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon); 
    }
})()