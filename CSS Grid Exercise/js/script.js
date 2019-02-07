// overlay effect

var modal = document.getElementById('overlay');
var btn = document.getElementById("trigger");
var div = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

div.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// hover effect

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