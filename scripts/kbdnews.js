var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let mobileWidth = 768;

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(
        'header-video',
        {
            videoId: 'DU0ZbbAaXn0',
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
    if (mobileWidth < window.innerWidth) {
        event.target.playVideo();
    }
}

function onPlayerStateChange(event) {
    var ytStatus = event.target.getPlayerState();
    if (ytStatus == YT.PlayerState.ENDED && mobileWidth < window.innerWidth) {
        event.target.mute();
        event.target.playVideo();
    }
}

