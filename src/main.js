import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("form.inputForm").submit(function(event){
    event.preventDefault();
    let ageInput = $("input#age").val();
  });
});
