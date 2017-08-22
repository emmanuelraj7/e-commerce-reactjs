"use strict";


var React = require('react');


var Box1 = React.createClass({
    render: function () {
        return (
            <div className="bigcartbox">
            <img className="img1" src="../images/4.png" > </img>
            </div>    
        );
    }
});

var Smallbox1 = React.createClass({
    render: function () {
        return (
            <div className="smallbox1cart">
            <img className="img1" src="../images/5.jpg" > </img>
            </div>    
        );
    }
});


var Smallbox2 = React.createClass({
    render: function () {
        return (
            <div className="smallbox2cart">
            <img className="img1" src="../images/5.jpg" > </img>
            </div>    
        );
    }
});

var Infobox = React.createClass({
    render: function () {
        return (
            <div className="infoboxsale">
            <h1 className="saleboxhead">MURU</h1> 
            <div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget <br />
                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur <br />
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla <br />
                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. <br />
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede.
                </p> 
            </div>
            <div>
            <h2> €30 </h2>
            <p> Delivered within 3 days </p>    
            <img alt="Visa Checkout" class="v-button" role="button"
            src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png"/>
            </div>    
            </div>    
        );
    }
});



var Cart = React.createClass({
    render: function () {
        return (
            <div>
            <Box1 />
            <br />
            <Smallbox1 />  
            <Smallbox2 />
            <Infobox />
            </div>  
        );
    }
});



module.exports = Cart;