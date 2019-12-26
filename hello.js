$(document).ready(function() {
	    $.ajax({
		            url: "http://52.188.138.178/api/customers/api/customers",
		            headers: { 'Ocp-Apim-Subscription-Key': '5489c2b18b3d4092bf3768fb36b99cc5;product=unlimited' }
		        }).then(function(data) {
				       $('.clientes').append(data[Math.floor(Math.random()*3)]);
				    });
});

$(document).ready(function() {
      $.ajax({
              url: "http://52.188.138.178/products/api/products",
                      headers: { 'Ocp-Apim-Subscription-Key': '5489c2b18b3d4092bf3768fb36b99cc5;product=unlimited' }
                          }).then(function(data) {
                                 $('.productos').append(data[Math.floor(Math.random()*3)]);
                                     });
                                     }); 
 
 
