$(document).ready(function(){

  $(".addnewtrain").click(function(){
  	  
  	  var title = $("#traintitle").val();
  	  var desc = $("#traindesc").val();
  	  var junior_num = $("#trainjunior_num").val();
  	  var junior_rate = $("#trainjunior_rate").val();
   	var middle_num = $("#trainmiddle_num").val();
  	  var middle_rate = $("#trainmiddle_rate").val();
  	  var advanced_num = $("#trainadvanced_num").val();
    var advanced_rate = $("#trainadvanced_rate").val();
    var img1 = $("#imgurl1").val();
    var img2 = $("#imgurl2").val();
    var img3 = $("#imgurl3").val();
  	  console.log("title:" + title + "\n"+
  	  							"desc:" + desc + "\n"+
  	  							"junior_num:" + junior_num + "\n"+
  	  							"junior_rate:" + junior_rate + "\n"+
  	  							"middle_num:" + middle_num + "\n"+
  	  							"middle_rate:" + middle_rate + "\n"+
  	  							"advanced_num:" + advanced_num + "\n"+
  	  							"advanced_rate:" + advanced_rate + "\n"+
  	  							"img1:" + img1 + "\n"+
  	  							"img2:" + img2 + "\n"+
  	  							"img3:" + img3 + "\n"
  	  						);

	  $.post("/addnewtrain",{title:title,
	  												desc:desc,
	  												junior_num:junior_num,
	  												junior_rate:junior_rate,
	  												middle_num:middle_num,
	  												middle_rate:middle_rate,
	  												advanced_num:advanced_num,
	  												advanced_rate:advanced_rate,
	  												img1:img1,
	  												img2:img2,
	  												img3:img3	
	  										},
	  	  function(result){
	      console.log(result);
	      if(result=="done"){
	      	  window.location.href="/linshui";
	      }
	    });

  });
  
  
});