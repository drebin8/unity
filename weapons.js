#pragma strict
var weapon1 : GameObject;
var weapon2 : GameObject;
var weapon2a : GameObject;
var weapon3 : GameObject;
var weapon3a : GameObject;
var weapon4 : GameObject;
var turnSpeed:float = 10.0;
var ship : GameObject;
var bullet1 : GameObject;
var bullet2 : GameObject;
var bullet2a : GameObject;
var bullet3 : GameObject;
var bullet3a : GameObject;
var bullet4 : GameObject;
var bullet5 : GameObject;
var bullet5a : GameObject;


public var aBullet : GameObject;

function Start(){
	ship = GameObject.Find("ship");
	load3();
}

function Update(){
	if (ship != null){
		if(Input.GetKeyUp("1")) { load1(); }
		else if(Input.GetKeyUp("2")) { load2(); }
		else if(Input.GetKeyUp("3")) { load3(); }
		else if(Input.GetKeyUp("4")) { load4(); }
		else if(Input.GetKeyUp("5")) { load5(); }
	}
}

function destroyAll(){
	CancelInvoke("fireBullet1");
	CancelInvoke("fireBullet2");
	CancelInvoke("fireBullet3");
	CancelInvoke("fireBullet4");
	CancelInvoke("fireBullet5");
}

function load1(){
	destroyAll();
	//BroadcastMessage("changeDamage",2);
	InvokeRepeating("fireBullet1", 0f,0.1f);
}

function load2(){
	destroyAll();
	//BroadcastMessage("changeDamage",2);
	InvokeRepeating("fireBullet2", 0f,0.09f);
}

function load3(){
	destroyAll();
	//BroadcastMessage("changeDamage",1);
	InvokeRepeating("fireBullet3", 0f,0.08f);
}

function load4(){
	destroyAll();
	//BroadcastMessage("changeDamage",1);
	InvokeRepeating("fireBullet4", 0f,0.05f);
}

function load5(){
	destroyAll();
	//BroadcastMessage("changeDamage",1);
	InvokeRepeating("fireBullet5", 0f,0.12f);
}

function fireBullet1(){
	var bullet1 = Instantiate(weapon1, ship.transform.position, Quaternion(0,0,0,0));
	Destroy(bullet1, 7.0);
}
function fireBullet2(){
	var bullet2 = Instantiate(weapon2, ship.transform.position + ship.transform.right*.3, Quaternion(0,0,0,0));
	var bullet2a = Instantiate(weapon2a, ship.transform.position - ship.transform.right*.3, Quaternion(0,0,0,0));
	Destroy(bullet2, 7.0);
	Destroy(bullet2a, 7.0);
}
function fireBullet3(){
	var bullet3 = Instantiate(weapon3, ship.transform.position, Quaternion(0,0,0,0));
	var bullet3a = Instantiate(weapon3a, ship.transform.position, Quaternion(0,0,0,0));
	Destroy(bullet3, 7.0);
	Destroy(bullet3a, 7.0);
}
function fireBullet4(){
	fireBullet3();
	var bullet4 = Instantiate(weapon4, ship.transform.position, Quaternion(0,0,0,0));
	Destroy(bullet4, 7.0);
}
function fireBullet5(){
	fireBullet2();
	var bullet5 = Instantiate(weapon2, ship.transform.position + ship.transform.right*.8 + ship.transform.forward*.2, Quaternion(0,0,0,0));
	var bullet5a = Instantiate(weapon2a, ship.transform.position - ship.transform.right*.8 + ship.transform.forward*.2, Quaternion(0,0,0,0));
	Destroy(bullet5, 7.0);
	Destroy(bullet5a, 7.0);
}