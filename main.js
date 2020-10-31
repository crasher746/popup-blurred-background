const $blur = document.getElementById('blur');
const $popup = document.getElementById('popup');

toggle = () => {
    $blur.classList.toggle('active');
    $popup.classList.toggle('active');
}