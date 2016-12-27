$(document).ready(function() 
{    $("#results").click(function() {                

if (!$("input[@name=q1]:checked").val()) {            
alert("You're not done yet!");        
}        

else {            
var cat1name = "1";            
var cat2name = "None";            
            

var cat1 = ($("input[@name=q1]:checked").val() != "a"); 

var cat2 = (!cat1); var categories = [];                        

if (cat1) { categories.push(cat1name) };           
if (cat2) { categories.push(cat2name) };                        

var catStr = 'You answered the question incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(catStr);                        
$("#categorylist").show("slow");            

if (cat1) { $("#category1").show("slow"); };          
if (cat2) { $("#category11").show("slow"); };
{ $("#closing").show("slow"); };
}
});});