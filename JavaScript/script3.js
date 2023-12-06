document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '../Img/carpeta3/Imagen1.jpeg' },
        { img: '../Img/carpeta3/Imagen2.jpeg' },
        { img: '../Img/carpeta3/Imagen3.jpeg' },
        { img: '../Img/carpeta3/Imagen4.jpeg' },
        { img: '../Img/carpeta3/Imagen5.jpeg' },
        { img: '../Img/carpeta3/Imagen19.jpeg' },
        { img: '../Img/carpeta3/Imagen7.jpeg' },
        { img: '../Img/carpeta3/Imagen8.jpeg' },
        { img: '../Img/carpeta3/Imagen6.jpeg' },
        { img: '../Img/carpeta3/Imagen21.jpeg' },
        { img: '../Img/carpeta3/Imagen30.jpeg' },
        { img: '../Img/carpeta3/Imagen21.jpeg' },
        { img: '../Img/carpeta3/Imagen27.jpeg' },
        { img: '../Img/carpeta3/Imagen28.jpeg' },
        { img: '../Img/carpeta3/Imagen29.jpeg' },
        { img: '../Img/carpeta3/Imagen3.jpeg' },
        { img: '../Img/carpeta3/Imagen24.jpeg' },
        { img: '../Img/carpeta3/Imagen4.jpeg' },
        { img: '../Img/carpeta3/Imagen31.jpeg' },
        { img: '../Img/carpeta3/Imagen32.jpeg' },
        { img: '../Img/carpeta3/Imagen33.jpeg' },
        { img: '../Img/carpeta3/Imagen34.jpeg' },
        { img: '../Img/carpeta3/Imagen35.jpeg' },
        { img: '../Img/carpeta3/Imagen36.jpeg' },
        { img: '../Img/carpeta3/Imagen37.jpeg' },
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