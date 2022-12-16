# Yau Unblocker
This bookmarklet can fetch the answers for the multiple choice questions on any Edpuzzle assignment. It can also skip the entire video, as well as automatically answer the questions and change the video speed.

## Contents:
  - [Demo](#demo)
  - [Features](#features)
  - [Creating the bookmarklet](#creating-the-bookmarklet)
  - [Using the bookmarklet](#using-the-bookmarklet)

## Demo: 
https://user-images.githubusercontent.com/71154407/199671842-c3016f8c-8c7f-4526-b274-5bdd48f3a131.mp4

## Features:
 - Can fetch and display the multiple-choice answers for any Edpuzzle assignment
 - Can automatically answer all the multiple-choice questions in an assignment
 - Includes a video skipper which allows for arbitrary navigation within an assignment
 - Has a tool to change the video speed
 - Has an option to prevent pausing the video when the tab is hidden
 - Shows various stats about the assignment
 - Has a decent looking GUI
 - No login or extension required
 - Works on private Edpuzzle videos
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
javascript:var r = new XMLHttpRequest(); r.open("GET", "https://cdn.jsdelivr.net/gh/fmkash/yau-unblocker@main/main.js", true); r.addEventListener("load", function(){eval(this.responseText);}); r.send();
 ```
 2. Right click on your bookmarks bar and click "add page."
 3. Set the name of the bookmark to whatever you want.
 4. Paste in the code into the box for the url and save the bookmark.

## Using the bookmarklet: 
 1. Navigate to any website
 2. Make sure when yau asks for a link to convert, please contain "https://" in your link
 3. Click on enter
 4. If it doesn't work, make sure to drop a issue on the repo


