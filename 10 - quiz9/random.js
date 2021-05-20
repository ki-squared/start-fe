function random(max, min=0) {
    if(typeof(min) !== 'number' || typeof(max) !== 'number')
        return -1;
    
    const randInt = Math.floor(Math.random()*(max-min+1))+min;
    return randInt;
}

module.exports = random;