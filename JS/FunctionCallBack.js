function fn(cb){
    console.log(typeof cb)
}

function callBack(){
    console.log("Function CallBack")
}

fn(callBack)