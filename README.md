# Understand Webpack

_Checkout branches to see the progress_

##04. Webpack Step #3

This step is about adding pictures to dist folder.

Run ```npm install```

This will install CopyWebpackPlugin.

####webpack.config.js
Adds the CopyWebpackPlugin.

In our index.html we reference a picture (assets/images/frankfurt.jpg). Because this image is not required, webpack has no chance to include it in the dist folder in any way. index.html from src folder is used as a template by CopyWebpackPlugin to emit a corresponding index.html in dist folder but the image src remain unmodified. Therefore we can use CopyWebPlugin to copy also the frankfurt.jpg in the right folder under dist.

**Note:** This is just an example. We are copying the frnkfurt.jpg picture from src/assets/images to assets/images/frankfurt. In a real application we can use html-loader. Because we referenced a .png in our styles and a .jpg in our <img src=...> this will be good enough for this example.

Run again ```webpack``` and reload dist/index.html. The page looks fine, everything is in place.


_In the next episode we will see how to extract the css from the bundle and use webpack-dev-server_
