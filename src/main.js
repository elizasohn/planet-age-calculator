import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User } from './agecalculator.js';

$(document).ready(function(){
  $("form.inputForm").submit(function(event){
    event.preventDefault();
    let ageInput = $("input#age").val();
    $('.form').hide();
    $('.results').show();
    let newUser = new User(ageInput);
    $(".ageReturn").text(newUser.age);

    $("#btn-mercury").click(function(){
      $("#planet").text("Mercury");
      $("#planetAge").text(newUser.mercury);
    });
    $("#btn-venus").click(function(){
      $("#planet").text("Venus");
      $("#planetAge").text(newUser.venus);
    });
    $("#btn-mars").click(function(){
      $("#planet").text("Mars");
      $("#planetAge").text(newUser.mars);
    });
    $("#btn-jupiter").click(function(){
      $("#planet").text("Jupiter");
      $("#planetAge").text(newUser.jupiter);
    });

  });
});
