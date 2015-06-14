var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Register = React.createClass({

    render: function() {
        var style = {
            paddingTop:'100px'
        }
        alert(1)
        return (
            <div>
                <div style={style}>123123123</div>
                <RouteHandler />
            </div>
        );
    }

});

module.exports = Register;