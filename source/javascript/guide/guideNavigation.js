// Guide Navigation Interaction

var $navigationTrigger = $('.guide__navigation__menu-button'),
    $navigationIcon = $('.guide__navigation__menu-icon'),
    $navigation = $('.guide__navigation'),
    $navigationOverlay = ('.guide__navigation__modal--overlay'),
    $navigationModal = ('.guide__navigation__modal'),
    navigationActive = 'is-active';


// Toggle Modal
$navigationTrigger.on('click', function() {

  // Add active to elements
  $navigationIcon.toggleClass(navigationActive);
  $(this).parents().find($navigation).toggleClass(navigationActive);
  $(this).parents($navigation).find($navigationOverlay).toggleClass(navigationActive);
  $(this).parents($navigation).find($navigationModal).toggleClass(navigationActive);

});


// Change logo color

$(window).scroll(function(){
  var pageHeader = $(".guide__navigation").offset().top,
      pageHeaderHeight = $(".guide__page-header").outerHeight(),
      $navigationLogo = $('.guide-navigation__logo'),
      $navigationMenuIcon = $('.guide__navigation__menu-icon'),
      className = 'has-scrolled';

    if($(window).scrollTop() > pageHeaderHeight){
      $navigationLogo.addClass(className);
      $navigationMenuIcon.addClass(className);
    }
    else{
      $navigationLogo.removeClass(className);
      $navigationMenuIcon.removeClass(className);
    }
});