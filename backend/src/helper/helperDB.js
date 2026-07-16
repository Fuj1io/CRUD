const clear = function(symbol) {
    if (typeof symbol === "string"){
        return symbol.replace(" ", "").trim();
    }else if (typeof symbol === "number"){
        return symbol;
    }
}

export default clear;