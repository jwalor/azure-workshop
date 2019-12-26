$(document).ready(function() {
	    $.ajax({
		            url: "http://52.188.138.178/customer/api/customers",
		            headers: { 'Ocp-Apim-Subscription-Key': '4f6bce226bea4eaf9bf6f2ecb2bb1916;product=unlimited' }
		        }).then(function(data) {
				       $('.clientes').append(data[Math.floor(Math.random()*3)]);
				    });
});

$(document).ready(function() {
      $.ajax({
              url: "http://52.188.138.178/products/api/products",
                      headers: { 'Ocp-Apim-Subscription-Key': '9db32e4fed844af0aac4537ed2f784c8;product=unlimited' }
                          }).then(function(data) {
                                 $('.productos').append(data[Math.floor(Math.random()*3)]);
                                     });
                                     }); 
 
 
