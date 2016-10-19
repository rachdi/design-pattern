(function(){
	countdown={
		

		timer:null,
		s:null,
		m:null,
		interval:null,
		max:null,
		init:function(){
			countdown.listeners();
		},
		listeners:function(){
			$("#Start").on("click",this.start.bind(this));
			$("#Stop").on("click",this.stop.bind(this));
			$("#Reset").on("click",this.reset.bind(this));
			$("#modifier").on("click",this.recupere.bind(this));
			
		},
			
			

		
		start:function(){
			console.log("hello");
			this.interval=setInterval(this.decrement.bind(this),1000);
		},
		
		stop:function(){
			
			clearInterval(this.interval);
		     
		},
		decrement:function(){
			this.timer--;
			this.progressbar();
			this.afficher();
			if (this.timer == 0){
				clearInterval(this.interval);
			}

		},
		reset:function(){
			
				this.recupere();
			
		},
		recupere:function(){
			this.s=parseInt($('#s').val(),10);
			this.m=parseInt($('#m').val(),10);
			this.afficher();
			this.timer=parseInt(this.m,10)*60+parseInt(this.s,10);
			max=this.timer;

			
		},
		
		
		
		afficher:function(){
			var minutes= parseInt(this.timer/60,10);
			var secondes=this.timer-minutes*60;
			$("#minutes").text(minutes);
			$("#secondes").text(secondes);

		},
		progressbar:function(){
			var jqProgess = $("#progressbar");
			var pourcent=this.timer*100/max;
				console.log(pourcent);
				jqProgess.val(pourcent);

				// t.$("span")[0].innerHTML=Math.floor((100 / 70) * value);
		}
	};
	countdown.init();
})();