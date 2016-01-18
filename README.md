## fe-starter
A skeleton front-end application 

### Instructions
- Install [nodejs](https://nodejs.org)
- Install dependencies: `npm install`
- Install gulp: `npm install -g gulp`
- Run dev server: `gulp dev`

### Tests
You're recommended to test your React components. There are a couple examples in the `test` folder.
To run tests: `gulp test`. Alternatively, you can run `npm test`.

### ES6
You can develop modules and write tests using [ES6](https://github.com/lukehoban/es6features) syntax. In the background, [Babel](https://babeljs.io) is used to transpile to web-friendly ES5.   

### Styles
[Bootstrap](http://getbootstrap.com) is included by default but it's very easy to remove it. Simply go to `public/index.html` and remove the Bootstrap references.

In general, you can add new stylesheets (CSS or SCSS) in the `app/styles` folder. Each component can require these stylesheets individually. See example in `app/components/auth/login.js`. At build time, all required styles will be extracted and put in `dist/main.css`. 

## Git demo

Adds a line.
Add another line.
