const button = document.querySelectorAll('.button')
const steps = document.querySelectorAll('.multi-step')
const stepProgress = document.querySelector('.steps')

const inputName = document.querySelector('.box .name')
const inputEmail = document.querySelector('.box .email')
const inputChecked = document.querySelectorAll('input[type="checkbox"]')

const info = {
    topics: []
}

let formStepNum = 0
let checked = 0

const frase = 'se_oliveira@outlook.com'


button[0].addEventListener('click', (event) => {
    event.preventDefault()

    const regexEmail = /[\w.-]+@[\w-]+\.[\w-.]+/gi

    if(inputName.value == "" && inputEmail.value == "") {
        inputName.classList.add('error')
        inputEmail.classList.add('error')
    } else if(regexEmail.exec(inputEmail.value) == null){
        inputName.classList.add('error')
        inputEmail.classList.add('error')
    } else {
        inputName.classList.remove('error')
        inputEmail.classList.remove('error')
        formStepNum++
        info.name = inputName.value
        info.email = inputEmail.value
        
        stepProgress.dataset.content = `Step ${formStepNum + 1} of 3`
        
        updateFormSteps()
        updateStepCircle()
    }
})

button[1].addEventListener('click', (event) => {
    event.preventDefault()

    const name = document.querySelector('.__summary .name')
    const email = document.querySelector('.__summary .email')
    const ul = document.querySelector('.list')


    

    inputChecked.forEach((item) => {
        if(item.checked == true) {
            checked++

            info.topics.push(item.name)
        }
    })
    
    if(checked == false) {
        console.log('erro 2')
    } else {
        formStepNum++

        name.innerHTML = `<span>Name: </span>${info.name}`
        email.innerHTML = `<span>Email: </span>${info.email}`

        info.topics.forEach(item => {
        const li = document.createElement('li')

            li.innerText = item

            ul.appendChild(li)
        })

        stepProgress.dataset.content = `Step ${formStepNum + 1} of 3`

        updateFormSteps()
        updateStepCircle()
    }
})

button[2].addEventListener('click', (event) => {
    event.preventDefault()

    formStepNum++
    updateFormSteps()

    stepProgress.dataset.content = ''
})



function updateFormSteps() {
    steps.forEach(formStep => {
        formStep.classList.contains('active') && 
        formStep.classList.remove('active')
    })
    steps[formStepNum].classList.add('active')
}

function updateStepCircle() {
    const circles = stepProgress.querySelectorAll('.circle')

    

    circles.forEach(item => {
        item.classList.contains('ativo') && item.classList.remove('ativo')
    })

    circles[formStepNum].classList.add('ativo')
    circles[formStepNum].classList.add('color')
}

