var tabo = document.getElementById('taboada')

var res = document.getElementById('tab')

function cont(){
    res.innerHTML = ''

    if(tabo.value.length == 0){
        alert('por favor, digite um numero')
        res.innerHTML = ''
    }else{

        for(var i = 1 ; i <= 10 ; i++ ){

            var t = Number(tabo.value)
            var c = Number(i) 
            var r = Number(t*c)

            res.innerHTML += `<option id="id${i}"> ${t} x ${i} = ${r} </option>`
        }
    }
}
