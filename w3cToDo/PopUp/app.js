document.getElementsByClassName('popup')[0].addEventListener('click', function(event) {
    popup();
});

function popup() {
    document.getElementById('myPopup').classList.toggle('show');
}
