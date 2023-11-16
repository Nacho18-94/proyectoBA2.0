document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '../img/Imagen21.jpeg' },
        { img: '../img/Imagen22.jpeg' },
        { img: '../img/Imagen23.jpeg' },
        { img: '../img/Imagen24.jpeg' },
        { img: '../img/Imagen25.jpeg' },
        { img: '../img/Imagen26.jpeg' },
        { img: '../img/Imagen27.jpeg' },
        { img: '../img/Imagen28.jpeg' },
        { img: '../img/Imagen29.jpeg' },
        { img: '../img/Imagen30.jpeg' },
        { img: '../img/Imagen21.jpeg' },
        { img: '../img/Imagen22.jpeg' },
        { img: '../img/Imagen23.jpeg' },
        { img: '../img/Imagen24.jpeg' },
        { img: '../img/Imagen25.jpeg' },
        { img: '../img/Imagen26.jpeg' },
        { img: '../img/Imagen27.jpeg' },
        { img: '../img/Imagen28.jpeg' },
        { img: '../img/Imagen29.jpeg' },
        { img: '../img/Imagen30.jpeg' },
        { img: '../img/Imagen21.jpeg' },
        { img: '../img/Imagen22.jpeg' },
        { img: '../img/Imagen23.jpeg' },
        { img: '../img/Imagen24.jpeg' },
        { img: '../img/Imagen25.jpeg' },
        { img: '../img/Imagen26.jpeg' },
        { img: '../img/Imagen27.jpeg' },
        { img: '../img/Imagen28.jpeg' },
        { img: '../img/Imagen29.jpeg' },
        { img: '../img/Imagen30.jpeg' },
        { img: '../img/Imagen21.jpeg' },
        { img: '../img/Imagen22.jpeg' },
        { img: '../img/Imagen23.jpeg' },
        { img: '../img/Imagen24.jpeg' },
        { img: '../img/Imagen25.jpeg' },
        { img: '../img/Imagen26.jpeg' },
        { img: '../img/Imagen27.jpeg' },
        { img: '../img/Imagen28.jpeg' },
        { img: '../img/Imagen29.jpeg' },
        { img: '../img/Imagen30.jpeg' },
        { img: '../img/Imagen21.jpeg' },
        { img: '../img/Imagen22.jpeg' },
        { img: '../img/Imagen23.jpeg' },
        { img: '../img/Imagen24.jpeg' },
        { img: '../img/Imagen25.jpeg' },
        { img: '../img/Imagen26.jpeg' },
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