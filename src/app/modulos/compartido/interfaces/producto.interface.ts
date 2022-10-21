export interface IProductoFirebase {
    [id: string]: IProductoDetalle;
}

export interface IProductoDetalle {
    cantidad: number;
    categoria: string;
    precio: number;
    nombre: string;
    imagen: string;
    id?: string;
}