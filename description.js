
const input = document.getElementById('imageUpload')
let canvas;
canvas = faceapi.createCanvasFromMedia(input)
let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors()