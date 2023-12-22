let vid = document.getElementById("yourvedio");
function enableloop()
{
    vid.loop=true;
    vid.onload();
}function disableLoop() { 
    vid.loop = false;
    vid.load();
  } 
  
  function checkLoop() { 
    alert(vid.loop);
  } 
