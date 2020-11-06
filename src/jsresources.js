let footer = 'Arcángel Miguel 2020 - info@puentealalibertad.com'
document.getElementById('footy').innerHTML = footer


let RootImagen = '../src/images/'
let RootImagenIndex = 'src/images/'
let comentarioDelSitio = 'Comentarios del sitio: '





//Armado del index

if (document.getElementById('Nro_Nota').value=='Home')
{

    for (let i = encabezados.length-1; i>=0; i-=1){



        let nuevoArticulo = document.createElement('section')
        nuevoArticulo.innerHTML =  
         
        '<figure><img src="'+ RootImagenIndex + encabezados[i].ImagenAutor + '" ' + 'class="Imagen_Autor"' + 
        'alt = Imagen de ' + encabezados[i].Autor + '></figure>' + 
        '<div class="contieneTexto">' + 
            '<h2 class="H-2"><a class="H-2-a" href="pages/articulo-' + encabezados[i].Nro + '.html"' + '>' + encabezados[i].Titulo + '</a></h2>' +
            '<p class="Comentarios">' + encabezados[i].Notas +'</p>' +
            '<p class="pieDeFotoDos">' + encabezados[i].Origen + '. ' + encabezados[i].Mes + '-' + encabezados[i].Anio + ' Autor: ' + encabezados[i].Autor + '</p>' + 
            '<a href="pages/articulo-' + encabezados[i].Nro + '.html"' + '>Ver mas</a>'            
        '</div>';



 

        let currentDiv = document.getElementById('footy')
        document.body.insertBefore(nuevoArticulo, currentDiv); 




    }

}
else{}






//Armado de headers en articulos
for (let i=0; encabezados.length; i+=1){

    if (document.getElementById('Nro_Nota').value == encabezados[i].Nro)  //Que busque la nota
    {
        document.getElementById('Titulo').innerHTML = encabezados[i].Titulo; //Aplica título
        document.getElementById('Autor').innerHTML = encabezados[i].Autor; //Aplica título
        document.getElementById('Notas').innerHTML = comentarioDelSitio + encabezados[i].Notas; //Aplica Comentarios del Sitio
        document.getElementById('Fecha').innerHTML = encabezados[i].Origen + '. ' + encabezados[i].Mes + '-' + encabezados[i].Anio + ' Autor: ' + encabezados[i].Autor; //Aplica Comentarios del Sitio
        document.getElementById('ImagenAutor').src = RootImagen + encabezados[i].ImagenAutor;
        document.getElementById('Aca_va_el_texto').innerHTML =encabezados[i].Texto;
        
        document.title = encabezados[i].Titulo + '| puentealalibertad.com'


    }
    else{} /*Nada por ahora*/ 

}

