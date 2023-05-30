setInterval(()=>{
    d= new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    // clock rotation deg logic
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    // rotation
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000);