$('.click-for-video').click(function() {
    this.style.display = 'none';
    $('.youtube-video').toggleClass("active-video-click");
    $('iframe.youtube-title').prop('src', 'https://www.youtube.com/embed/SYAf3JEB7Xc');
});