class Image { // Representación de algo del mundo real.
    constructor(id,rival){
        this.id = id
        this.rival = rival
    }
    cargarImagen() {
        return (
            ` <div class="column_galery">
            <img src="../Fotos/Template_Galery/Foto${this.id}.jpg" style="width:100%" onclick="openModal();currentSlide(${this.id})" class="hover-shadow cursor">
        </div>`
        )
    }
    cargarModalImagen() {
        return (
            `<div class="mySlides">
                <div class="numbertext">${this.id} / 16</div>
                <img src="../Fotos/Template_Galery/Foto${this.id}.jpg" style="width:100%">
            </div>`
        )
    }

    


}

function initializeImages() {
    return [
        new Image(1, 'Toro'),
        new Image(2, 'Toro'),
        new Image(3, 'Toro'),
        new Image(4, 'Toro'),
        new Image(5, 'Toro'),
        new Image(6, 'Toro'),
        new Image(7, 'Toro'),
        new Image(8, 'Toro'),
        new Image(9, 'Toro'),
        new Image(10, 'Toro'),
        new Image(11, 'Toro'),
        new Image(12, 'Toro'),
        new Image(13, 'Toro'),
        new Image(14, 'Toro'),
        new Image(15, 'Toro'),
        new Image(16, 'Toro'),

                 
    ]
}