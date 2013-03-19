#pragma strict
private var _mouseOver = false;
var isQuitButton = 0;
function OnGUI()
{
    if(!_mouseOver){
    	renderer.material.color = Color.green;
    	return;
    }
    else{
    	renderer.material.color = Color.blue;
    }
    //draw your GUI stuff here with Unity's OnGUI code - see ref for details
    
}
function OnMouseOver()
{
	_mouseOver = true;
	//renderer.material.color = Color.green;
}
function OnMouseExit()
{
	_mouseOver = false;
	//renderer.material.color = Color.blue;
}

function OnMouseUp()
{
	if( isQuitButton == 2 )
	{
		Application.Quit();
	}
	else if ( isQuitButton == 1 )
	{
		
	}
	else if ( isQuitButton == 0 )
	{
		Application.LoadLevel(1);
	}
}