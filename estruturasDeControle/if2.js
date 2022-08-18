function numero(num){
    if(num>=7)
        console.log(num)
    // console.log('final') não faz parte do if
    console.log('final')    
}

numero(6)
numero(8)

function test2(num){
    if(num>=7);// cuidado com ;, não usar com as estruturas de controle
    console.log(num)
}

test2(6)
test2(8)