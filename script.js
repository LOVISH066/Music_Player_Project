console.log("Welcome To Web Music Player");
let songIndex = 0;
let audioElement = new Audio("songs/[YT2mp3.info] - Alec Benjamin - Let Me Down Slowly [Official Music Video] (320kbps).mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('muProgressBar');
let songs = [
    {songnName: "Let me down slowly", filePath: "Songs/[YT2mp3.info] - Alec Benjamin - Let Me Down Slowly [Official Music Video] (320kbps).mp3", coverPath: "covers/1.jpg"},
    {songnName: "Akhil Rukh", filePath: "Songs/onlymp3.to - Akhil  Rukh Official Song  BOB  Sukh Sanghera  Latest Punjabi Song 2017  Speed Records-2QOYVEgfYX4-192k-1654703594555.mp3", coverPath: "covers/2.jpg"},
    {songnName: "Kaa Bole banare te", filePath: "Songs/onlymp3.to - Kaa Bole Banere Te (Full Song)  A Kay  Latest Punjabi Song 2016  Speed Records-YCU9PQDHf4o-192k-1654424105941.mp3", coverPath: "covers/3.jpg"},
    {songnName: "Kite Kali", filePath: "Songs/onlymp3.to - Maninder Buttar  KITE KALLI - Preet Hundal  Panj-aab Records  #video Punjabi Songs 2020-Bqt0fEBVaYA-192k-1654703412170.mp3", coverPath: "covers/4.jpg"},
    {songnName: "Lost Life", filePath: "Songs/onlymp3.to - The Lost Life Song By A-Kay  Music Muzical Doctorz  Panj-Aab-b08nGvCP4h0-192k-1654423981653.mp3", coverPath: "covers/5.jpg"},
    {songnName: "Internet Satinder", filePath: "Songs/Satinder Sartaaj_ Masoomiyat (Full Song) _ Beat Minister _ Latest Punjabi Songs 2017 _ T-Series.mp3", coverPath: "covers/6.jpg"},
]

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-solid', 'fa-3x', 'fa-play-circle');
        masterPlay.classList.add('fa-solid', 'fa-3x', 'fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-solid', 'fa-3x', 'fa-pause-circle');
        masterPlay.classList.add('fa-solid', 'fa-3x', 'fa-play-circle');
    }
});

myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
});
