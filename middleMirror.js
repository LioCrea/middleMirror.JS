	///////////////////////////////
	//
	// NON-PERMANENT SCRIPT
	// WORKING BUT CAN BE OPTIMIZED
	// v1.1
	//
	///////////////////////////////	
	
		var parent, subParent, subParentBottom, left, leftBottom, right, rightBottom, elemNum, elemNumBottom, bgColor, cloned;
		var reader;
		var totalWidth = 0;
		var plusProche = 0;
		var distance = [];
		parent = document.getElementsByClassName('parent')[0];
		subParent = document.getElementsByClassName('subParent')[0];
		subParentBottom = document.getElementsByClassName('subParentBottom')[0];
		left = document.getElementsByClassName('up')[0];
		right = document.getElementsByClassName('down')[0];
		leftBottom = document.getElementsByClassName('up')[1];
		rightBottom = document.getElementsByClassName('down')[1];
		elemNum = document.getElementsByClassName('elem');
		elemNumBottom = document.getElementsByClassName('elemBottom');
		cloned = document.getElementsByClassName('clone')[0];
		clonedBottom = document.getElementsByClassName('cloneBottom')[0];
		
		reader = document.getElementsByClassName('mirror')[0];
		
		subParent.style.width = '2100px';
	
	
	///////////////////////////////
	//
	// WHEN LOADING
	//
	///////////////////////////////
		// TOP ELEMENTS
			for(i=0;i<elemNum.length;i++){
				distance[i] = parseInt(reader.offsetLeft,10) - (parseInt(elemNum[i].offsetLeft,10)+ parseInt(elemNum[i].offsetWidth,10)/2);
				if(i>0){
					if(Math.abs(distance[i])<Math.abs(distance[i-1])){
						plusProche = distance[i];
						bgColor = i;
					}
				}
			}
		console.log('id de l\'element: '+elemNum[bgColor].id);
		cloned.style.background = elemNum[bgColor].style.background;
		// BOTTOM ELEMENTS
			for(i=0;i<elemNumBottom.length;i++){
				distance[i] = parseInt(reader.offsetLeft,10) - (parseInt(elemNum[i].offsetLeft,10)+ parseInt(elemNum[i].offsetWidth,10)/2);
				if(i>0){
					if(Math.abs(distance[i])<Math.abs(distance[i-1])){
						plusProche = distance[i];
						bgColor = i;
					}
				}
			}
			console.log('Distance table INIT TOP: '+distance);
			console.log('bgColor: '+bgColor);
			console.log('id de l\'element: '+elemNumBottom[bgColor].id);
			clonedBottom.style.background = elemNumBottom[bgColor].style.background;
		
	///////////////////////////////
	//
	// CLICK ACTION
	//
	///////////////////////////////
	
			right.onclick = function(){
				if(parseInt(subParent.style.marginLeft,10)<=0 && (-parseInt(subParent.style.marginLeft,10))<((subParent.offsetWidth-parent.offsetWidth))){ 
					subParent.style.marginLeft = parseInt(subParent.style.marginLeft,10)-(elemNum[0].offsetWidth+parseInt(elemNum[0].style.marginLeft,10))+'px';
					setTimeout(function(){
						for(i=0;i<elemNum.length;i++){
							distance[i] = parseInt(reader.offsetLeft,10) - (parseInt(elemNum[i].offsetLeft,10)+ parseInt(elemNum[i].offsetWidth,10)/2);
							if(i>0){
								if(Math.abs(distance[i])<Math.abs(distance[i-1])){
									plusProche = distance[i];
									bgColor = i;
								}
							}
						}
					console.log('Distance table NEW RIGHT: '+distance);
					console.log('Plus proche: '+plusProche);
					console.log('DIV#: '+bgColor);
					console.log('id de l\'element: '+elemNum[bgColor].id);
					cloned.style.background = elemNum[bgColor].style.background;
					},400);
				}
			}
			left.onclick = function(){
				if(parseInt(subParent.style.marginLeft,10)<0){
					subParent.style.marginLeft = parseInt(subParent.style.marginLeft,10)+(elemNum[0].offsetWidth+parseInt(elemNum[0].style.marginLeft,10))+'px';
					setTimeout(function(){
						for(i=0;i<elemNum.length;i++){
							distance[i] = parseInt(reader.offsetLeft,10) - (parseInt(elemNum[i].offsetLeft,10)+ parseInt(elemNum[i].offsetWidth,10)/2);
							if(i>0){
								if(Math.abs(distance[i])<Math.abs(distance[i-1])){
									plusProche = distance[i];
									bgColor = i;
								}
							}
						}
					console.log('Distance table NEW RIGHT: '+distance);
					console.log('Plus proche: '+plusProche);
					console.log('DIV#: '+bgColor);
					console.log('id de l\'element: '+elemNum[bgColor].id);
					cloned.style.background = elemNum[bgColor].style.background;
					},400);
				}
			}
			rightBottom.onclick = function(){
				if(parseInt(subParentBottom.style.marginLeft,10)<=0 && (-parseInt(subParentBottom.style.marginLeft,10))<((subParentBottom.offsetWidth-parent.offsetWidth))){ //+(parseInt(elemNum.offsetHeight,10))/2)
					subParentBottom.style.marginLeft = parseInt(subParentBottom.style.marginLeft,10)-(elemNum[0].offsetWidth+parseInt(elemNum[0].style.marginLeft,10))+'px';
					setTimeout(function(){
						for(i=0;i<elemNumBottom.length;i++){
							distance[i] = parseInt(reader.offsetLeft,10) - (parseInt(elemNumBottom[i].offsetLeft,10)+ parseInt(elemNumBottom[i].offsetWidth,10)/2);
							if(i>0){
								if(Math.abs(distance[i])<Math.abs(distance[i-1])){
									plusProche = distance[i];
									bgColor = i;
								}
							}
						}
					console.log('Distance table NEW RIGHT: '+distance);
					console.log('Plus proche: '+plusProche);
					console.log('DIV#: '+bgColor);
					console.log('id de l\'element: '+elemNumBottom[bgColor].id);
					clonedBottom.style.background = elemNumBottom[bgColor].style.background;
					},400);
				}
			}
			leftBottom.onclick = function(){
				if(parseInt(subParentBottom.style.marginLeft,10)<0){
					subParentBottom.style.marginLeft = parseInt(subParentBottom.style.marginLeft,10)+(elemNum[0].offsetWidth+parseInt(elemNum[0].style.marginLeft,10))+'px';
					setTimeout(function(){
						for(i=0;i<elemNumBottom.length;i++){
							distance[i] = parseInt(reader.offsetLeft,10) - (parseInt(elemNumBottom[i].offsetLeft,10)+ parseInt(elemNumBottom[i].offsetWidth,10)/2);
							if(i>0){
								if(Math.abs(distance[i])<Math.abs(distance[i-1])){
									plusProche = distance[i];
									bgColor = i;
								}
							}
						}
					console.log('Distance table NEW RIGHT: '+distance);
					console.log('Plus proche: '+plusProche);
					console.log('DIV#: '+bgColor);
					console.log('id de l\'element: '+elemNumBottom[bgColor].id);
					clonedBottom.style.background = elemNumBottom[bgColor].style.background;
					},400);
				}
			}
			 
