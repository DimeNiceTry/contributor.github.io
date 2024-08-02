var cancellable = function(fn, args, t) {
    const cancelFn = function (){
    clearTimeout(timer)
    }
    const timer = setTimeout(() =>{
            fn(...args)
        }, t)
    return cancelFn
};

function sayHeyo(name){
    console.log(`Hey huishe ${name}`)
    
}

cancel = cancellable(sayHeyo, ['Dalpaep'], 3000)

setTimeout(() => {
    cancel()
    console.log('ti eblan')
}, 1000);

setInterval(() => {
    
}, interval);