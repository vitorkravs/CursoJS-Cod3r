const qualquer = []
for (var i = 0; i < 10; i++){
    qualquer.push(function(){
        console.log(i)
    })
}

qualquer[2]()
qualquer[8]()
