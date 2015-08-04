$(document).ready(function(){
    var name,pass;
    $(".loginme").click(function(){
        name=$(".loginname").val();
        pass=$(".loginpass").val();
        /*
        * Perform some validation here.
        */
        $.get("/signin/" + name + "/" + pass,function(data){       
        	  console.log("LoginData:" + data);
            if(data == 'done')          
            {
                window.location.href="/user";
            }else{
					    var $alert = $("<div class='alert alert-danger' > ").text(data);
					    $('.alertrow').append($alert);
              setTimeout(window.location.href="/signin",3000);
            }
        });
    });
});