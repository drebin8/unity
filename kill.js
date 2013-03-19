#pragma strict

//var ship : GameObject;
//private var nextFire = 0.0;
var particle : GameObject;
var refireRate = 0.1;
var hitDamage : int;

function shoot(){
	if (gameObject.name == "weapon1")
	{
		hitDamage = 2;
	}
	else
	{
		hitDamage = 1;
	}
    var ray = new Ray (transform.position, Vector3(0,0,1));
    var hit : RaycastHit;
    if (Physics.Raycast(ray, hit, 100)){ // 1000 or Mathf.Infinity should be enough !
        // what did the raycast hit ?
        //Debug.Log( "ray hit (name): " + hit.collider.gameObject.name);
        //Debug.Log( "ray hit (tag): " + hit.collider.gameObject.tag );
 
        if(hit.collider.gameObject.tag == "enemy" || hit.collider.gameObject.name == "enemySpawn2(Clone)")
        {           
            hit.collider.gameObject.SendMessage("ApplyDamage",hitDamage);
        }
    }
}

function Update () {
	//shoot();
	//yield WaitForSeconds(0.3);
}

function ShotPoller()
{
    while(true)
    {
        shoot();
        yield WaitForSeconds(refireRate);
    }
}
 
 
function Start()
{
    StartCoroutine(ShotPoller());
}