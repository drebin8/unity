#pragma strict
var myAudio : GameObject;
var updateRate = 0.7;
private var nextUpdate = 0.0;
var tubeColor : float;
var material0 : Material;
var material1 : Material;

function Start () {
	myAudio = GameObject.Find("AudioSource");
}

function Update () {
	var spectrum = new float[1024];
	myAudio.audio.GetSpectrumData (spectrum, 0, FFTWindow.Blackman);
	if (Time.time > nextUpdate) {
		if (myAudio.audio.isPlaying){
			tubeColor = spectrum[100]*7000;
		}
		nextUpdate = Time.time + updateRate;
	}
	if (tubeColor > 0 && tubeColor < 1) { material1.color = Color.red; }
	else if (tubeColor > 0 && tubeColor <= 1) { material1.color = Color.magenta; }
	else if (tubeColor > 1 && tubeColor <= 2) { material1.color = Color.blue; }
	else if (tubeColor > 2 && tubeColor <= 3) { material1.color = Color.cyan; }
	else if (tubeColor > 3 && tubeColor <= 4) { material1.color = Color.green; }
	else if (tubeColor > 4 && tubeColor <= 5) { material1.color = Color.yellow; }
	else if (tubeColor > 5 && tubeColor <= 6) { material1.color = Color.red; }
	//renderer.material.Lerp(renderer.material, material0, 0.7);
}