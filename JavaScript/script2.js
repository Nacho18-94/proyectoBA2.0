document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '../Img/carpeta2/Imagen1.jpeg' },
        { img: '../Img/carpeta2/Imagen5.jpeg' },
        { img: '../Img/carpeta2/Imagen3.jpeg' },
        { img: '../Img/carpeta2/Imagen4.jpeg' },
        { img: '../Img/carpeta2/Imagen2.jpeg' },
        { img: '../Img/carpeta2/Imagen6.jpeg' },
        { img: '../Img/carpeta2/Imagen7.jpeg' },
        { img: '../Img/carpeta2/Imagen8.jpeg' },
        { img: '../Img/carpeta2/Imagen9.jpeg' },
        { img: '../Img/carpeta2/Imagen14.jpeg' },
        { img: '../Img/carpeta2/Imagen11.jpeg' },
        { img: '../Img/carpeta2/Imagen12.jpeg' },
        { img: '../Img/carpeta2/Imagen13.jpeg' },
        { img: '../Img/carpeta2/Imagen10.jpeg' },
        { img: '../Img/carpeta2/Imagen15.jpeg' },
        { img: '../Img/carpeta2/Imagen2.jpeg' },
        { img: '../Img/carpeta2/Imagen17.jpeg' },
        { img: '../Img/carpeta2/Imagen18.jpeg' },
        { img: '../Img/carpeta2/Imagen19.jpeg' },
        { img: '../Img/carpeta2/Imagen20.jpeg' },
        { img: '../Img/carpeta2/Imagen16.jpeg' },
        { img: '../Img/carpeta2/Imagen7.jpeg' },
        { img: '../Img/carpeta2/Imagen8.jpeg' },
        { img: '../Img/carpeta2/Imagen9.jpeg' },
        { img: '../Img/carpeta2/Imagen6.jpeg' },
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })

    })

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = "hidden"
    })

})