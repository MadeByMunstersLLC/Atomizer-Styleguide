$(document).ready(function(){$(".tabs ul li").on("click",function(a){a.preventDefault();var t=$(this).attr("data-tab"),s=$(".tab__content");$tabLink=$(".tab__item"),activeClass="is-active",$tabLink.removeClass(activeClass),s.removeClass(activeClass),$(this).addClass(activeClass),$("#"+t).addClass(activeClass)})});