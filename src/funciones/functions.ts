(() => {

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }   

    const activateBatisignal = ():string => {
        return 'Batisignal Activated!';
    }

    console.log(typeof activateBatisignal);
    
    const heroName = returnName();
})();