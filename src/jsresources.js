//Variables compartidas

let footer = 'Arcángel Miguel 2020 - info@puentealalibertad.com'
let RootImagen = '../src/images/'
let RootImagenIndex = 'src/images/'
let comentarioDelSitio = 'Comentarios del sitio: '


//index.html
if (document.getElementById('Nro_Nota').value=='Home')
{
    //HEAD
    let elHeadIndex = '<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-V3FZ218CXC"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\',\'G-V3FZ218CXC\'); </script><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--Responsive--><meta name="description"	content="Enseñanzas Puras de la Actividad YO SOY y del Diario del Puente a la Libertad. Desde los Maestros Ascendidas hacia el público sin agregados ni modificaciones, sin interpretaciones ni limitaciones."><!--Descripción--><meta name="robots" content="index,follow"><!--Habilitar indexación de Robots--><link rel="stylesheet" href="src/homeStyle.css" type="text/css" media="screen"><!--Estilos--><!-- ÍCONOS--><link rel="apple-touch-icon" sizes="57x57" href="/src/icon/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/src/icon/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="src/icon/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="src/icon/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="src/icon/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="src/icon/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="src/icon/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="src/icon/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="src/icon/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192"  href="src/icon/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="src/icon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="src/icon/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="src/icon/favicon-16x16.png"><link rel="manifest" href="src/icon/manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="src/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff">'
    document.getElementById('elHead').innerHTML = elHeadIndex
    
    //BODY
    
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

    //Footer
    document.getElementById('footy').innerHTML = footer

}


else{
    
    //articulos-n.html

        for (let i=0; encabezados.length; i+=1)
        {
            if (document.getElementById('Nro_Nota').value == encabezados[i].Nro)
            {
               
               //Construcción del HTML
                    //HEAD
                    let elHead = '<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-V3FZ218CXC"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\',\'G-V3FZ218CXC\'); </script><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--Responsive--><meta name="description"	content="Enseñanzas Puras de la Actividad YO SOY y del Diario del Puente a la Libertad. Desde los Maestros Ascendidas hacia el público sin agregados ni modificaciones, sin interpretaciones ni limitaciones."><!--Descripción--><meta name="robots" content="index,follow"><!--Habilitar indexación de Robots--><link rel="stylesheet" href="../src/styles.css" type="text/css" media="screen"><!--Estilos--><!-- ÍCONOS--><link rel="apple-touch-icon" sizes="57x57" href="../src/icon/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="..//src/icon/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="../src/icon/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="../src/icon/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="../src/icon/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="../src/icon/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="../src/icon/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="../src/icon/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="../src/icon/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192"  href="../src/icon/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="../src/icon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="../src/icon/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="../src/icon/favicon-16x16.png"><link rel="manifest" href="../src/icon/manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="../src/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff">'   
                    document.getElementById('elHead').innerHTML = elHead

                    //NAV
                    let elNav= '<img src="../src/images/Logo puentealalibertad PNG.png" alt="logo" srcset=""><a href="../index.html"> puentealalibertad.com</a>'
                    document.getElementById('elNav').innerHTML = elNav

                    //ARTICULE
                    let elArticle = '<header><!-- Texto insertado por javascript--><h1 id="Titulo"></h1><div class="Contenedor_Imagen_y_Pie"><img id="ImagenAutor" class="Imagen_Autor" alt="Imagen del Maestro el Morya"><p id="Autor" class="pieDeFoto"> </p><p id="Fecha" class="pieDeFotoDos"></p></div><p id="Notas" class="Comentarios"></p></header><p id="Aca_va_el_texto"></p>'
                    document.getElementById('elArticle').innerHTML = elArticle

                    //FOOTER
                    document.getElementById('footy').innerHTML = footer

                //Aplicacion de la nota
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
}
