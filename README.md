# React Prerequisites
React is one of the most popular web frameworks in the world! It's really, really, _really_ fun, but without some base knowledge the React development flow can be intimidating. We won't get into React specifics in this repo, but we will cover topics vital to being a React Developer.

## Objectives:
- List and describe the 3 main languages of the web
- Describe the DOM
- Understand how JavaScript interacts with the DOM via DOM manipulation
- Understand the difference between imperative and declarative code

## Web Languages
The 3 Main languages of the web are:
1. HTML: the structure
2. CSS: the style
3. JS: the behavior

### HTML
```html
<html>
  <body>
    <p>Hi</p>
  </body>
</html>
```
Above is as basic an HTML framework as you can get. HTML is a semantic tag-based markup language. Tags are nested within each other. It's semantic because when you develop you should use the right tag for the job. You can make any HTML tag have any behavior you want, but this is an antipattern. If you want to have a link that takes you to a new webpage you could add some handy CSS and a JS click event to a paragraph element (`<p></p>`), but really you should use the anchor element (`<a></a>`).

Check out a list of [all HTML tags](https://www.w3schools.com/tags/). This will come in handy when writing JSX in React components.

### CSS
![css gif](https://media0.giphy.com/media/13FrpeVH09Zrb2/source.gif)
```css
p {
  color: red;
  font-size: 24px;
}
```
CSS is a styling language that targets HTML nodes and applies styles to them. Nodes are targeted using selectors. In the example above `p` is the selector. You can target nodes based on pretty much anything; tag name, class name, id, attributes, and tons more!  CSS gets tricky because the styling rules "cascade," meaning that the above rule would apply to _all_ paragraph elements on the page. each selector has a different specificity. More specific rule will overwrite less specific rules.
For example: 
```css
body p {
  color: blue;
}
```
This rule would overwrite the first rule and our paragraph element would be blue. Check out a [list of common CSS properties](https://www.w3schools.com/cssref/).

#### Specificity Chart
![specificity chart](https://sites.google.com/site/csskungfu/_/rsrc/1221742532694/specificity/specificity.gif)
 
### JS
JavaScript controls the behavior of elements - it decides what things _do_. There's a lot of wariness around JavaScript, but it has undergone an incredible transformation in the last 5 years. The advent of ES2015/ES6 introduced tons of modern features that make programming in JavaScript much easier.

### Coming Together
![its all coming together meme](https://i.kym-cdn.com/photos/images/original/001/561/446/27d.jpg)

Back in the old days it was _really_ important to separate concerns. Javascript stays in `.js` files and HTML stays in `.html` files and never the twain shall meet.

_But what about script tags (`<script/>`) and `onclick` attributes?_ I hear you ask. Good question. These are antipatterns and in traditional web development this was frowned upon. This is _very_ different from how React and JSX operates. 

## Imperative vs. Declarative
In React - the flow of information is unidirectional. What does that mean?

In the view, a user clicks a button, which updates state. Clicking the button has no effect whatsoever on the view - it only changes _state_. This causes a rerender, which means a new view is created based on the information in state. The information controls the presentation.

The view should be a certain way given a certain state. State is central and a single update can affect multiple portions of the view. Whereas in imperative programming you may have to select individual items and update them accordingly.

The downside is a lot of repeated work. Each time state changes, a new view is generated. Computationally, this is much more expensive than imperative programming. DOM manipulation is very expensive, so we want to touch as little of the DOM as possible. So how is React viable, then? *The virtual DOM!*

What is a virtual dom?

A virtual DOM is like the DOM, but it doesn't actually render to the screen. On every update, React looks at the virtual DOM, creates a diff with the real DOM, and makes the smallest possible change. It's not as fast as doing it manually, but it's much less likely to have bugs.

# Creating your own React project
The most common way of starting any React project is to use the
`create-react-app` command to bootstrap a folder structure. The tools you need
are

* `node`, a server-side javascript implementation (`brew install node`)
* `npm`, the javascript package manager (`brew install npm`)
* `npx`, like `npm`, but if you want to run one a node module without
  installing it first (should be installed with `npm`)

Let's make our own project, and start the development server

```console
$ npx create-react-app my_project
<... lots of text ...>
$ cd my_project
$ npm run start
```

At this point, your browser should open up. If it doesn't, manually navigate to
http://localhost:3000.

![image of react app up and running](https://user-images.githubusercontent.com/2654835/74282190-91232a00-4cd4-11ea-8dcb-2a474ed7417a.png)

Neat, but what just happened? `create-react-app` generated a project skeleton
for us.

```console
$ tree -L 1
.
├── README.md
├── node_modules
├── package.json
├── public
├── src
└── yarn.lock

3 directories, 3 files
```

Running `npm run start` tells `npm` to look at the project manifest file
(`package.json`) and run the `start` script defined there. In this case, the
script points to `react-scripts start`

```console
$ grep start package.json
    "start": "react-scripts start",
```

## Hot reloading and the virtual DOM
Earlier we talked about the virtual DOM, and how it makes our lives easier. You
can see this in action by editing `src/App.js`, making a change, and watching
the browser update its contents without having to refresh.
