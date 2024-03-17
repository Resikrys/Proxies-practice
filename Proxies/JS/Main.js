// Crear la definició de l'objecte product
let product = {
    code: '',
    description: '',
    stock: 0
}

const handlerProduct = {
    // Métode per validar l'objecte product 
    set(obj, prop, value) {
        /** Validacions **/
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`Propiedad '${prop}' inexistente`);
        }
        if (prop === 'code' && typeof value !== 'string') {
            return console.error('code debe ser string');
        }
        if (prop === 'description' && typeof value !== 'string') {
            return console.error('description debe ser string');
        }
        if (prop === 'stock' && typeof value !== 'number') {
            return console.error('stock debe ser number');
        }
        // Asignació (setter) dels parametres
        obj[prop] = value
    }
}

// Validar un objecte product amb les validacions de handlerProduct
const validProduct = new Proxy(product, handlerProduct);

// Omplir els valors d'un objecte product passant les validacions
// validProduct.code = 1234;
validProduct.code = '1234';
validProduct.description = 'Description test';
validProduct.stock = 10;
// validProduct.store = 10;

// Mostrar per consola
console.log(product);

printMessage('hola');