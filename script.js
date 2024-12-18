let currentTrackIndex = 0;
const tracks = [
    "tracks/track1.mp3.mp3",
    "tracks/tack2.mp3.mp3",
    "tracks/track3.mp3.mp3"
];

const audioElement = document.getElementById("song");
const currentTrackElement = document.getElementById("current-track");

// Update the audio source to the current track
function loadTrack(index) {
    if (index >= 0 && index < tracks.length) {
        audioElement.src = tracks[index];
        currentTrackElement.textContent = `Playing: ${tracks[index].split("/").pop()}`;
        audioElement.load();
        playMusic();
    }
}

// Play the current track
function playMusic() {
    audioElement.play();
}

// Pause the current track
function pauseMusic() {
    audioElement.pause();
}

// Skip to the next track
function nextMusic() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Go back to the previous track
function previousMusic() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Adjust the volume
function adjustVolume(value) {
    audioElement.volume = value / 100;
}

// Initialize the player with the first track
loadTrack(currentTrackIndex);
