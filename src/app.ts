// Objetos

type Vehicle = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
}

const batimovil: Vehicle = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

// Definición en línea
const bumblebee: {carroceria: string, modelo: string, antibalas: boolean, pasajeros: number, disparar?: () => void} = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type Villian = {
  nombre: string;
  edad?: number;
  mutante: boolean;
}

// Villanos debe de ser un arreglo de objetos personalizados
const villanos: Villian[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Mutant = {
  poder: string;
  estatura: number;
}

type MutantGroup = {
  lider: boolean;
  miembros: string[];
}


const charles: Mutant = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: MutantGroup = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Mutant | MutantGroup;

mystique = charles;
mystique = apocalipsis;
