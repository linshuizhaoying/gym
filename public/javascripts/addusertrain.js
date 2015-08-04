$(document).ready(function(){

  $(".addusertrain").click(function(){
  	  
  	  var title = $(".user_traintitle").val();
  	  var week = $(".user_trainweek").val();
  	  var level = $('.user_trainlevel').val();
  	  console.log("title:" + title + "\n"+
  	  							"week:" + week + "\n"+
  	  							"level:" + level + "\n"

  	  						);

	  $.post("/addusertrain",{title:title,
	  												week:week,
	  												level:level
	  										},
	  	  function(result){
	      console.log(result);
	      if(result){
	      	console.log(result.split(","));
	      	var temp  = result.split(",");
	      	  var $tbody = $('.appendtr');
	      	  var $tr =  $("<tr>");
	      	  var $td1 = $("<td>").text(temp[0]);
	      	  var $td2 = $("<td>").text(temp[1]);
	      	  var $td3 = $("<td>").text(temp[2] + "," + temp[3]);
					var $td4 = $("<td>").text(temp[4] + "," + temp[5]);
					var $th =  $("<th>").addClass("btn btn-danger");
					var $a =   $("<a>").attr({"style":"color:white","href":"/deletemytrain/"+temp[0]+"/"+temp[1]}).text("删除");
					$th.append($a);
					$tr.append($td1);
					$tr.append($td2);
					$tr.append($td3);
					$tr.append($td4);
					$tr.append($th);
					$tbody.append($tr);
					
	      }
	    });

  });
  
  
});