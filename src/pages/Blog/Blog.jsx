/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <>
            <div className="container-xxl bg-white py-5">
                <div className="text-center">
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className="btn btn-warning text-white px-5 py-3 fw-bold" onClick={toPdf}>Generate & Download Pdf</button>}
                    </Pdf>
                </div>
                <section ref={ref} className="container-xxl bg-white py-5">


                    <h1>(i) <span className="color-primary">Uncontrolled vs Controlled Components:</span></h1>
                    <p className="answer px-5">
                        Uncontrolled components are form elements that manage their own state internally, without any help from React. The data is controlled by the DOM, and not by React. Controlled components, on the other hand, are form elements that are entirely controlled by React. The data for these components is handled through state and props.
                    </p>
                    <h1>(ii) <span className="color-primary">Validating React Props using PropTypes:</span></h1>
                    <p className="answer px-5">
                        PropTypes is a package that allows you to specify the data type and whether a prop is required or not for a component. You can use PropTypes to validate the type of data passed to a component`s props, making sure they are of the correct type and format. This helps to ensure that your components are receiving the expected data, and helps to prevent errors.
                    </p>
                    <h1>(iii) <span className="color-primary">Node.js vs Express.js:</span></h1>
                    <p className="answer px-5">
                        Node.js is a runtime environment for JavaScript, that allows developers to run JavaScript code outside of a browser. It provides a way to write server-side applications in JavaScript. Express.js, on the other hand, is a web framework built on top of Node.js. It provides a set of features for building web applications, such as routing, middleware, and templates.
                    </p>
                    <h1>(iv) <span className="color-primary">What is a custom hook, and why will you create a custom hook?</span></h1>
                    <h4 className='px-5'>Custom Hooks:</h4>
                    <p className="answer px-5">
                        Custom Hooks are a way to reuse stateful logic across multiple components. It is a function that starts with the word `use` and can use other hooks. By creating a custom hook, you can extract the stateful logic and reuse it across multiple components. This helps to reduce duplication and makes it easier to manage complex stateful logic.
                    </p>
                    <h4 className='px-5'>Why create a custom hook?</h4>
                    <p className="answer px-5">
                        Custom hooks are useful for abstracting complex logic from components and making them more reusable. You can create a custom hook to handle a specific use case or functionality that is used across multiple components. This makes it easier to maintain and update the codebase.
                    </p>
                </section>
            </div>
        </>
    );
};

export default Blog;