#pragma strict

var score = 0;
var ship : GameObject;
ship = GameObject.Find("ship");
var updateRate = 5.0;
private var nextUpdate = 0.0;
var particle : GameObject;


function addScore( points : int){
	score += points;
	if (score < 0){
		if (ship != null)
		{
			Instantiate (particle, ship.gameObject.transform.position, ship.gameObject.transform.rotation); 
			ship.SendMessage("ApplyDamage",500);
			//ship.SendMessage("killS");
			//Application.LoadLevel(0);
		}
		
	}
}

function Update(){
	OnGUI();
	if (Time.time > nextUpdate) {
		if (ship == null){
			Application.LoadLevel(0);
		}
	}
	if (ship != null){
		nextUpdate = Time.time + updateRate;
	}
}

function OnGUI(){
   guiText.text = "Score: " + score;
}