/*  //javacsript
clickMe.addEventListener("click", function(e) {
  popover.style.display = "block";
  e.stopPropagation();
});
wrapper.addEventListener("click", function(e) {
  e.stopPropagation();
});
document.addEventListener("click", function() {
  popover.style.display = "none";
});

*/


// jQuery
/*
$(clickMe).on('click',function(){
    $(popover).show()  //显示
})
$(wrapper).on('click',function(e){
    e.stopPropagation()
})
/*
$(wrapper).on('click',flase) 
等同于
$(wrapper).on('click',function(e){
	e.preventDefault() //阻止默认事件
	e.stopPropagation() //阻止传播
})

$(document).on('click',function(){
	$(popover).hide()  //隐藏
})
*/

// jQuery  优化  只有show后才监听节省资源
/*
$(clickMe).on('click',function(){
    $(popover).show()  //显示
    $(document).one('click',function(){
	$(popover).hide()  //隐藏
})
})
$(wrapper).on('click',function(e){
    e.stopPropagation()
})
*/
//或者
$(clickMe).on('click',function(){
    $(popover).show()  //显示
    setTimeout(function(){  //延迟添加  
   	 	$(document).one('click',function(){
		$(popover).hide()  //隐藏
   		})
	},0)
})




