


$('.collapse').on('shown.bs.collapse', function (e) {
    $grid.isotope('layout');
})

// init Isotope

var $grid = $('.grid').isotope({
  layoutMode: 'fitRows'// options
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ 
        filter: filterValue 
    });
    return false;
});

   

//collapse accordion upon port item selection
$('.port-item').click(function(){
        $('.collapse').collapse('hide');
    });
   
  //initialize lightbox
 $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });



	// skills chart
	$(document).ready(function(e) {
		$('.chart').easyPieChart({
			barColor : '#007bff',
			trackColor: '#000000',
			scaleColor: '#000000',
			scaleColor: false,
			lineWidth: '5',
			lineCap: 'butt',
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	});






	



