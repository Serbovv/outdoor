document.addEventListener('DOMContentLoaded', function(){
    $(function() {
		$('#contact-form, #frm02-form').submit(function() {
			var name = $(this).find('input[name="NamePhoneContactForm[name]"]').val(),
				phone = $(this).find('input[name="NamePhoneContactForm[phone]"]').val();
			// if phone and name aren't empty
			if(phone.replace(/\D+/g,"").length > 4){
				
				_rc('send', 'order', {
					'name': name,
					'phone': phone,
					'itemId': 694,
					'orderMethod': 'feedback',
					'callback': function(success, response) {
						if (success) {
							alert('Спасибо, ваша заявка принята!'); 
						} else {
							alert('К сожалению, не удалось отправить заявку.');
						}
					}
				});
				
			}
			return false;
		})
	});
});