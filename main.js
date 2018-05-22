var icon = document.querySelector('.customIcon');
var mainContent = document.getElementById('nav');
var overlayContent = document.querySelector('.overlayContent');
icon.addEventListener('click', function(){
	icon.classList.toggle('active');
	mainContent.classList.toggle('clickedOverlay');
});
window.addEventListener('click', function(event){
	if(event.target !== icon && event.target.parentNode !== icon){
		if((event.target != mainContent) && (event.target.parentNode != overlayContent) ){
			icon.classList.remove('active');
	         mainContent.classList.remove('clickedOverlay');         
	    }
	}
});



	


















