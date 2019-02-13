// hover effect

var hoverEffect = (function() {


    var pastries = document.getElementById('pastries');

    pastries.addEventListener("mouseover", function (event) {
        var dataTarget = event.target.getAttribute('data-target')
        textInfo.querySelector('[data-index="' + dataTarget + '"]').style.display = 'block';

    }, false);

    var pastriesChildren = document.querySelectorAll('#pastries>.box.item');
    pastriesChildren.forEach(function (pastry) {
        pastry.addEventListener("mouseleave", function (event) {
            var dataTarget = event.target.getAttribute('data-target')
            textInfo.querySelector('[data-index="' + dataTarget + '"]').style.display = 'none';

        }, false);
    })

})()