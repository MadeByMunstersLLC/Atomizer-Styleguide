// Click To Add Active
var $toggleElement = $('.toggle-element'),
    activeClass = 'is-active';

$toggleElement.on('click', function(e) {
  e.preventDefault();

  $(this).toggleClass(activeClass);
});