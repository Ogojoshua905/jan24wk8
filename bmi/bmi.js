const paras = document.querySelectorAll('p')
const inputs = document.querySelectorAll('input')

function bmiStatus(){
    const weight = inputs[0].value * 1
    const height = inputs[1].value * 1

    paras[0].innerHTML = '<strong>BMI Result</strong>' + bmi + 'kgm<sup>-2</sup>'

    paras[1].innerHTML = bmi > 30 ? '<strong>BMI Status:</strong> Obesity' :
    bmi > 25 ? '<strong>BMI Status: </strong> Healthy Weight': '<strong>BMI </strong>'
}