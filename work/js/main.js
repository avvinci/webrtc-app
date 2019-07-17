"use strict";

const mediaStreamConstraints = {
  video: true
};

const localVideo = document.querySelector("video");
let localStream;

function getLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

function handleLocalMediaStreameError(error) {
  console.log("navigator.getUserMedia erro:", error);
}
 
navigator.mediaDevices
  .getUserMedia(mediaStreamConstraints)
  .then(getLocalMediaStream)
  .catch(handleLocalMediaStreameError);
