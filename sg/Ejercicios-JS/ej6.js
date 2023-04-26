
 const carrito = {
    productos: [
        { nombre: 'papel higienico', unidades: 4, precio: 5 },
        { nombre: 'chocolate', unidades: 2, precio: 1.5 },
    ],
    
    get precioTotal() {
        let total = 0;
        for (i = 0; i < this.productos.length; i++) {
          total += this.productos[i].precio * this.productos[i].unidades;
        }
        return total;
    }
};