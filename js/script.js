
$(document).ready(function(){
  $(".bg-fb").click(function(){
    $(".goleft").hide("slide", {direction: "left"}, 300);
    $(".goright").hide("slide", {direction: "right"}, 300);
    $(".fblogin").delay(300).show({ effect: "scale"});
  });
});
$(document).ready(function(){
  $(".bg-in").click(function(){
    $(".goleft").hide("slide", {direction: "left"}, 300);
    $(".goright").hide("slide", {direction: "right"}, 300);
    $(".inlogin").delay(400).show({ effect: "scale"});
  });
});
$(document).ready(function(){
  $(".bg-ws").click(function(){
    $(".goleft").hide("slide", {direction: "left"}, 300);
    $(".goright").hide("slide", {direction: "right"}, 300);
    $(".wslogin").delay(300).show({ effect: "scale"});
  });
});
$(document).ready(function(){
  $(".bg-rg").click(function(){
  	$(".descrip").text('İnternete bağlanabilmek için telefon numaranızı doğrulamanız gerekmektedir.')
    $(".goleft").hide("slide", {direction: "left"}, 300);
    $(".goright").hide("slide", {direction: "right"}, 300);
    $(".rglogin").delay(300).show({ effect: "scale"});
  });
});
$(document).ready(function(){
  $(".back").click(function(){
  	$(".descrip").text('Bu wi-fi ağını kullanmak için giriş yapmalısınız.')
  	$(".area").hide();
    $(".goleft").show("slide", {direction: "left"}, 500);
    $(".goright").show("slide", {direction: "right"}, 500);
  });
});
$(document).ready(function(){
  $("#ileri").click(function(){
  	$(".descrip").text('Telefonunuza gelen doğrulama SMS-i girin.')
  	$(".area").hide();
    $(".control").show("slide", {direction: "right"}, 300);
    var counter = 4;
	var interval = setInterval(function() {
	    counter--;
	    // Display 'counter' wherever you want to display it.
	    if (counter <= 0) {
	     		clearInterval(interval);
	      	$('#timer').html("<span>Süreniz doldu.</span>");
	        $('#kaydol').hide();
	        $('#tekrar').show();
	        return;
	    }else{
	    	$('#time').text(counter);
	    }
	}, 1000);
 	});
});
$(document).ready(function(){
  $(".back-rg").click(function(){
  	$(".descrip").text('İnternete bağlanabilmek için telefon numaranızı doğrulamanız gerekmektedir.')
    $(".control").hide("slide", {direction: "right"}, 300);
    $(".rglogin").delay(300).show("slide", {direction: "left"}, 300);
  	$('#timer').html("Kalan süre: <span id=\"time\">30</span>");
    $('#kaydol').show();
    $('#tekrar').hide();
  });
});