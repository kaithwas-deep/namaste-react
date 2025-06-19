import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id:"heading" }, "Namaste React");
console.log(heading);

// react element
const jsxHeading = (<h1 className="h1-tag" data-id="5" tabIndex="4">Namaste react from jsx</h1>);
console.log(jsxHeading);

// react component(starts with capital letter and it is a function that return jsx code or react element)
const HeadingComponent1 = () => {
    return <h1>Namaste react from heading component1</h1>; 
}

const elem = (
    <h2>react element conly</h2>
);

const Title = () => (
    <h1>This is title component!</h1>
)

// Component composition (calling of one component into another)
const HeadingComponent2 = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namaste react from heading component2</h1>
        <Title></Title>
        {elem}
        {Title()}
        {elem}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// calling of react element
root.render(jsxHeading);
// calling of react component
root.render(<HeadingComponent2/>)



// const h1 = React.createElement("h1", {id:"heading"}, "Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);

/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am an child1 h1 tag</h1>
 *          <h2>I am an child1 h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am an child2 h1 tag</h1>
 *          <h2>I am an child2 h2 tag</h2>
 *      </div>
 * </div>
 */

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     [
//         React.createElement(
//             "div",
//             {id:"child1", key:"ch1"},
//             [
//                 React.createElement(
//                     "h1",
//                     {key:"ch1h1"},
//                     "I am an child1 h1 tag"
//                 ),
//                 React.createElement(
//                     "h2",
//                     {key:"ch1h2"},
//                     "I am an child1 h2 tag"
//                 )
//             ]
//         ),
//         React.createElement(
//             "div",
//             {id:"child2", key:"ch2"},
//             [
//                 React.createElement(
//                     "h1",
//                     {key:"ch2h1"},
//                     "I am an child2 h1 tag"
//                 ),
//                 React.createElement(
//                     "h2",
//                     {key:"ch2h2"},
//                     "I am an child2 h2 tag"
//                 )
//             ]
//         )
//     ]
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);