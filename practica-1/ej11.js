function onlyUniques() {
    let unicos = [];
  
    for (let i = 0; i < arguments.length; i++) {
      let esUnico = true;
      for (let j = 0; j < arguments.length; j++) {
        if (i !== j && arguments[i] === arguments[j]) {
          esUnico = false;
          break;
        }
      }
      if (esUnico) {
        unicos.push(arguments[i]);
      }
    }
  
    return unicos;
}
  

console.log(onlyUniques(1, 2, 5, 1, "h", "a", "h"))