const paras = document.querySelectorAll('p')
const inputs = document.querySelectorAll('input')

function bmiStatus(){
    const weight = inputs[0].value * 1
    const height = inputs[1].value /100

    const bmi = (weight / height**2).toFixed(2)

    paras[0].innerHTML = '<strong>BMI Result: </strong>' + bmi + 'kgm<sup>-2</sup>'

    paras[1].innerHTML = bmi > 30 ? '<strong>BMI Status: </strong> Obesity' :
    bmi > 25 ? '<strong>BMI Status: </strong> Overweight' :
    bmi >=18.5? '<strong>BMI Status: </strong> Healthy Weight': '<strong>BMI Status: </strong> Under Weight'

    paras[2].innerHTML = bmi > 30 ? '<strong>BMI Recommendation: </strong> Reducing calories and practicing healthier eating habits' :
     bmi > 25 ? '<strong>BMI Recommendation: </strong> Choosing healthier foods (whole grains, fruits and vegetables, healthy fats and protein sources)  exercise regularly.' : 
     bmi >= 18.5 ? '<strong>Keep Up the Good Work and don\'\t desist from your current eating habit</strong>' :
     '<strong>BMI Recommendation: </strong>  eat a variety of foods that give you the nutrition you need.'
}

inputs[1].addEventListener('change', bmiStatus )