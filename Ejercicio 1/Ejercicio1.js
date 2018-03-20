function funcionEjecutar() {

    let peso = [
        parseInt(document.getElementById("numero1").value),
        parseInt(document.getElementById("numero2").value),
        parseInt(document.getElementById("numero3").value),
        parseInt(document.getElementById("numero4").value),
    ];

    let media;

    for (let i = 0; i < peso.length; i++) {

        total = peso[0] + peso[1] + peso[2] + peso[3];
        media = total / 4;
    }

    alert("La edad media es: " + media);

    for (let i = 0; i < peso.length; i++) {

        if (peso[0] > media){
            num0 = "Es mayor a la media"
        }else if (peso[0] < media){
            num0 = "Es menor a la media"
        }else if (peso[0] = media){
            num0 = "Es igual a la media"
        }

        if (peso[1] > media){
            num1 = "Es mayor a la media"
        }else if (peso[1] < media){
            num1 = "Es menor a la media"
        }else if (peso[1] = media){
            num1 = "Es igual a la media"
        }

        if (peso[2] > media){
            num2 = "Es mayor a la media"
        }else if (peso[2] < media){
            num2 = "Es menor a la media"
        }else if (peso[2] = media){
            num2 = "Es igual a la media"
        }

        if (peso[3] > media){
            num3 = "Es mayor a la media"
        }else if (peso[3] < media){
            num3 = "Es menor a la media"
        }else if (peso[3] = media){
            num3 = "Es igual a la media"
        }
    }

    alert("El numero 1 " + num0);
    alert("El numero 2 " + num1);
    alert("El numero 3 " + num2);
    alert("El numero 4 " + num3);

}