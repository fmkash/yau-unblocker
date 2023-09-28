
let jsonData = {
    "002": "https://cdnstorage.static2alive.xyz/load.html#"
};
const values = Object.values(jsonData);

const randomValue = values[parseInt(Math.random() * values.length)];

var val = prompt("YAU VERSION: V0.0.2 \nENTERA URL TO START \nMADE BY static#1865", "https://static2alive.xyz");
var encoded = btoa(val);
if (encoded === 'bnVsbA==') {
    var u = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999");
    u.document.write('<script>document.title = "about:blank";</script>' +
    '<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="https://staticdev.org/yau/yau-error.html"></iframe>'); 
         } else {
    var link = randomValue + encoded;
    var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999");
    w.document.write('<script>document.title = "about:blank";</script>' +
    '<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="' + link + '"></iframe>'); }
