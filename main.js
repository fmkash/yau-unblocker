const jsonData = {
    "311": "https://kashiuer-dev.tumbadoware.xyz/load.html#",
    "310": "https://statical.tumbadoware.xyz/load.html#",
    "309": "https://incognito.tumbadoware.repl.co/load.html#",
    "308": "https://tabs.tumbadoware.xyz/load.html#",
    "307": "https://ludi.tumbadoware.xyz/load.html#",
    "306": "https://elixir.tumbadoware.repl.co/load.html#",
    "305": "https://e1.staticdev.org/load.html#",
    "304": "https://t1.staticdev.org/load.html#",
    "303": "https://t2.staticdev.org/load.html#",
    "302": "https://l1.staticdev.org/load.html#",
    "301": "https://l2.staticdev.org/load.html#",
}
const values = Object.values(jsonData)

const randomValue = values[parseInt(Math.random() * values.length)]

  var val= prompt("Enter url to unblock a website \nYAU UNBLOCKER","https://staticdev.org");
  var encoded = btoa(val);
  var link = randomValue + encoded;
      var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999")
      w.document.write('<script>document.title = "about:blank";</script>' +
  '<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="'+link+'"></iframe>');
