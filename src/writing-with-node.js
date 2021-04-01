const fs = require('fs')
const path = require('path')

const encabezados = require("./articulos.js")

const archivoOriginal = path.join(__dirname, '../pages/articulo-1.html')

for(let n=2;n<=encabezados.length;n+=1) //Arranca en el 2 porque el 1 ya está creado, hasta el total de articulos que exista
{
    let construccion = '../pages/articulo-' + n + '.html'
    let archivoNuevo = path.join(__dirname, construccion)
    

    setTimeout(function duplica()
        //Callback hell para ejecutar en orden
        {fs.createReadStream(archivoOriginal).pipe(fs.createWriteStream(archivoNuevo)); //duplica el archivo-1 con nombre archivo-n
            console.log(archivoNuevo + ' Creado');
                
            setTimeout(function reemplaza(){ //reemplaza nota-1 por nota-n en HTML
                    const textoBase = '<input id=\'Nro_Nota\' value=1>'
                    let nuevoTexto = '<input id=\'Nro_Nota\' value=' + n + '>'
                    fs.readFile(archivoNuevo, 'utf8', function (err,data) { 
                    if (err) {return console.log(err)} 
                    let result = data.replace(textoBase, nuevoTexto); 
                    fs.writeFile(archivoNuevo, result, 'utf8', function (err) {if (err) return console.log(err)});})
                        console.log('Valor reemplazado por ' + n)
        }, 2000);
      }, 1000);

}

