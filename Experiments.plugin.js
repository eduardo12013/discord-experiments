 /**
 * @name Experiments
 * @version 0.0.1
 * @description Enable Experiments mode on Discord
 * @author mace#6441
 *  
 */



   module.exports = class name{
     
       load() { }
       start() {

webpackChunkdiscord_app.push([
  ["wp_isdev_patch"],
  {},
  (e) => {
    for (let c in e.c)
      if (e.c[c].exports?.default?.isDeveloper === false)
        Object.defineProperty(e.c[c].exports.default, "isDeveloper", {
          get: () => true,
        });
  },
]);


}
stop(){
  
}
}