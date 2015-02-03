#pragma strict

    // Use this for initialization
    function Start () {
    }

    // Update is called once per frame
    function Update () {
        // rotate at 90 degrees per second
        transform.Rotate(Vector3.up * Time.deltaTime*90);
    }