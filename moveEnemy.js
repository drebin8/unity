#pragma strict

var moveSpeed = 0.0;
var myGui : GameObject;
myGui = GameObject.Find("myGui");
var myAudio : GameObject;
var updateRate = 0.2;
private var nextUpdate = 0.0;

function Start(){
	myAudio = GameObject.Find("AudioSource");
}

//function changeSpeed(

function Update () {
	//var spectrum = new float[1024];
	//myAudio.audio.GetSpectrumData (spectrum, 0, FFTWindow.Blackman);
	if (Time.time > nextUpdate) {
		if (myAudio.audio.isPlaying){
			//moveSpeed = spectrum[100]*7000;
			moveSpeed = 7;
		}
		nextUpdate = Time.time + updateRate;
	}
	transform.position.z -= moveSpeed * Time.deltaTime;
	if (transform.position.z < -12){
		Destroy(gameObject);
		myGui.SendMessage("addScore",-100);
	}

}

