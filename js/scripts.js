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
	$('.header-login a').click(function(ev){
		ev.preventDefault();

		var modalId = $(this).attr('data-modal');

		modals.show(modalSpeed);
		$('#' + modalId + ':hidden').show(modalSpeed);

		return false;
	});
});