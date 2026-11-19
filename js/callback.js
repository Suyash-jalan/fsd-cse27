function test1(cb){
    setTimeout(()=>{
        console.log("test1")
        cb();
    },2000);
}
function test2(cb){
    setTimeout(()=>{
        console.log("test1")
        cb();
    },1000);
}
function test3(cb){
    setTimeout(()=>{
        console.log("test3")
        cb();
    },500);
}
test1(() =>{
    test2();
});