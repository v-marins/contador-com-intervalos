function contar() {

    var txtstart = document.getElementById("txtstart")
    var txtend = document.getElementById("txtend")
    var txtpasso = document.getElementById("txtpasso")
    var res = document.querySelector("div#res")
    var txt = ""

    var start = Number(txtstart.value)
    var end = Number(txtend.value)
    var passo = Number(txtpasso.value)
    

    if (txtstart.value.length == 0 || txtend.value.length == 0 || txtpasso.value.length == 0) {
        alert("Preencha todos os campos para continuar.")
    } else if (passo != 0) {
        if (start < end && start != end) {

            for (var i = start; i <= end; i += passo) {

                txt += ` ${i} ➡️`
            }
        } else if (start > end && start != end) {

            for (var i = start; i >= end; i -= passo) {

                txt += ` ${i} ➡️`
            }
        } else {
            alert("Início e Fim precisam de valores diferentes.")
        }
    } else {

        alert("Passo zero: Será considerado o valor 1.")

        if (start < end && start != end) {
            for (var i = start; i <= end; i++) {
                txt += ` ${i} ➡️`
            }
        } else if(start > end && start != end){
            for(var i = start; i >= end; i--){
                txt += ` ${i} ➡️`
            }
        } else {
            alert("Início e Fim precisam de valores diferentes.")
        }

    }
        if(txt.length != 0){
        res.innerHTML = `Contando:<br> ${txt} 🏁`
        }

}