// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 
	$('.popupblur').css('filter','blur(5px)');
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	$('.popupblur').css('filter','none');
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		$('.popupblur').css('filter','none');

		
	}
});

// открыть по таймеру 
// $(window).on('load', function () { 
// 	setTimeout(function(){
// 		if($('.js-overlay-campaign').hasClass('disabled')) {
// 			return false;
// 		} else {
			
// 			$(".js-overlay-campaign").fadeIn();
// 		}
// 	}, 5000);
// });

