$(document).ready(function(){

	$('#un').on('click', function(event) {
		$(".p").hide();
		$("#ac").show();
		 event.preventDefault();
	});

	$('#deux').on('click', function(event) {
		$("#part").show();
		$("#ac").hide();
		$("#ser").hide();
		 event.preventDefault();

	});

	$('#trois').on('click', function(event) {
		$("#ser").show();
		$("#ac").hide();
		$("#part").hide();
		 event.preventDefault();

	});

	$('#appliquer').on('click', function(event) {
		 $long = $('#lo').val();
		 $lar = $('#la').val();
		if (!$long ||  $lar == '') {
			$('#p1').text('Inserez votre valeur dans le champ vide');
			$('#p1').css({'color':'red','font-size':'1.2em'});
		}

		else{
		$('#p1').hide();
		 $("#img").animate({
		 	width: $long,height:$lar
		 	},5000);
		  event.preventDefault();
		  }
		});

		$("li").each(function(){
			$(this).click(function(){
       	 $("li").removeClass("active");
       	 $(this).addClass("active");
       	});
       });
		
	});
