let mobileWidth = 768;

if (mobileWidth < window.innerWidth) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(
        'header-video',
        {
            videoId: 'L6fnr3W3Mlg',
            playerVars: {
                loop: 1,
                controls: 0,
                autoplay: 1,
                disablekb: 1,
                rel: 0,
                showinfo: 0,
                enablesjsapi: 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        }
    );
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    var ytStatus = event.target.getPlayerState();
    event.target.mute();
    event.target.playVideo();
}

