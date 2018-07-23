// // PLAIN OL Javascript DOM Programming CODE
// let hello = document.createElement('h1')

// hello.textContent = "What up"


// // jQuery Styles for ya boi
// let jqHello = $("<h1>", {
//     text: "AYYYYYY NIGGA"
// });


// *REACT* - aka the real way
// Well wil start by building the old way and slowly transform the code into react code.

// The second argument is where you assign other attributes for the element you're making
    // syntax {attribute: "<attributename>"}


// let item = h("li", null, "Roach Legs (Back-Left Only)");
// let itme2 = h("li", null, "Cactus Spines")

// this is just to make life easier so you dont have to type "React.createEleement" a bunch of times.
// createElement(<element>, <attirbute>, <children>)
const h = React.createElement;

let kebabs = [
    "Roach Legs (Back-Left Only)",
    "Cactus Spines",
    "Nail (1)"
];
// Turn a kebab item into a vitrual DOM element
// .map will transoform an array it's given and spit back a new one
// let items = kebabs.map((k) => {
//     let vItem = h("li", null, k)
//     return vItem;
// });

// Make the thing (these are virtual DOM elements)
// let title = h("h1", null, "Kebabs");
// let list = h("ul", null, items);

let main = h("div", null, [
    h("h1", {className:"header"}, "Kebabs"), 
    h("ul", null, kebabs.map((k) => h("li", null, k))), //<-- an "implicit return" is being made with this arrow function. Very much short-hand. Very stylish.
    h("img", {src: "", className: "kebab-image"})
]);

// JSX - Looks like HTML but it's actually just a bunch of function calls and virtual dom elements

let main2 = (<div>
    <h1 classNmame = "header"> Kebabs, Nigga</h1>
    <ul>
        {kebabs.map((k) => h("li", null, k))}
    </ul>
    </div>)

// Draw the thing to the screen
ReactDOM.render(main, document.querySelector("[data-root]"));
