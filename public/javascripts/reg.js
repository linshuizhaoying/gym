$(document).ready(function(){
    var regname,regpass,repeatpass;
    $(".regme").click(function(){
        regname=$(".regname").val();
        regpass=$(".regpass").val();
        regemail=$(".regemail").val();
        repeatpass= $(".repeatpass").val();
        /*
        * Perform some validation here.
        */
        $.get("/signup/" + regname + "/" + regpass + "/" + regemail,function(data){       
            if(data == 'done')          
            {
               window.location.href="/signin";
            }else{
					    var $alert = $("<div class='alert alert-danger' > ").text(data);
					    $('.alerterror').append($alert);
              setTimeout(window.location.href="/signup",3000);
            }
        });
    });
});