// init Isotope
var iso = new Isotope( '.grid', {
  itemSelector: '.element-item',
  layoutMode: 'vertical',
    vertical: {
      horizontalAlignment: 0.5,
    },
  getSortData: {
    category: '[data-category]'
  },

});

// bind filter button click
let filterByGroup = document.querySelector('.filters-by-button-group');
filterByGroup.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  iso.arrange({ filter: filterValue });
});
