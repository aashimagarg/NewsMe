// Results button action
$(document).ready(function() 
{    $("#results").click(function() {                
	if (!$("input[@name=q1]:checked").val()) {            
		alert("You're not done yet!");        
	}        

	else {            
		var cat1name = "1";            
		var cat2name = "None";                  

		// Check what the user selected
		var cat1 = ($("input[@name=q1]:checked").val() != "a"); 
		var cat2 = (!cat1);
		var categories = [];                        

		// Push the incorrect question name or "None"
		if (cat1) { categories.push(cat1name) };           
		if (cat2) { categories.push(cat2name) };                        

		var catStr = 'You answered the question incorrectly: ' + categories.join(', ') + ''; 

		// Display text
		$("#categorylist").text(catStr);                        
		$("#categorylist").show("slow");            

		if (cat1) { $("#category1").show("slow"); };          
		if (cat2) { $("#category2").show("slow"); };
		{ $("#closing").show("slow"); };
	}
});});