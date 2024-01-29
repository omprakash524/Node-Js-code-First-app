const add = (a,b)=>{
    return a+b;
};

const sub = (a,b)=>{
    return a-b;
}

const mul = (a,b)=>{
    return a*b;
}

const name = "omprakash";

module.exports.add = add;
// here we can write any name of  the function that will be exported  in module.export but after equal to  (=) sign we should mention the actual function which we want to export.this is how we export the function from our module  // we can also use module.export instead of exports to make it work
module.exports.subtract = sub;
module.exports.sub = sub;
module.exports.name = name;

// rather than writing every time we simply write this
module.exports = {add,sub,name,mul};

