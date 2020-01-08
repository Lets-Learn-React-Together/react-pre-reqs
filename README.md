# React Prerequisites
React is one of the most popular web frameworks in the world! It's really, really, _really_ fun, but without some base knowledge the React development flow can be intimidating. We won't get into React specifics in this repo, but we will cover topics vital to being a React Developer.

## Objectives:
- List and describe the 3 main languages of the web
- Describe the DOM
- Understand how JavaScript interacts with the DOM via DOM manipulation
- Understand the difference between imperative and declarative code

## 
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

Check out a list of (all HTML tags)[https://www.w3schools.com/tags/]. This will come in handy when writing JSX in React components.

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

### Coming Together
![its all coming together meme](https://i.kym-cdn.com/photos/images/original/001/561/446/27d.jpg)
Back in the old days it was _really_ important to separate concerns. Javascript stays in `.js` files and HTML stays in `.html` files and never the twain shall meet.

_But what about script tags (`<script/>`) and `onclick` attributes?_ I hear you ask. Good question. These are antipatterns and in traditional web development this was frowned upon. This is _very_ different from how React and JSX operates. 
