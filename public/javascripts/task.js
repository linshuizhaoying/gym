var Tasks = function () {


    return {

        //main function to initiate the module
        initDashboardWidget: function () {
			$('.task-list input[type="checkbox"]').change(function() {
				if ($(this).is(':checked')) { 
					$(this).parents('li').addClass("task-done"); 
					$(this).parents('li').children('.task-title').children('.task-label').removeClass('label-danger');
					$(this).parents('li').children('.task-title').children('.task-label').addClass('label-success');
					$(this).parents('li').children('.task-title').children('.task-label').text('已完成');
					
				} else { 
					$(this).parents('li').removeClass("task-done"); 
					$(this).parents('li').children('.task-title').children('.task-label').removeClass('label-success');
					$(this).parents('li').children('.task-title').children('.task-label').addClass('label-danger');
					$(this).parents('li').children('.task-title').children('.task-label').text("未完成");
				}
			}); 
        }

    };

}();