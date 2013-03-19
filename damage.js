#pragma strict
var hp = 6;
function ApplyDamage (damage : float) {
    hp -= damage;
    if (hp <= 0){
    	gameObject.SendMessage("explodeShip");
    	yield WaitForSeconds(3);
    }
}