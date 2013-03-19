#pragma strict
var ship : GameObject;
var loc : Vector3;

function Start () {
	ship = GameObject.Find("ship");
	loc = Vector3(0,0,0);
}

function Update () {
	if (ship != null){
		transform.position = ship.transform.position;
		gameObject.transform.localPosition += loc;
	}
}