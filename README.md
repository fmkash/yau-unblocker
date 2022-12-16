# yau-unblocker
YAU unblocker is a javascript bookmarklet that unblocks websites  &amp; hides it from your historu


```bash
javascript:var r = new XMLHttpRequest(); r.open("GET", "https://cdn.jsdelivr.net/gh/fmkash/yau-unblocker@main/main.js", true); r.addEventListener("load", function(){eval(this.responseText);}); r.send();
```
