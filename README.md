# Understand Webpack

_Checkout branches to see the progress_

##03. Webpack Step #2

This step is about loading styles.

Run ```npm install```

This will install css-loader, file-loader and style-loader.

####webpack.config.js
Adds two loaders; the first one will be fired when a .css file is encountered. The second one, when a .png.

####index.html
The CSS style is not referenced anymore. That's because style-loader will take care of the styles (in fact it will add them in the bundle and will make sure they are applied properly).

####main.js
Because we removed ```<link href="assets/styles/style.css" rel="stylesheet">``` from index.html, webpack has no chance to add it to the bundle. Therefore we require assets/styles/style.css from main.js: ```require('../assets/styles/style.css');```. When webpack encounters this line it will fire ```{test:/\.css$/, loader:'style!css'}``` (defined in webpack.config.js). The loaders are separated by exclamation mark and will be executed from right to left. The first one, css-loader, is building a big CSS from all the .css files it encounters. If one of these CSS file contains ```@import``` or ```url(...)``` it will treat them as ```require(...)``` and therefore will visit them as well, adding stuff to the big CSS. The second loader -- css-loader -- will include this big CSS in the final bundle.

Now, our CSS file references a picture: ```background: url('../images/background.png')...```. As we saw above css-loader will try to visit background.png and add it to the big CSS somehow. But it has no idea how to deal with png files -- here comes to the rescue the next loader defined in webpack.config.js: ```{test:/\.png$/, loader:'file'}```. What this loader is doing is just copying the file as it is to the dist folder. Ok, not exactly as it is but with a different name (a hash) -- anyway it makes sure that whoever reference this file will have the reference updated (for example: style.css has a selector --body -- referencing ../images/background.png. After the css-loader makes the big CSS this big CSS will contain a selector body referencing a picture named something like 3ab88..bf8.png and this picture will be created in dist folder because of the file-loader).

Run again ```webpack```. If you reload the dist/index.html in your browser you will notice that the styles are applied (including the background) but the picture of Frankfurt is still missing.


_In the next episode we will see how to include pictures_
