#pragma strict

var moveSpeed = 7.0;

function Update () {
	//var moveSpeed = bulletSpawn.particleSystem.startSpeed;
	transform.localPosition.z += moveSpeed * Time.deltaTime;
	if (gameObject.name == "weapon3(Clone)")
		moveBullet(60);
	if (gameObject.name == "weapon3a(Clone)")
		moveBullet(-60);
}

function moveBullet( turnSpeed : float ) {
	transform.RotateAround(Vector3.zero, Vector3.forward, turnSpeed*Time.deltaTime);
//	transform.localPosition.z += moveSpeed * Time.deltaTime;
}