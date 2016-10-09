# Understand Webpack

_Checkout branches to see the progress_

##02. Webpack Step #1

The first step is to create a bundle.

Run ```npm install```. This will install webpack and html-webpack-plugin.

####webpack.config.js
This file configures webpack.

**entry** is the starting point. Webpack will start from here and follows all ```require```, ```url(...)``` (btw, webpack knows AMD format as well) to find all the refered files and build the bundle.

**output.path** is the path where the built application will be saved.

**output.filename** the name of the bundle.

**HtmlWebpackPlugin** If you have a look at index.html you will see the ```<script src="app/main.js"></script>``` is removed. That's because this plugin will inject it for us. Actually the plugin will emit a new file for us in dist folder based on the ```template```.

####index.html
The ```<script src="app/main.js"></script>``` is removed. A change we made is that the button is not calling anymore directly the function from ```main.js```. Instead the ```main.js``` is assigning ```onclick``` of that button.

####main.js
As stated above now the main.js is assigning the ```onclick``` event handler to the ```reserveButton``` element.

Run ```webpack```. In your dist folder two files are generated: the ```bundle.js``` and ```index.html```.

Load the dist/index.html in your browser. It looks ugly (no styles applied, no images loaded) but if you click on Reserve you will see the alert. That's because HtmlWebpackPlugin inserted ```<script src="bundle.js" type="text/javascript"></script>``` automatically.

_In the next episode we will see how to include styles_
