import _ from 'lodash';
import './styles.css';
import {renderAbout} from './tabs/about'
import {renderHome} from './tabs/home'
import {renderPrograms} from './tabs/program'

const btnHome = document.querySelector('.home-js')
const btnAbout = document.querySelector('.about-js')
const btnPrograms = document.querySelector('.programs-js')

btnHome.addEventListener('click', () => {
    
    renderHome()
})

btnAbout.addEventListener('click', () => {
    renderAbout()
})

btnPrograms.addEventListener('click', () => {
    renderPrograms()
})

console.log('Well Hello There Fellow Berserkers')