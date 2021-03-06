import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const iconPlay = document.querySelector("#iconPlay");
const iconPause = document.querySelector("#iconPause");
const iconMute = document.querySelector("#iconMute");
const iconUnmute = document.querySelector("#iconUnmute");

const video = document.querySelector("video"); // Target Video
const imgButton: HTMLElement = document.querySelector("#imgButton"); // Button Play / Pause
const playButton: HTMLElement = document.querySelector("#playButton"); // Button Play / Pause
const muteButton: HTMLElement = document.querySelector("#muteButton"); // Button Mute / Unmute

// Intance class MediaPlayer
const player = new MediaPlayer({
  el: video, // Parameters of constructor
  // il: imgButton,
  plugins: [new AutoPlay(), new AutoPause()],
  icons: [iconPlay, iconPause, iconMute, iconUnmute],
});
playButton.onclick = () => player.togglePlay();
imgButton.onclick = () => player.togglePlay();

muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
