$(function () {
    $('.header__slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

    // Star
    const ratingItemsList = document.querySelectorAll('.rating__item');
    const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

    ratingItemsArray.forEach(item =>
        item.addEventListener('click', () =>
            item.parentNode.dataset.totalValue = item.dataset.itemValue
        )
    );


    $('.burger').on('click', function(){
       $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });

});
