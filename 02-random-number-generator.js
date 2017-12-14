function random(low,high) {
    var rnd = Math.random();
    console.log( rnd );
     console.log(Math.floor( rnd * (high - low) + low));
}

random(100,200);