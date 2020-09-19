import $ from 'jquery'
import './index.css'
const $square = $('#app3 .square')

$square.on('click', ()=>{
  $square.toggleClass('active')
})