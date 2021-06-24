predicition1=""
predicition2=""
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach('#camera')
function takeSnapShot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'
})
}
console.log('ml5version:',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/K6uThriR2/model.json',modelLoaded)
function modelLoaded(){
console.log('Model Loaded!')
}
function speak(){
var synth= window.speechSynthesis 
speakdata1="ThefirstPredictionIs"+predicition1
speakdata2="TheSecondPredictionIs"+predicition2
var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
synth.speak(utterThis)
}
function check(){
image=document.getElementById("captured_image")
classifier.classify(image,gotResult)
}
function gotResult(error,results){
    if (error) {
        console.error(error)
    }
    else{
    console.log(results)
    document.getElementById("result_emotion_name").innerHTML=results[0].label
    document.getElementById("result_emotion_name2").innerHTML=results[1].label
    predicition1=results[0].label
    predicition2=results[1].label
    speak()
    if (results[0].label="awsome") {
       document.getElementById("update_emoji").innerHTML="&#128076;" 
    }
    if (results[0].label="victory") {
        document.getElementById("update_emoji").innerHTML="&#9996;" 
     }
     if (results[0].label="rock") {
        document.getElementById("update_emoji").innerHTML="&#128074;" 
     }
     if (results[1].label="awsome") {
        document.getElementById("update_emoji2").innerHTML="&#128076;" 
     }
     if (results[1].label="victory") {
         document.getElementById("update_emoji2").innerHTML="&#9996;" 
      }
      if (results[1].label="rock") {
         document.getElementById("update_emoji2").innerHTML="&#128074;" 
      }
    }
    }