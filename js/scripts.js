jQuery(function($){
	/*--- Modals ---*/
	var modalSpeed = 200;
	var modals = $('.modals');

	modals.click(function(ev){
		$(this).hide(modalSpeed);
		$(this).children('.modals-box:visible').hide(modalSpeed);
	});

	$('.modals-box').click(function(ev){
		ev.stopPropagation();
	});

	$('.modals-box-close').click(function(ev){
		$(this).parent('.modals-box').hide(modalSpeed);
		modals.click();
	});

	// Sign up & Log in
	$('.header-login a').
	add('.tasks-add a').click(function(ev){
		ev.preventDefault();

		var modalId = $(this).attr('data-modal');

		switch(modalId){
			case 'login':
			case 'signup':
				modals.show(modalSpeed);
				$('#' + modalId + ':hidden').show(modalSpeed);
			break;
		}

		return false;
	});
	/*--- /Modals ---*/


	/*--- Task form ---*/
	$('.tasks-add [data-modal="add-task"]').click(function(ev){
		ev.preventDefault();
		//console.log('Форма додавання завдання');
		$(this).slideUp(modalSpeed);
		$(this).parents('.tasks-add').find('.tasks-add-form:hidden').slideDown(modalSpeed);
	});

	$('.tasks-add-form').submit(function(ev){
		var th = this;

		// Process the form fields values

		$(th).slideUp(modalSpeed);
		$(th).parents('.tasks-add').find('.tasks-add-success:hidden').slideDown(modalSpeed);

		setTimeout(function(){
			$(th).parents('.tasks-add').find('.tasks-add-success:visible').hide(0);
			$(th).parents('.tasks-add').find('[data-modal="add-task"]:hidden').slideDown(modalSpeed);
		}, 1000);

		return false;
	});
	/*--- /Task form ---*/


	/*--- Accordion ---*/
	$('.tasks-list').accordion();


	/*--- Datepicker ---*/
	$('.tasks-add-form [name="task_deadline"]').datepicker({});
});