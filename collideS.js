#pragma strict

var particle : GameObject;

function OnCollisionEnter(theCollision : Collision){
	
	if(theCollision.gameObject.tag == "enemy" || theCollision.gameObject.name == "enemySpawn2(Clone)"){
		Destroy(theCollision.collider.gameObject);
		theCollision.gameObject.SendMessage("explodeShip");
	}
	if(theCollision.gameObject.name == "ship"){
		Instantiate (particle, theCollision.gameObject.transform.position, theCollision.gameObject.transform.rotation);
		theCollision.gameObject.SendMessage("explodeShip");
	}
	if(theCollision.gameObject.tag == "bullet" ){
		Destroy(theCollision.gameObject);
	}
}