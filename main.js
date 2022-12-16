 (function() {
  var val= prompt("Enter url to unblock a website \nYAU UNBLOCKER","URL");
  var encoded = btoa(val);
  var link = "https://kashiuer-dev.tumbadoware.xyz/load.html#" + encoded;
      var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999")
      w.document.write('<script>document.title = "about:blank";</script>' +
  '<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="'+link+'"></iframe>');
 })(); 
