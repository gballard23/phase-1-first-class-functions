function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

const returnsAnAnonymousFunction = () => function(){}
