document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.querySelector('input[type="text"]')
    const idadeInput = document.querySelector('input[type="number"]')
    const dataInput = document.querySelector('input[type="date"]')

    nomeInput.addEventListener("change", function (e) {
        if (e.target.value.trim() === "") {
            e.target.setCustomValidity("O campo nome não pode estar vazio.")
        }else if (e.target.value.length > 250){
            e.target.setCustomValidity("O campo nome não pode ter mais de 250 caracteres.")
        } else{
            e.target.setCustomValidity("")
        }
    })

    idadeInput.addEventListener("change", function(e){
        const idade = parseInt(e.target.value);
        if (isNaN(idade)) {
            e.target.setCustomValidity('Digite uma idade válida');
        }else if (e.target.value < 17 || e.target.value > 100){
            e.target.setCustomValidity("A idade deve ser entre 17 e 100 anos.")
        } else {
            e.target.setCustomValidity("")
            if (dataInput.value) dataInput.dispatchEvent(new Event('change'))
        }

    })

    dataInput.addEventListener("change", function(e){
        const idade = parseInt(idadeInput.value)
        const dataCurso = new Date(e.target.value)
        const anoNascimento = new Date().getFullYear() - idade

        if (dataCurso.getFullYear() <= anoNascimento) {
            e.target.setCustomValidity(`O curso deve iniciar após ${anoNascimento} (ano de nascimento)`)
        } else {
            e.target.setCustomValidity('')
        }
    })

})
