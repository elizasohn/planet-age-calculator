import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User } from './agecalculator.js';

$(document).ready(function(){
  $("form.inputForm").submit(function(event){
    event.preventDefault();
    let ageInput = $("input#age").val();
    // console.log(ageInput + "hi");
    // let ageInput = parseInt($("input#age").val());
    // console.log(ageInput);
    $('.form').hide();
    $('.results').show();
    //     console.log(ageInput);
    let newUser = new User(ageInput);
    // console.log(newUser);
    $(".ageReturn").text(newUser.age);
  });
});
