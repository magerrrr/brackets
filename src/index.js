module.exports = function check(str, bracketsConfig) {
    function isOpen(symbol, config){ // return state open/closed
        if (symbol === config[0]) {
            return true;
        } 
        return false;
    }

    function isGlobalOpen(symbol, configs) {
        for (let i = 0; i < configs.length ; i++) {
            if (isOpen(symbol, configs[i])) {
                return true;
            }
        }
        return false;
    }
    function isValid(opened, closed, configs) {
        let i = getConfig(opened, configs);


        if(i===-1) {
            return false;
        }

        if (closed === configs[i][1]) {
            return true;
        }
        return false;
    }

    function getConfig(opened, configs) {
        for (let i = 0; i < configs.length; i++) {
            if (opened === configs[i][0]) {
                return i;
            }
        }
        return -1;
    }

    function sameElements(stack) {
        if(stack.length>=2) {
            if(stack[stack.length-1] == stack[stack.length -2]) {
                stack.pop();
                return true;
            }
        }
        return false;
        
    }
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (isGlobalOpen(str[i], bracketsConfig)){
            stack.push(str[i]);

            if(sameElements(stack)) {
                
            }
        } else {
            let lastStackElement = stack.pop();

            if (typeof lastStackElement === 'undefined') {
                return false;
            }

            if (!isValid(lastStackElement, str[i], bracketsConfig) ) {
                return false;
            }
        }
    }


    if (stack.length === 0) {
        return true;
    }
    return false;

}
    