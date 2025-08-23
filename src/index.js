import _ from 'lodash';
import './styles.css';
import {renderAbout} from './tabs/about'
import {renderHome} from './tabs/home'
import {renderPrograms} from './tabs/program'


document.addEventListener('DOMContentLoaded', () => {
    const btnHome = document.querySelector('.home-js')
const btnAbout = document.querySelector('.about-js')
const btnPrograms = document.querySelector('.programs-js')


// clear content

function clearContent(){
    const div = document.getElementById('content')
    div.innerHTML = ''
}

// button events
btnHome.addEventListener('click', () => {
    clearContent()
    renderHome()
})

btnAbout.addEventListener('click', () => {
    clearContent()
    renderAbout()
})

btnPrograms.addEventListener('click', () => {
    clearContent()
    renderPrograms()
})

renderHome()
console.log('Well Hello There Fellow Berserkers')

})

