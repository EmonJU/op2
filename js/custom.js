$(window).on('load', function(){

	"use strict";
 


	
	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */
	
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 100) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});
 
	
	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */
	
	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });

	
	/* ========================================================== */
	/*   Navigation Color                                         */
	/* ========================================================== */
	
	$('#navbar-collapse-02').onePageNav({
		filter: ':not(.external)'
	});


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".nav li a").on('click', function(e) {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -70}, 1000);
			return false;
		
	});


	/* ========================================================== */
	/*   Newsletter                                               */
	/* ========================================================== */
	
	$('.newsletter_box .newsletter_form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.newsletter_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	});	
	

	/* ========================================================== */
	/*   Register                                                 */
	/* ========================================================== */
	
	$('#register-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="register_names"]').val(),
					'phone':$('input[name="register_phone"]').val(),
					'email':$('input[name="register_email"]').val(),
					'ticket':$('select[name="register_ticket"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.register_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	})
	
});	
	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */
	


	$("#contactForm").on("submit", function (event) {
		
		event.preventDefault();
		
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();

		$.ajax({
			type: "POST",
			url: "/php/contact.php",
			data: "name=" + name + "&email=" + email + "&message=" + message,
			dataType    : 'json', 
			success : function(data){
				if ( ! data.success){
					$("#errormsg").html(data.msg);
					$("#errormsg").show();
				} else {
					
					$("#contactForm")[0].reset();
					$("#contactForm").hide();
					$("p.contact_success_box").html(data.msg);
					$("p.contact_success_box").show();
				}
			}
		});
	});






	



	/* ========================================================== */
	/*   Animated-Features                                        */
	/* ========================================================== */
 
 	$('.visage-feature .feature-icon .leaf').on('click',function()
 		{if($(this).parents('.visage-feature').hasClass('feature-show'))
 			{$(this).parents('.visage-feature').removeClass('feature-show')}
 		else {$(this).parents('.visage-feature').addClass('feature-show')}});


 	/* ========================================================== */
	/*   Tabs                                                     */
	/* ========================================================== */

$(".nav li a.fb").on('click', function() {
	window.open('//www.facebook.com/onlineprospect', '_blank');
});	
	
 $(".nav li a.contact").on('click', function() {
	window.open('/contact/', '_self');
});		

 $(".nav li a.login").on('click', function() {
	window.open('/loginform/', '_self');
});	