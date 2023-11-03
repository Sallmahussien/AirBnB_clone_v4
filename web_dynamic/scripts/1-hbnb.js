$(document).ready(() => {
    const amenityIds = [];

    $('.filters .amenities .popover li input:checked').each(() => {
        const amenityId = $(this).attr('data-id');
        amenityIds.push(amenityId);
    });

    $('.filters .amenities h4').text(amenityIds.join(', '));
});
