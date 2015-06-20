var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var request = require('reqwest')
var mui = require('material-ui')
var lang = require('../lang.jsx')
var Colors = mui.Styles.Colors
//组件
var FullWidthSection = require('../../components/full-width-section.jsx')
var {ClearFix} = mui

var Home = React.createClass({

    render: function() {
        return (
            <ClearFix>
            </ClearFix>
        );
    }

});

module.exports = Home;
