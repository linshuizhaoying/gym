var MenuSelect = function () {
    return {

        //main function to initiate the module
        initSelect: function () {
			    $('.menuselect1').click(function() {
 						$('.menu1').removeClass("hide");
 						$('.menu2').addClass('hide');
 						$('.menu3').addClass('hide');
 						$('.menu4').addClass('hide');
 						
 						$(this).addClass('active');
 						$('.menuselect2').removeClass('active');
 						$('.menuselect3').removeClass('active');
 						$('.menuselect4').removeClass('active');
 						
			    }); 
			    $('.menuselect2').click(function() {
 						$('.menu2').removeClass("hide");
 						$('.menu1').addClass('hide');
 						$('.menu3').addClass('hide');
 						$('.menu4').addClass('hide');
 						
 						$(this).addClass('active');
 						$('.menuselect1').removeClass('active');
 						$('.menuselect3').removeClass('active');
 						$('.menuselect4').removeClass('active');
			    }); 
			    $('.menuselect3').click(function() {
 						$('.menu3').removeClass("hide");
 						$('.menu2').addClass('hide');
 						$('.menu1').addClass('hide');
 						$('.menu4').addClass('hide');
 						
 						$(this).addClass('active');
 						$('.menuselect2').removeClass('active');
 						$('.menuselect1').removeClass('active');
 						$('.menuselect4').removeClass('active');
			    }); 
			    $('.menuselect4').click(function() {
 						$('.menu4').removeClass("hide");
 						$('.menu2').addClass('hide');
 						$('.menu3').addClass('hide');
 						$('.menu1').addClass('hide');
 						
 						$(this).addClass('active');
 						$('.menuselect2').removeClass('active');
 						$('.menuselect3').removeClass('active');
 						$('.menuselect1').removeClass('active');
			    }); 
    }

   };
}();