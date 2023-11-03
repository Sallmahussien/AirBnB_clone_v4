$(document).ready(() => {
  updateAmenityText();

  $('.filters .amenities .popover li input').on('change', function() {
    updateAmenityText();
  });

  function updateAmenityText() {
    const amenityNames = [];

    $('.filters .amenities .popover li input').each(function() {
      const amenityName = $(this).attr('data-name');
      if ($(this).is(':checked')) {
        amenityNames.push(amenityName);
      }
    });

    const h4Element = $('.filters .amenities h4');

    if (amenityNames.length > 0) {
      h4Element.text(amenityNames.join(', '));
    } else {
      h4Element.html('&nbsp;');
    }
  }
});
