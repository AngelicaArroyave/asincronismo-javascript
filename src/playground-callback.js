function execCallback(callback) {
    console.log(`Execute ${callback} 2s after`);
}

setTimeout(execCallback, 2000, 'myFunc')