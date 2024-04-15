//atribuir função com variavel pra vitoria e derrota do heroi e a o calculo da diferença 
//ex.:vitorias=100 e derrotas=16
let nivel=""
function calcular(vitorias,derrotas){
  let calculo=vitorias-derrotas
   ;
                                    
                                 
  //classificaçao por nivel do heroi e mensagem:o heroi tem de saldo:*(calculo/vitorias)* e esta no nivel *(nivel)*
                  if(calculo<=10){nivel="ferro" }
         else if(calculo>=11&&calculo<=20){nivel="bronze"}
         else if(calculo>=21&&calculo<=50){nivel="prata"}                        
        else if(calculo>=51&&calculo<=80){nivel="ouro"}
         else if(calculo>=81&&calculo<=90){nivel="diamante"}
         else if(calculo>=91&&calculo<=100){nivel="lendario"}
          else {nivel="imortal"
               }
//mensagem oficial
  console.log("o heroi tem de saldo "+ calculo+" e está no nivel "+nivel)}
   calcular(100,16)
                
           
                                  
 

