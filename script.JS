function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
  let i = 0;
  function stopky(){
  document.getElementById("čas").innerHTML = ++i
}

  

  



    function setLimit() {
        const limitMinutes = parseFloat(document.getElementById("jablko").value);
        const limitMilliseconds = limitMinutes * 1000 ; 
        setTimeout(() => {
            alert('Odpočinek');
        }, limitMilliseconds);
    }


