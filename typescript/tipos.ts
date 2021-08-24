// Boolean 
const contaPaga: boolean = true;

// Number 
const idade: number = 19;

// String
const nome: string = "Victória Barbosa";

// Array 
const idades: number[] = [23, 19, 27, 38, 26];

// Tuple
let jogadores: [string, string, string];
jogadores = ['Victtoria', 'Vitoria', ' Vitor'];

// Enum 
enum StatusAprovação {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const StatusAprovados: StatusAprovação= StatusAprovação.Aprovado;

// Any 
const retornoAPI: any[]= [123, 'Victoria', false];
const retornoAPI2: any= {
    //.....
};

// Void 
function print(msg: string){
    console.log(msg);
}

// Null e Undefined 
const u: undefined = undefined;
const n: null = null;

// Object 
function criar(objetos: object ){
    //....
}
criar({
    propriedade: 1;
})
// criar('Victória')// da erro
