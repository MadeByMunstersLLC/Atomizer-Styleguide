var $modalTrigger=$(".modal__trigger"),$modal=$(".modal"),$modalCloseTrigger=$(".modal__close"),$modalActive="modal--active";$modalTrigger.on("click",function(a){a.preventDefault(),$(this).siblings($modal).addClass($modalActive),$modal.attr("aria-hidden","false")}),$modalCloseTrigger.on("click",function(a){a.preventDefault(),$(this).parents($modal).removeClass($modalActive),$modal.attr("aria-hidden","true")});