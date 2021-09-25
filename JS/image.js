class Image { // Representación de algo del mundo real.
    constructor(id,rival){
        this.id = id
        this.rival = rival
    }
    cargarImagen() {
        return (
            ` <div class="column_galery">
            <img  style="width:100%;object-fit:cover;" src="../Fotos/Template_Galery/${this.rival}/Foto${this.id}.jpg"  onclick="openModal();currentSlide(${this.id})" class="hover-shadow cursor">
        </div>`
        )
    }
    cargarModalImagen() {
        return (
            `<div class="mySlides">
                <div class="numbertext">${this.id} / 16</div>
                <img src="../Fotos/Template_Galery/${this.rival}/Foto${this.id}.jpg" style="width:100%">
            </div>`
        )
    }

    


}

function initializeImages(props) {

    let res;
    if (props == 'Insein'){
        res = [
        new Image(1, 'Insein'),
        new Image(2, 'Insein'),
        new Image(3, 'Insein'),
        new Image(4, 'Insein'),
        new Image(5, 'Insein'),
        new Image(6, 'Insein'),
        new Image(7, 'Insein'),
        new Image(8, 'Insein'),
        new Image(9, 'Insein'),
        new Image(10, 'Insein'),
        new Image(11, 'Insein'),
        new Image(12, 'Insein'),
        new Image(13, 'Insein'),
        new Image(14, 'Insein'),
        new Image(15, 'Insein'),
        new Image(16, 'Insein'),
    ]
    }
    if (props == 'toro'){
        res = [
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
    if (props == 'vamos'){
        res = [
            new Image(1, 'Vamos'),
            new Image(2, 'Vamos'),
            new Image(3, 'Vamos'),
            new Image(4, 'Vamos'),
            new Image(5, 'Vamos'),
            new Image(6, 'Vamos'),
            new Image(7, 'Vamos'),
            new Image(8, 'Vamos'),
            new Image(9, 'Vamos'),
            new Image(10, 'Vamos'),
            new Image(11, 'Vamos'),
            new Image(12, 'Vamos'),
            new Image(13, 'Vamos'),
            new Image(14, 'Vamos'),
            new Image(15, 'Vamos'),
            new Image(16, 'Vamos'),
    ]
    }
    if (props == 'vagoneta'){
        res = [
            new Image(1, 'Vagoneta'),
            new Image(2, 'Vagoneta'),
            new Image(3, 'Vagoneta'),
            new Image(4, 'Vagoneta'),
            new Image(5, 'Vagoneta'),
            new Image(6, 'Vagoneta'),
            new Image(7, 'Vagoneta'),
            new Image(8, 'Vagoneta'),
            new Image(9, 'Vagoneta'),
            new Image(10, 'Vagoneta'),
            new Image(11, 'Vagoneta'),
            new Image(12, 'Vagoneta'),
            new Image(13, 'Vagoneta'),
            new Image(14, 'Vagoneta'),
            new Image(15, 'Vagoneta'),
            new Image(16, 'Vagoneta'),
    ]
    }
    if (props == 'stark'){
        res = [
            new Image(1, 'Stark'),
            new Image(2, 'Stark'),
            new Image(3, 'Stark'),
            new Image(4, 'Stark'),
            new Image(5, 'Stark'),
            new Image(6, 'Stark'),
            new Image(7, 'Stark'),
            new Image(8, 'Stark'),
            new Image(9, 'Stark'),
            new Image(10, 'Stark'),
            new Image(11, 'Stark'),
            new Image(12, 'Stark'),
            new Image(13, 'Stark'),
            new Image(14, 'Stark'),
            new Image(15, 'Stark'),
            new Image(16, 'Stark'),
    ]
    }
    if (props == 'romario'){
        res = [
            new Image(1, 'Romario'),
            new Image(2, 'Romario'),
            new Image(3, 'Romario'),
            new Image(4, 'Romario'),
            new Image(5, 'Romario'),
            new Image(6, 'Romario'),
            new Image(7, 'Romario'),
            new Image(8, 'Romario'),
            new Image(9, 'Romario'),
            new Image(10, 'Romario'),
            new Image(11, 'Romario'),
            new Image(12, 'Romario'),
            new Image(13, 'Romario'),
            new Image(14, 'Romario'),
            new Image(15, 'Romario'),
            new Image(16, 'Romario'),
    ]
    }
    if (props == 'funebreros'){
        res = [
        new Image(1, 'Funebreros'),
        new Image(2, 'Funebreros'),
        new Image(3, 'Funebreros'),
        new Image(4, 'Funebreros'),
        new Image(5, 'Funebreros'),
        new Image(6, 'Funebreros'),
        new Image(7, 'Funebreros'),
        new Image(8, 'Funebreros'),
        new Image(9, 'Funebreros'),
        new Image(10, 'Funebreros'),
        new Image(11, 'Funebreros'),
        new Image(12, 'Funebreros'),
        new Image(13, 'Funebreros'),
        new Image(14, 'Funebreros'),
        new Image(15, 'Funebreros'),
        new Image(16, 'Funebreros'),
    ]
    }



    

    return res;
}





