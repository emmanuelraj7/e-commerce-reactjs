"use strict";

var React = require('react');




var Body1 = React.createClass({
    render: function() {
        return (
            <div>
            <p className="dashiki">Dashiki is a lifestyle.Either complain in the dark OR decide to shine.</p>
            </div>    
        );
    }
});

var Body2 = React.createClass({
    render: function(){
        return (
            <div>
            <h1 className="raj"> Celebrate life </h1>     
            </div>
        );
    }
});



var Portrait1 = React.createClass({
    render: function() {
        return (
            <div id="page1mp"><img src="../images/portrait-mobile.png" > </img></div>   
        ); 
    }
});

var Portrait2 = React.createClass({
    render: function() {
        return (
               
            <div id="page1dp"><img src="../images/portrait-desktop.png" > </img></div>
        
        ); 
    }
});

var Button = React.createClass({
    render: function(){
        return (
            <div className="shop-button-div">
            <button className="shop-button" type="button"> Store </button>     
            </div>
        );
    }
});


var Home = React.createClass({
    render: function() {
        return (
            <div>
                <Body1 />
                <Body2 />
                <Portrait1 />
                <Portrait2 />
                <Button />
         </div>
        );
    }
});


module.exports = Home;