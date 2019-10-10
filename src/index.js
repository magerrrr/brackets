module.exports = function check(str, configs) {
    let expression = new String(str);
    let isDeleted = true;

    while(isDeleted) {
      isDeleted = false;
      for (let i = 0; i < expression.length-1; i++) {
        let first = expression[i];
        let second = expression[i+1];
  
        let currentPair = first.concat(second);
  
        for (let j = 0; j < configs.length; j++) {
          const config = configs[j];
          const configPair = config[0].concat(config[1]);
          if(currentPair === configPair) {
            isDeleted = true;
            expression = expression.replace(configPair,'');
          }
        }
      }
    }
  
    if (expression.length==0){
      return true;
    } 
    return false;
  }
