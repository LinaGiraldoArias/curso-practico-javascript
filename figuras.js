 // Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado) {
  return lado * 4;
}


//console.log("El perimetro cuadrado es: " + perimetroCuadrado);

function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado);
console.groupEnd();

// Código del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
//     );
    
    // const alturaTriangulos = 6;
    // console.log("La altura del triangulo es: " + alturaTriangulo);

    function perimetroTriangulo(lado1, lado2, base) {
       return lado1 + lado2 + base;
    }
    //console.log("El perimetro del triangulo es: " + perimetroTriangulo);


    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }


    console.log("El area del triangulo es: " + areaTriangulo);

    console.groupEnd();

    // Código del circulo 
    console.group("Circulos");
     // radio
     //const radioCirculo = 4;
     //console.log("El radio del circulo es: " + radioCirculo)

     //Diametro
     function diametroCirculo(radio) {
       return radio * 2;
    }
     

     //PI
     const PI = Math.PI;
     console.log("PI es: " + PI)

     //circunferencia
     function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio)
        return diametro * PI;
     }
   ;
    // Area
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }

    console.groupEnd();


// Aqui interactuamos con HTML 
function calcularPerimetroCuadrado() {
   const input = document.getElementById("InputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);   
}

// triangulos

function calcularPerimetroTriangulo() {
  const input = document.getElementById("InputTriangulo");
  const value = input.value;

  const perimetro = perimetroTriangulo(value);
  alert(perimetro);
}
function calcularAreaTriangulo() {
 const input = document.getElementById("InputTriangulo");
 const value = input.value;

 const area = areaTriangulo(value);
 alert(area);   
}
