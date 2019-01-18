// required
const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    for (i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i } \n`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${ base }, no es un numero valido`);
            return;
        }

        let data = '';

        for (i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i } \n`);
        }

        fs.writeFile(`archivos/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }.txt`);
            }
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}