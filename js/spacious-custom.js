jQuery( document ).ready( function () {
	jQuery( '#scroll-up' ).hide();
	jQuery( function () {
		jQuery( window ).scroll( function () {
			if ( jQuery( this ).scrollTop() > 1000 ) {
				jQuery( '#scroll-up').fadeIn();
			} else {
				jQuery( '#scroll-up' ).fadeOut();
			}
		});
		jQuery( 'a#scroll-up' ).click( function () {
			jQuery( 'body, html' ).animate({
				scrollTop: 0
			}, 800 );
			return false;
		});
	});

	jQuery('.menu-primary-container .menu-item-has-children').append('<span class="sub-toggle"> <span class="genericon genericon-rightarrow"></span> </span>');

	jQuery('.menu-primary-container .sub-toggle').click(function() {
		jQuery(this).parent('.menu-item-has-children').children('ul.sub-menu').first().slideToggle('1000');
		jQuery(this).children('.genericon').first().toggleClass('genericon-downarrow');
		jQuery(this).children('.genericon').toggleClass('genericon-rightarrow');
	});
});
