async function start() {
 
    const { default: boot } = await import("./boot");
    boot();
   
}

start();
