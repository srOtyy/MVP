export interface IMesa{
    numero: number;
    estado: boolean;
    posicion: {x: number, y: number};
    mozo: string;
    comanda: IComandaProducto[];
    id: string
}
export interface IProducto{
    nombre: string;
    precio: number;
}
export interface IComandaProducto{
    producto: IProducto
    cantidad: number
}