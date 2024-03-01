const tituloCurso = document.getElementById('titulo-curso')
const card1 = document.getElementById('card-1')
const card2 = document.getElementById('card-2')
const card3 = document.getElementById('card-3')
const card4 = document.getElementById('card-4')
const card5 = document.getElementById('card-5')

const informaticaCurso = function() {
    tituloCurso.textContent = 'Informática'

    card1.childNodes[1].src = "/img/informatica_icon.jpg"
    card1.childNodes[3].childNodes[1].textContent = 'Excel desde 0'


    card2.childNodes[1].src = "/img/informatica_icon.jpg"
    card2.childNodes[3].childNodes[1].textContent = 'HTML para principiantes'

    card3.childNodes[1].src = "/img/informatica_icon.jpg"
    card3.childNodes[3].childNodes[1].textContent = 'Introduccion a la programación'

    card4.childNodes[1].src = "/img/informatica_icon.jpg"
    card4.childNodes[3].childNodes[1].textContent = 'Redes e Internet'

    card5.childNodes[1].childNodes[1].childNodes[1].src = "/img/informatica_icon.jpg"
    card5.childNodes[1].childNodes[3].childNodes[1].childNodes[1].textContent = "Analista de Datos"
}

const desarrolloPersonalCurso = function() {
    tituloCurso.textContent = 'Desarrollo Personal'

    card1.childNodes[1].src = "https://img.freepik.com/premium-vector/self-development-concept-idea-personal-growth_277904-3837.jpg"
    card1.childNodes[3].childNodes[1].textContent = 'Hábitos Atómicos'


    card2.childNodes[1].src = "https://img.freepik.com/premium-vector/self-development-concept-idea-personal-growth_277904-3837.jpg"
    card2.childNodes[3].childNodes[1].textContent = '¿Cómo estudiar eficazmente?'

    card3.childNodes[1].src = "https://img.freepik.com/premium-vector/self-development-concept-idea-personal-growth_277904-3837.jpg"
    card3.childNodes[3].childNodes[1].textContent = 'Curso de inteligencia emocional'

    card4.childNodes[1].src = "https://img.freepik.com/premium-vector/self-development-concept-idea-personal-growth_277904-3837.jpg"
    card4.childNodes[3].childNodes[1].textContent = '¿Cómo ser mejor persona?'

    card5.childNodes[1].childNodes[1].childNodes[1].src = "https://img.freepik.com/premium-vector/self-development-concept-idea-personal-growth_277904-3837.jpg"
    card5.childNodes[1].childNodes[3].childNodes[1].childNodes[1].textContent = "Curso de crecimiento personal definitivo"
}

const test = () => {console.log('Hello World !');}

test()