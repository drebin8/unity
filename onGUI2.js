#pragma strict
var myAudio : GameObject;
var updateRate = 0.03;
private var nextUpdate = 0.0;
var currFreq = 0.0;
var t1 = 0.0;
var t2 = 0.0;
var y = 0.0;
var dt = 0.0;
var peak = true;

function Start(){
	myAudio = GameObject.Find("AudioSource");
}

function Update () {
	var spectrum = new float[1024];
	myAudio.audio.GetSpectrumData (spectrum, 0, FFTWindow.Blackman);
	if (Time.time > nextUpdate) {
		if (myAudio.audio.isPlaying){
			currFreq = spectrum[100]*1000;
			if (currFreq > y){
				peak = true;
				t2 = Time.time;
			}
			else if (currFreq < y){
				if (peak == true){
					dt = t2 - t1;
					t1 = t2;
					peak = false;
				}
			}
			y = currFreq;
			
			guiText.text = "Time difference: " + dt;
			Debug.Log(dt);
		}
		nextUpdate = Time.time + updateRate;
	}
}