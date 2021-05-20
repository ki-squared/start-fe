function average() {
    let args = [];
    if(typeof(arguments[0]) === "object") // 배열 인자가 들어온 경우
        args = arguments[0];
    else // 숫자 인자가 들어온 경우
        args = Array.prototype.slice.call(arguments);

    // 숫자가 아닌 값 제거
    for(let i=0; i<args.length; i++) {
        if(isNaN(args[i]))
            args.splice(i,1);
    }

    const avg = arr => arr.reduce((a, b)=>a+b,0)/arr.length;
    return avg(args); // 평균 return
}

module.exports = average;
