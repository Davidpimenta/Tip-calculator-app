var price = document.getElementById('price')
var people = document.getElementById('people')
var percent = document.querySelectorAll('.radio')
var teste = document.getElementById('tip-result')
var verif = false
var reset = document.getElementById('reset')
setInterval(function(){
    reset.addEventListener('click', function reseta(){
        reset.className = 'reset-off'
        people.value = ''
        custom.value = ''
        price.value = ''
        verif = false
        var tip_amount = document.getElementById('tip-result')
        var total = document.getElementById('total-result')
        total.innerText = '$0.00'
        tip_amount.innerText = '$0.00'

    })

    if(people.value == ''){
        verif = false
    }

    if(people.value !== ''){
        verif = true
    }
    if(verif == false){} else {
        
        reset.className = 'reset-on'

        if(people.value == 0){
            verif = true
            var errotext = document.getElementById('erro')
            errotext.style.display = 'block'
            var divpeople = document.getElementById('div-people')
            divpeople.id = 'div-erro'

        } else {
            
            try{
                var divpeople = document.getElementById('div-erro')
                divpeople.id = 'div-people'
            } finally {
                var errotext = document.getElementById('erro')
                errotext.style.display = 'none'
                percent.forEach((e) => {
                var custom = document.getElementById('custom')
                    if(custom.value !== ''){
                        var tip_amount = document.getElementById('tip-result')
                            tip_amount.innerText = (price.value * custom.value / 100) / people.value
                            var total = document.getElementById('total-result')
                            total.innerText = price.value * custom.value / 100
                    } else {

                        if(e.id == 'radio-percent1' && e.checked){
                            var tip_amount = document.getElementById('tip-result')
                            tip_amount.innerText = (price.value * 5 / 100) / people.value
                            var total = document.getElementById('total-result')
                            total.innerText = price.value * 5 / 100
                        }

                        if(e.id == 'radio-percent2' && e.checked){
                            var tip_amount = document.getElementById('tip-result')
                            tip_amount.innerText = (price.value * 10 / 100) / people.value
                            var total = document.getElementById('total-result')
                            total.innerText = price.value * 10 / 100
                        }

                        if(e.id == 'radio-percent3' && e.checked){
                            var tip_amount = document.getElementById('tip-result')
                            tip_amount.innerText = (price.value * 15 / 100) / people.value
                            var total = document.getElementById('total-result')
                            total.innerText = price.value * 15 / 100
                        }

                        if(e.id == 'radio-percent4' && e.checked){
                            var tip_amount = document.getElementById('tip-result')
                            tip_amount.innerText = (price.value * 25 / 100) / people.value
                            var total = document.getElementById('total-result')
                            total.innerText = price.value * 25 / 100
                        }

                        if(e.id == 'radio-percent5' && e.checked){
                            var tip_amount = document.getElementById('tip-result')
                            tip_amount.innerText = (price.value * 50 / 100) / people.value
                            var total = document.getElementById('total-result')
                            total.innerText = price.value * 50 / 100
                        }
                    }
                })

            }
        }
    }
  }, 1000)

