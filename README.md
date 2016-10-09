# Understand Webpack


_Checkout branches to see the progress_

This is a short tutorial about Webpack. It is organized in branches so you have to checkout each one in order to see the progress.

For all the branches the folder structure is the same:
```
\
│   package.json
├───dist
└───src
    │   index.html
    ├───app
    │       main.js
    └───assets
        ├───images
        │       background.png
        │       frankfurt.jpg
        └───styles
                style.css
```
**dist** folder will contain the "built" application. It's enough to copy the content of this application to a web server.

**src** contains the sources

**app** is the src subfolder containing the executable code (that's it, the javascript)

**assets** contains styles, pictures, fonts used in the application.

The application is just a simple HTML page having some CSS styles, 2 pictures and one button that displays an alert when clicked.
### Steps
#####01.Initial
This is the initial application.
#####02.WebpackStep1
Webpack is used to create the bundle.
#####03.WebpackStep2
CSS is included in the bundle; referred pictures in the CSS are also part of the dist folder.
#####04.WebpackStep3
Some pictures are just copied over from src to dist.
#####05.WebpackStep4
CSS styles are extracted from the bundle and webpack-dev-server is added.

###List of useful loaders and plugins
Loader / **Plugin** | Purpose
---|---
**ExtractTextPlugin** | for extracting text from the bundle
file-loader | emits a file in the output folder
url-loader | can embed the file into the bundle as a base-64 encoded string if the size is smaller than the one specified as a parameter. If the size is bigger then file-loader is used
**CopyWebpackPlugin** | copies the files as they are
css-loader | "knows" to add css files to bundle
style-loader | adds <style> to the html page

_In the next episode we will see how to add webpack_
