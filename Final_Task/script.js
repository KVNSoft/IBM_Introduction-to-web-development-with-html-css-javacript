function compute()
{
    "use strict";

    var principal = document.getElementById("principal").value;
    const my_principal = parseInt(principal)
    
    //Validation for "Principal" input box. If the user enters zero or negative values, show an alert
    //After it return focus to the "Principal" input box
    if(isNaN(my_principal) || my_principal < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //Simple Maths for result - Interest
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    
    //Formating output
    document.getElementById("result").innerHTML = `<b>If</b> you deposit <mark><b>${principal}</b></mark>, \<br\> <b>at</b> an interest rate of \
    <mark><b>${rate}</b></mark>%.\<br\><b>You</b> will receive an amount of <mark><b>${interest}</b></mark>,\
    \<br\><b>in</b> the year <mark><b>${year}</b>\<br/></mark>`    
}

//Update Rate Function for Slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        