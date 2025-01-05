function isMobileDevice() {
    return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
}

if (isMobileDevice()) {
    document.body.classList.add('mobile');
    document.querySelector('.container').style.height = '20vh'; // Set the container height
    document.querySelector('.container').style.overflow = 'visible'; // Ensure the container content is fully visible
    
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.display = 'none'; // Hide the link
    });
}
