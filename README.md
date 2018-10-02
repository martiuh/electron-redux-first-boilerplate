## electron-refiro

![Homescreen](./screen.jpg)

Simple boilerplate for starting an Electron app using:

* [React](https://www.npmjs.com/package/react)
* [Redux](https://www.npmjs.com/package/redux)
* [Redux-First-Router](https://www.npmjs.com/package/redux-first-router)
* [Glamor](https://www.npmjs.com/package/glamor)
* [Glamorous](https://www.npmjs.com/package/glamorous)

It's all packed with `webpack 4`

### Get started

 ```
 git clone git@github.com:martiuh/electron-refiro.git
 cd electron-refiro
 yarn # npm i
 yarn start # npm start
 ```

This boilerplate is not ready yet. Right now it only synchronous reads (in `src/configureStore.js`) the `./workspace` folder and pours the result into the state.

I'm planning on do a some sort of explorer where you can only create `.txt` files and folders inside the defined folder and that's it.

This, only to prove that it's an Electron app, working with `fs` and `path` in the 'client' side, you just need to create or destroy files or folders in the directory './workspace' and while the app is running, you can see in real time what's happening.

## About `__dirname`
If you are referencing some file or directory using node's `path`, keep in mind that the current location of your file doesn't matter, the `__dirname` path is taken from the place where your `.html` file is located.

## TODO
* Finish the whole damn app
* Support for `css` `sass`
* `file-loader` support
* ~~Production build~~
* ... More

**Special thanks to chentsulin's  [`electron-react-boilerplate`](https://github.com/chentsulin/electron-react-boilerplate)**
