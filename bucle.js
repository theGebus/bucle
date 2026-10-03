//fucntion incremento

function numero(){
    for(let i=0; i <= 5; i++){
        console.log(i)
    }
}

//Function decremento

function menosNumero(){
    for(let i=5; i>=0 ; i--){
        console.log(i);
    }
}


//Listar pares

function pares(){
    for(let i=0; i<=20; i+=2){
        console.log(i);
    }
}

//Ejecutar variables


function ejecutar(cmpnumero){
    if(cmpnumero==1){
        numero();
    }else if (cmpnumero==2){
        menosNumero();
    }else if (cmpnumero==3){
        pares();
    }
}


