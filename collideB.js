#pragma strict

var hitDamage = 1;

function changeDamage(howMuch : int){
	hitDamage = howMuch;
}

function OnCollisionEnter(theCollision : Collision){

	if(theCollision.gameObject.tag == "bullet"){
		Destroy(theCollision.gameObject);
	}
	if(theCollision.gameObject.tag == "enemy" || theCollision.gameObject.name == "enemySpawn2(Clone)"){
		theCollision.gameObject.SendMessage("ApplyDamage",hitDamage);
	}
	
}