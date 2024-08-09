function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    document.body.classList.add('mobile');
    document.querySelector('.container').style.height = 'auto'; // Set the container height to auto
}
