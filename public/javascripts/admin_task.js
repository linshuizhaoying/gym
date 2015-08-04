var Tasks = function () {


    return {

        //main function to initiate the module
        initDashboardWidget: function () {
			$('.admin-task-list input[type="checkbox"]').change(function() {
				if ($(this).is(':checked')) { 
					$(this).parents('li').addClass("admin-task-done"); 
					$(this).parents('li').children('.admin-task-title').children('.admin-task-label').removeClass('label-danger');
					$(this).parents('li').children('.admin-task-title').children('.admin-task-label').addClass('label-success');
					$(this).parents('li').children('.admin-task-title').children('.admin-task-label').text('已完成');
					
				} else { 
					$(this).parents('li').removeClass("admin-task-done"); 
					$(this).parents('li').children('.admin-task-title').children('.admin-task-label').removeClass('label-success');
					$(this).parents('li').children('.admin-task-title').children('.admin-task-label').addClass('label-danger');
					$(this).parents('li').children('.admin-task-title').children('.admin-task-label').text("未完成");
				}
			}); 
        }

    };

}();