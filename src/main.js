import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User } from './agecalculator.js';
import { Life } from './agecalculator.js';

$(document).ready(function(){
  $("form.inputForm").submit(function(event){
    event.preventDefault();
    let ageInput = $("input#age").val();
    $('.form').hide();
    $('.earthResults').show();
    let newUser = new User(ageInput);
    $(".ageReturn").text(newUser.age);

    $("#btn-mercury").click(function(){
      $('.planetResults').show();
      $("#planet").text("Mercury");
      $("#planetAge").text(newUser.mercury);
    });
    $("#btn-venus").click(function(){
      $('.planetResults').show();
      $("#planet").text("Venus");
      $("#planetAge").text(newUser.venus);
    });
    $("#btn-mars").click(function(){
      $('.planetResults').show();
      $("#planet").text("Mars");
      $("#planetAge").text(newUser.mars);
    });
    $("#btn-jupiter").click(function(){
      $('.planetResults').show();
      $("#planet").text("Jupiter");
      $("#planetAge").text(newUser.jupiter);
    });
    $("form.lifeExpForm").submit(function(event){
      event.preventDefault();
      $('.results').hide();
    })
  });

});
//
// life expectancy = Life.lifeExp;
// years left = Life.yearsLeft;
//
// if (Life.yearsLeft <= 0){
//   $("#deadAlready").show();
// } else if (Life.yearsLeft<= 0){
//   $("#willDie").show();
// }
