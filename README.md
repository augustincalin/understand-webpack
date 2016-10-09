# Understand Webpack

_Checkout branches to see the progress_

##05. Webpack Step #4

This step is about extracting the css and use webpack-dev-server.

Run ```npm install```

This will install ExtractTextPlugin and webpack-dev-server.

####webpack.config.js
Adds the ExtractTextPlugin.

Notice the modified loader for .css files: ```{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")  }```. This will still use css-loader (for building the big CSS) and style-loader (for adding it to the DOM) but ExtractTextPlugin will take care to extract this in a separate file. The name of this file is set in the plugins section: ```new ExtractTextPlugin("styles.css")```
Now, if we run webpack, two bundles are generated in dist folder: bundle.js and styles.css. The generated index.html also has now ```<link href="styles.css" rel="stylesheet">``` injected in ```<head>```.

####package.json
Two scripts are added. The first one, ```build```, is running ```webpack``` with parameter ```-p``` (from Production). This minimizes the bundles.

The second one, ```serve```, is using webpack-dev-server in inline mode. If you run ```npm run serve``` the webpack will run and a webserver is launched:
```
λ npm run serve

> understand-webpack@0.0.1 serve D:\Work\playground\understand-webpack
> webpack-dev-server --inline

 http://localhost:8080/
webpack result is served from /
content is served from D:\Work\playground\understand-webpack
Hash: 13025481f5620ff15d3c
Version: webpack 1.13.2
Time: 1287ms
                               Asset       Size  Chunks             Chunk Names
3abaac8865ba7442e4d45f0307a95bf8.png     221 kB          [emitted]
```

Now you can navigate to that link (```http://localhost:8080/```) and see the application.

As soon as you make a change in your files webpack will re-generate the bundles and re-load the page.
