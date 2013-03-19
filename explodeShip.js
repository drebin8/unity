#pragma strict

var particle : GameObject;
var pSpeed = 8;
var eSpeed = 7;
var myGui : GameObject;
myGui = GameObject.Find("myGui");

function explodeShip () {
	var eExplosion : GameObject;
	if (gameObject.name != "ship"){
		eExplosion = Instantiate(particle, gameObject.transform.position, gameObject.transform.rotation);
		myGui.SendMessage("addScore",200);
	}
	Destroy(gameObject);
	Destroy(eExplosion,1.5);
}