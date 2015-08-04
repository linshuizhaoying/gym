$(document).ready(function(){

  $(".uploadMe1").click(function(){
		var formData = new FormData($("#frmUploadFile1")[0]);
		  $.ajax({
		    url: '/upload',
		    type: 'POST',
		    data: formData,
		    async: false,
		    cache: false,
		    contentType: false,
		    processData: false,
		    success: function(data){
		      if(data) {
		        alert("上传成功");
			      $("#imgurl1").val(data.slice(14,data.length));
		      } else {
		        alert("上传失败");
		      }

		    },
		    error: function(){
		      alert("与服务器通信发生错误");
		    }
		  });
		
		});
  $(".uploadMe2").click(function(){
		var formData = new FormData($("#frmUploadFile2")[0]);
		  $.ajax({
		    url: '/upload',
		    type: 'POST',
		    data: formData,
		    async: false,
		    cache: false,
		    contentType: false,
		    processData: false,
		    success: function(data){
		      if(data) {
		        alert("上传成功");
			      $("#imgurl2").val(data.slice(14,data.length));
		      } else {
		        alert("上传失败");
		      }

		    },
		    error: function(){
		      alert("与服务器通信发生错误");
		    }
		  });
		
		});
  $(".uploadMe3").click(function(){
		var formData = new FormData($("#frmUploadFile3")[0]);
		  $.ajax({
		    url: '/upload',
		    type: 'POST',
		    data: formData,
		    async: false,
		    cache: false,
		    contentType: false,
		    processData: false,
		    success: function(data){
		      if(data) {
		        alert("上传成功");
			      $("#imgurl3").val(data.slice(14,data.length));
		      } else {
		        alert("上传失败");
		      }

		    },
		    error: function(){
		      alert("与服务器通信发生错误");
		    }
		  });
		
		});
});