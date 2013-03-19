#pragma strict

function killS () {
	Destroy(gameObject);
}
var ship : GameObject;
function Start(){
	ship = GameObject.Find("ship");
}
var turnSpeed:float = 100.0;

function Update () 
{
	if(Input.GetButtonUp("Q"))
	{
		Application.LoadLevel(0);
	}
	if (ship != null)
	{
		if(Input.GetButton("A"))
		{
			if (transform.parent != null || gameObject.tag == "bullet"){
				transform.RotateAround(Vector3.zero, Vector3.forward, -turnSpeed*Time.deltaTime);
			}
		}
		if(Input.GetButton("D"))
		{
			if (transform.parent != null || gameObject.tag == "bullet"){
				transform.RotateAround(Vector3.zero, Vector3.forward, turnSpeed*Time.deltaTime);
			}
		}
	}
}

