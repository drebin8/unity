using UnityEngine;
using System.Collections;

public class test : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	RaycastHit hitInfo;
	if( Physics.Raycast( Camera.main.ScreenPointToRay( Input.mousePosition ), out hitInfo ) )
	{
	    Debug.Log( "mouse is over object " + hitInfo.collider.name );
	} 
	}
}
