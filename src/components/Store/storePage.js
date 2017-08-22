"use strict";


var React = require('react');


var Heading1 = React.createClass({
    render: function () {
        return (
            <div className="headingdiv1">
            <h1>MURU   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; SISU   &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;FUFU</h1>
            </div>    
        );
    }
});



var Heading2 = React.createClass({
    render: function () {
        return (
            <div className="headingdiv1">
            <h1>&nbsp; €30   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; €30   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;€30</h1>
            </div>    
        );
    }
});

/*
var Heading2 = React.createClass({
    render: function () {
        return (
            <div className="headingdiv2">
            <h1>SISU</h1>
            </div>    
        );
    }
});

var Heading3 = React.createClass({
    render: function () {
        return (
            <div className="headingdiv3">
            <h1>FUFU</h1>
            </div>    
        );
    }
});

var Headingsdiv = React.createClass({
    render: function () {
        return (
            <div>
            <Heading1 />
            <Heading2 />
            <Heading3 />
            </div>    
        );
    }
});

*/



var Box1 = React.createClass({
    render: function () {
        return (
            <div className="product1bgdiv">
            <img className="img1" src="../images/1.jpg" > </img>
            </div>    
        );
    }
});

var Box2 = React.createClass({
    render: function () {
        return (
            <div className="product2bgdiv">
            <img className="img1" src="../images/3.jpg" > </img>
            </div>    
        );
    }
});

var Box3 = React.createClass({
    render: function () {
        return (
            <div className="product3bgdiv">
            <img className="img1" src="../images/2.jpg" > </img>
            </div>    
        );
    }
});




var Container = React.createClass({
    render: function () {
        return (
             <div className="storediv">
              <Box1 />
              <Box2 />
              <Box3 />
             </div>     
        );
    }
});


var Store = React.createClass({
    render: function () {
        return (
            <div>
            <Container />
            <div>
            <Heading1 />
            </div>
            <div>
            <Heading2 />
            </div>
            </div>
        );
    }
});


module.exports = Store;