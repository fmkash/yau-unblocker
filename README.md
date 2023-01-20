# Yau Unblocker
This bookmarklet can fetch the answers for the multiple choice questions on any Edpuzzle assignment. It can also skip the entire video, as well as automatically answer the questions and change the video speed.

## Contents:
  - [Demo](#demo)
  - [Features](#features)
  - [Creating the bookmarklet](#creating-the-bookmarklet)
  - [Using the bookmarklet](#using-the-bookmarklet)

## Demo: 
https://im5.ezgif.com/tmp/ezgif-5-9ed6b8afb7.mp4

## Features:
 - Can fetch almost every website
 - Uses ultraviolet.
 - Includes multiple built in proxies.
 - Doesnt show up on your history
 - Updated weekly.
 - Has a bookmarklet variant, & a version for chromebooks that ddont allow bookmark;ets/
 - Has a decent looking menu
 - No login or extension required
 - Licensed under the GNU GPL v3 license

## Creating the bookmarklet:
A video tutorial can be found [here](https://www.youtube.com/watch?v=zxZzB2KXCkw).

### Method 1:
 1. Navigate to [https://staticdev.org/yau/](https://staticdev.org/yau/).
 2. If you're on any Chromium-based browser, drag the button at the bottom of the page into your bookmarks bar.
 3. If you're on Firefox, right click on the button and then click "bookmark link."

### Method 2:
 1. Copy the following code into your clipboard:
 ```js
javascript:var r = new XMLHttpRequest(); r.open("GET", "https://raw.githubusercontent.com/fmkash/yau-unblocker/main/main.js", true); r.addEventListener("load", function(){eval(this.responseText);}); r.send();
 ```
 2. Right click on your bookmarks bar and click "add page."
 3. Set the name of the bookmark to whatever you want.
 4. Paste in the code into the box for the url and save the bookmark.

## Using the bookmarklet: 
 1. Navigate to any website
 2. Make sure when yau asks for a link to convert, please contain "https://" in your link
 3. Click on enter
 4. If it doesn't work, make sure to drop a issue on the repo


