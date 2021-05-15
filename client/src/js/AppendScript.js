const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = false;
    document.body.appendChild(script);
}

function promiseScript(src) {
  return new Promise(function(resolve, reject) {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.addEventListener('load', function() {
      resolve();
    })
    script.addEventListener('error', function(e) {
      reject(e)
    })
    document.body.appendChild(script);
  })
}



export {
  appendScript,
  promiseScript
}
