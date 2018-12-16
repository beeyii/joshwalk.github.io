$( document ).ready(function() {

  // bind a click event to the 'skip' link
  $(".skip").click(function(event){

    // strip the leading hash and declare
    // the content we're skipping to
    var skipTo="#"+this.href.split('#')[1];

    // Setting 'tabindex' to -1 takes an element out of normal
    // tab flow but allows it to be focused via javascript
    $(skipTo).attr('tabindex', -1).on('blur focusout', function () {

      // when focus leaves this element,
      // remove the tabindex attribute
      $(this).removeAttr('tabindex');

    }).focus(); // focus on the content container
  });

  // https://stackoverflow.com/questions/2155453/jquery-toggle-text
  $.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
  });

  // https://codepen.io/ricotheque/pen/qrbwZP
  var button = $('.night-mode-button');
  var container = $('body');

  button.click(function() {
    container.toggleClass('-nightmode');
    $(this).toggleText('Dark Mode', 'Light Mode')
});


  $(".collapse").click(function(event) {
    $(this).parent().next('.content-wrapper').toggle();
    $(this).toggleText('Collapse Content', 'Show Content')
  });






});
