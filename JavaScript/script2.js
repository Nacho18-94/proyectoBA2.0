document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '../img/Imagen11.jpeg' },
        { img: '../img/Imagen12.jpeg' },
        { img: '../img/Imagen13.jpeg' },
        { img: '../img/Imagen14.jpeg' },
        { img: '../img/Imagen15.jpeg' },
        { img: '../img/Imagen16.jpeg' },
        { img: '../img/Imagen17.jpeg' },
        { img: '../img/Imagen18.jpeg' },
        { img: '../img/Imagen19.jpeg' },
        { img: '../img/Imagen20.jpeg' },
        { img: '../img/Imagen11.jpeg' },
        { img: '../img/Imagen12.jpeg' },
        { img: '../img/Imagen13.jpeg' },
        { img: '../img/Imagen14.jpeg' },
        { img: '../img/Imagen15.jpeg' },
        { img: '../img/Imagen16.jpeg' },
        { img: '../img/Imagen17.jpeg' },
        { img: '../img/Imagen18.jpeg' },
        { img: '../img/Imagen19.jpeg' },
        { img: '../img/Imagen20.jpeg' },
        { img: '../img/Imagen11.jpeg' },
        { img: '../img/Imagen12.jpeg' },
        { img: '../img/Imagen13.jpeg' },
        { img: '../img/Imagen14.jpeg' },
        { img: '../img/Imagen15.jpeg' },
        { img: '../img/Imagen16.jpeg' },
        { img: '../img/Imagen17.jpeg' },
        { img: '../img/Imagen18.jpeg' },
        { img: '../img/Imagen19.jpeg' },
        { img: '../img/Imagen20.jpeg' },
        { img: '../img/Imagen11.jpeg' },
        { img: '../img/Imagen12.jpeg' },
        { img: '../img/Imagen13.jpeg' },
        { img: '../img/Imagen14.jpeg' },
        { img: '../img/Imagen15.jpeg' },
        { img: '../img/Imagen16.jpeg' },
        { img: '../img/Imagen17.jpeg' },
        { img: '../img/Imagen18.jpeg' },
        { img: '../img/Imagen19.jpeg' },
        { img: '../img/Imagen20.jpeg' },
        { img: '../img/Imagen11.jpeg' },
        { img: '../img/Imagen12.jpeg' },
        { img: '../img/Imagen13.jpeg' },
        { img: '../img/Imagen14.jpeg' },
        { img: '../img/Imagen15.jpeg' },
        { img: '../img/Imagen16.jpeg' },
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