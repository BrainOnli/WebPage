document.addEventListener('DOMContectLoaded', function() {
    var modalButtons = document.querySelectorAll('.open-modal');
    
    modalButtons.forEach(function(item) {
        item.addEventListener('click', function (e) {
    e.preventDefault();

    var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal');
    
        modalElem.classList.add('active');
        });
    });
});

