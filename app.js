(function(){
	countdown={
		reset:0,

		timer:10,
		interval:null,
		init:function(){
			countdown.listeners();
		},
		listeners:function(){
			$("#Start").on("click",countdown.start);
			console.log("jdn");
			
			$("#Stop").on("click",countdown.stop);
			
			$("#Reset").on("click",countdown.reset);
			
		},
		start:function(){
			countdown.interval=setInterval(countdown.decrement,1000);
		},
		
		stop:function(){
			
			clearInterval(countdown.interval);
		     
		},
		decrement:function(){
			countdown.timer--;
			countdown.afficher();
			if (countdown.timer == 0){
				clearInterval(countdown.interval);
			}

		},
		
		
		afficher:function(){
			var minutes= parseInt(countdown.timer/60,10);
			var secondes=countdown.timer-minutes*60;
			$("#minutes").text(minutes);
			$("#secondes").text(secondes);

		},
	};
	countdown.init();
})();