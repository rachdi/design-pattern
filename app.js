(function(){
	countdown={
		

		timer:null,
		s:null,
		m:null,
		interval:null,
		init:function(){
			countdown.listeners();
		},
		listeners:function(){
			$("#Start").on("click",this.start);
			$("#Stop").on("click",this.stop);
			$("#Reset").on("click",this.reset);
			$("#modifier").on("click",countdown.recupere);
//
			
		},
		start:function(){
			console.log("hello");
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
		reset:function(){
			
				countdown.timer=100;
			
		},
		recupere:function(){
			countdown.s=parseInt($('#s').val(),10);
			countdown.m=parseInt($('#m').val(),10);
			countdown.afficher();
			countdown.timer=parseInt(countdown.m,10)*60+parseInt(countdown.s,10);


			
		},
		
		
		
		afficher:function(){
			var minutes= parseInt(countdown.timer/60,10);
			var secondes=countdown.timer-minutes*60;
			$("#minutes").text(minutes);
			$("#secondes").text(secondes);

		}
	};
	countdown.init();
})();