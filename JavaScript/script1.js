document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '../Img/carpeta1/Imagen1.jpeg' },
        { img: '../Img/carpeta1/Imagen2.jpeg' },
        { img: '../Img/carpeta1/Imagen3.jpeg' },
        { img: '../Img/carpeta1/Imagen4.jpeg' },
        { img: '../Img/carpeta1/Imagen5.jpeg' },
        { img: '../Img/carpeta1/Imagen6.jpeg' },
        { img: '../Img/carpeta1/Imagen7.jpeg' },
        { img: '../Img/carpeta1/Imagen8.jpeg' },
        { img: '../Img/carpeta1/Imagen16.jpeg' },
        { img: '../Img/carpeta1/Imagen10.jpeg' },
        { img: '../Img/carpeta1/Imagen11.jpeg' },
        { img: '../Img/carpeta1/Imagen29.jpeg' },
        { img: '../Img/carpeta1/Imagen13.jpeg' },
        { img: '../Img/carpeta1/Imagen14.jpeg' },
        { img: '../Img/carpeta1/Imagen28.jpeg' },
        { img: '../Img/carpeta1/Imagen35.jpeg' },
        { img: '../Img/carpeta1/Imagen17.jpeg' },
        { img: '../Img/carpeta1/Imagen18.jpeg' },
        { img: '../Img/carpeta1/Imagen19.jpeg' },
        { img: '../Img/carpeta1/Imagen20.jpeg' },
        { img: '../Img/carpeta1/Imagen21.jpeg' },
        { img: '../Img/carpeta1/Imagen22.jpeg' },
        { img: '../Img/carpeta1/Imagen2.jpeg' },
        { img: '../Img/carpeta1/Imagen24.jpeg' },
        { img: '../Img/carpeta1/Imagen25.jpeg' },
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