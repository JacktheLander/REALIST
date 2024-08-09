function isMobileDevice() {
    return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
}

if (isMobileDevice()) {
    document.body.classList.add('mobile');
    document.querySelector('.container').style.height = 'auto'; // Set the container height to auto
    document.querySelector('.container').style.overflow = 'visible'; // Ensure the container content is fully visible
}
