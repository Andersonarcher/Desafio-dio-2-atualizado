let vitorias=100
let derrotas=16
let nivel=""
function calcular(vitorias,derrotas){
  let calculo=vitorias-derrotas
   ;
                                    
                                 
           //classificaçao por nivel do heroi e mensagem:o heroi tem de saldo:*(calculo/vitorias)* e esta no nivel *(nivel)*
                  if(calculo<=10){nivel="ferro" ;console.log("o heroi tem de saldo "+ calculo+" está no nivel "+nivel)}
         else if(calculo>=11&&calculo<=20){nivel="bronze";console.log("o heroi tem de saldo "+ calculo+" e está no nivel "+nivel)}
         else if(calculo>=21&&calculo<=50){nivel="prata";console.log("o heroi tem de saldo "+ calculo+" e está no nivel "+nivel)}                        
        else if(calculo>=51&&calculo<=80){nivel="ouro";console.log("o heroi tem de saldo "+ calculo+"  e está no nivel "+nivel )}
         else if(calculo>=81&&calculo<=90){nivel="diamante";console.log("o heroi tem de saldo "+ calculo+" e está no nivel "+nivel)}
         else if(calculo>=91&&calculo<=100){nivel="lendario";console.log("o heroi tem de saldo "+ calculo+ " e está no nivel "+nivel)}
          else {nivel="imortal";console.log("o heroi tem de saldo "+ calculo+" e está no nivel "+nivel)} }
                
      
           
                                  
 

