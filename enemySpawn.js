#pragma strict
var ship : GameObject;
var _x = 0.0;
var _y = 0.0;
var angleRadians : float;
var radius = 1.4;
public var myEnemy : GameObject;
function Start(){
   ship = GameObject.Find("ship");
   InvokeRepeating("SpawnEnemy", 1.0f,1.0f);
}

function SpawnEnemy(){
	if (ship != null)
	{
		var angleDegrees = Random.Range(0, 360);
	    var randomRotation = Quaternion.Euler( 0, 0, angleDegrees+90);
	    angleRadians = angleDegrees * Mathf.PI / 180.0;
	    _x = radius * Mathf.Cos(angleRadians);
	    _y = radius * Mathf.Sin(angleRadians);
		var enemyShip = Instantiate(myEnemy, Vector3(_x, _y, 38), randomRotation);
	}
}