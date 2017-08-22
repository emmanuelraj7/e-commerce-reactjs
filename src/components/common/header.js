"use strict";

var React = require("react");

var Navigation = React.createClass({
    render: function (){
        return (
            <nav class="navbar navbar-dark">
                    <div className="container-fluid">
                        
                    <a href="/" className="navbar-brand">
                    <img src="../images/dashiki.png" />
                    </a>

                    <ul className="nav navbar-nav navitems">
                           <li><a href="/">Home</a></li>
                           <li><a href="/">Store</a></li>
                           <li><a href="/">Contact</a></li>

                    </ul>    
                    </div>
                </nav>    
        );
    }
});


var Navstrip = React.createClass({
   render: function () {
       return (
           <div className="betweennavbarandstrip">
               <img id="navstrip" src="../images/navstrip.png" ></img>
           </div>    
       );
   }
});


var Header = React.createClass({
   render: function () {
       return (
           <div>
           <Navigation />
           <Navstrip />
           </div>   
       );
   }
});

module.exports = Header;