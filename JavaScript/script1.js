document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '../img/Imagen1.jpeg' },
        { img: '../img/Imagen2.jpeg' },
        { img: '../img/Imagen3.jpeg' },
        { img: '../img/Imagen4.jpeg' },
        { img: '../img/Imagen5.jpeg' },
        { img: '../img/Imagen6.jpeg' },
        { img: '../img/Imagen7.jpeg' },
        { img: '../img/Imagen8.jpeg' },
        { img: '../img/Imagen9.jpeg' },
        { img: '../img/Imagen10.jpeg' },
        { img: '../img/Imagen1.jpeg' },
        { img: '../img/Imagen2.jpeg' },
        { img: '../img/Imagen3.jpeg' },
        { img: '../img/Imagen4.jpeg' },
        { img: '../img/Imagen5.jpeg' },
        { img: '../img/Imagen6.jpeg' },
        { img: '../img/Imagen7.jpeg' },
        { img: '../img/Imagen8.jpeg' },
        { img: '../img/Imagen9.jpeg' },
        { img: '../img/Imagen10.jpeg' },
        { img: '../img/Imagen1.jpeg' },
        { img: '../img/Imagen2.jpeg' },
        { img: '../img/Imagen3.jpeg' },
        { img: '../img/Imagen4.jpeg' },
        { img: '../img/Imagen5.jpeg' },
        { img: '../img/Imagen6.jpeg' },
        { img: '../img/Imagen7.jpeg' },
        { img: '../img/Imagen8.jpeg' },
        { img: '../img/Imagen9.jpeg' },
        { img: '../img/Imagen10.jpeg' },
        { img: '../img/Imagen1.jpeg' },
        { img: '../img/Imagen2.jpeg' },
        { img: '../img/Imagen3.jpeg' },
        { img: '../img/Imagen4.jpeg' },
        { img: '../img/Imagen5.jpeg' },
        { img: '../img/Imagen6.jpeg' },
        { img: '../img/Imagen7.jpeg' },
        { img: '../img/Imagen8.jpeg' },
        { img: '../img/Imagen9.jpeg' },
        { img: '../img/Imagen10.jpeg' },
        { img: '../img/Imagen1.jpeg' },
        { img: '../img/Imagen2.jpeg' },
        { img: '../img/Imagen3.jpeg' },
        { img: '../img/Imagen4.jpeg' },
        { img: '../img/Imagen5.jpeg' },
        { img: '../img/Imagen6.jpeg' },
        { img: '../img/Imagen7.jpeg' },
        { img: '../img/Imagen8.jpeg' },
        { img: '../img/Imagen9.jpeg' },
        { img: '../img/Imagen10.jpeg' },
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