<script>
    function isMobileDevice() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
        document.body.classList.add('mobile');
    }
</script>
