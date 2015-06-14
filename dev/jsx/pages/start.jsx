var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var request = require('reqwest')
var mui = require('material-ui')
var lang = require('../lang.jsx')
var Colors = mui.Styles.Colors
//组件
var FullWidthSection = require('../components/full-width-section.jsx')
var {TextField, Tabs, Tab, RaisedButton, Paper, Dialog, FlatButton} = mui


var Start = React.createClass({
    getStyles: function(){
       var paperR = 200
        var paperM = 50
        return {
            top: {
                background: 'url(images/azure_bg.png) no-repeat center top',
                backgroundSize: 'cover',
                overflow: 'hidden'
            },
            middle: {
                fontFamily: 'siyuanjixi',
                backgroundColor: Colors.lightBlue50
            },
            contain: {
                width: '100%',
                position: 'relative',
                margin: '0 auto',
                height: '350px',
            },
            cloud1: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: '300px'
            },
            cloud2: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: '-600px'
            },
            footer: {
                backgroundColor: Colors.blueGrey900,
                textAlign: 'center',
                fontSize: '1em',
                color: Colors.blueGrey50
            },
            h1: {
                textAlign: 'center',
                fontSize: '3em',
                lineHeight: '1.1',
                color: Colors.grey800,
                fontWeight: '300',
                whiteSpace: 'nowrap'
            },
            h1des:{
                fontSize: '1.5em',
                color: Colors.grey800,
                textAlign: 'center'
            },
            h2: {
                fontSize: '3em',
                whiteSpace: 'nowrap',
                verticalAlign: 'top',
                lineHeight: '1.1'
            },
            descript: {
                fontSize: '1.5em',
            },
            box: {
                fontFamily: 'siyuanjixi',
                width: '500px',
                position: 'absolute',
                left: '50%',
                top: '0',
                margin: '0 0 0 -250px',
                padding: '0',
                textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                color: 'white',
            },
            logo1: {
                verticalAlign: 'top',
                margin: '0.1em 10px 0 -1em'
            },
            tabs: {
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative'
            },
            tab: {
                textShadow: 'none',
                fontFamily: 'siyuanjixi',
                fontSize: '2em'
            },
            tabin: {
                textShadow: 'none',
                background:'#fff',
                height:'215px',
                borderRadius: '0 0 10px 10px',
                textAlign:'center'
            },
            input: {
                marginTop: '-15px'
            },
            inputin: {
                fontFamily: 'Roboto, sans-serif'
            },
            btn: {
                fontFamily: 'siyuan'
            },
            paper: {
                position: 'relative',
                height: (paperR + paperM)*2,
                marginTop: '50px',
                color: Colors.grey800,
                lineHeight: '2'
            },
            paper1: {
                width: paperR,
                height: paperR,
                padding: '30px 0 40px 0',
                textAlign: 'center',
                position: 'absolute',
                left: '50%',
                top: '0',
                marginLeft: -paperR-paperM
            },
            paper2: {
                width: paperR,
                height: paperR,
                padding: '30px 0 40px 0',
                textAlign: 'center',
                position: 'absolute',
                left: '50%',
                top: '0',
                marginLeft: paperM
            },
            paper3: {
                width: paperR,
                height: paperR,
                padding: '30px 0 40px 0',
                textAlign: 'center',
                position: 'absolute',
                left: '50%',
                top: paperR+paperM,
                marginLeft: -paperR-paperM
            },
            paper4: {
                width: paperR,
                height: paperR,
                padding: '30px 0 40px 0',
                textAlign: 'center',
                position: 'absolute',
                left: '50%',
                top: paperR+paperM,
                marginLeft: paperM
            },
            h5:{
                fontFamily: 'Roboto, sans-serif',
            },
            dialog:{
                maxWidth:'75%',
                width: '360px',
                fontFamily: 'siyuanjixi'
            }
        }
    },
    getInitialState: function(){
        return {
            codeMsg:'',
            codeErr:''
        }
    },
    render: function() {
        var styles = this.getStyles()
        var codeActions = [
            <FlatButton
                label={lang.btn[2]}
                secondary={true}
                onTouchTap={this._handleCodeDiaClose}
                style={styles.btn} />,
            <FlatButton
                label={lang.btn[3]}
                primary={true}
                onTouchTap={this._handlecodeDiaSubmit}
                style={styles.btn} />
        ]
        return (
            <div>
                <FullWidthSection style={styles.top}>
                    <div style={styles.contain}>
                        <img style={styles.cloud1} src="images/cloud-1.png" width="300"/>
                        <img style={styles.cloud2} src="images/cloud-2.png" width="300"/>
                        <div style={styles.box}>
                            <h2 style={styles.h2}>
                                <img style={styles.logo1} src="images/logo.png" width="42"/>
                                {lang.logo[0]}<br/>
                            </h2>
                            <p style={styles.descript}>
                                {lang.slogan[0]}
                            </p>
                            <Tabs style={styles.tabs} initialSelectedIndex={1}> 
                                <Tab label={lang.login[0]} style={styles.tab}> 
                                    <div style={styles.tabin}>
                                        <TextField
                                            hintText={lang.login[2]}
                                            floatingLabelText={lang.login[3]}
                                            inputStyle={styles.inputin} />
                                        <TextField
                                            type='password'
                                            style={styles.input}
                                            hintText={lang.login[4]}
                                            floatingLabelText={lang.login[5]}
                                            inputStyle={styles.inputin} />

                                            <br /><br />

                                        <RaisedButton label={lang.btn[0]} containerStyle={styles.btn} primary={true} />
                                    </div> 
                                </Tab> 
                                <Tab label={lang.login[1]} style={styles.tab}> 
                                    <div style={styles.tabin}>
                                        <TextField
                                            ref="newPhone"
                                            hintText={lang.login[6]}
                                            floatingLabelText={lang.login[7]}
                                            inputStyle={styles.inputin} />

                                            <br /><br />

                                        <RaisedButton label={lang.btn[1]} onClick={this._handleQuickLogin} containerStyle={styles.btn} primary={true} />      
                                        <Dialog
                                            contentStyle={styles.dialog}
                                            ref="codeCheck"
                                            title={this.state.codeMsg}
                                            actions={codeActions}>
                                            <TextField
                                                ref="phoneCode"
                                                errorText={this.state.codeErr}
                                                hintText={lang.login[8]}
                                                floatingLabelText={lang.login[9]}
                                                inputStyle={styles.inputin} 
                                                onChange={this._handleCodeCheck} />
                                        </Dialog>
                                    </div> 
                                </Tab> 
                            </Tabs> 
                        </div>
                    </div>
                </FullWidthSection>
                <FullWidthSection style={styles.middle}>
                    <h1 style={styles.h1}>
                        {lang.start[0]}
                    </h1>
                    <p style={styles.h1des}>
                        {lang.start[1]}
                    </p>
                    <div style={styles.paper}>
                        <Paper style={styles.paper1} zDepth={0} circle={true}>
                            <h5 style={styles.h5}>{lang.start[2]}</h5>
                            <p>{lang.start[3]}<br/>{lang.start[4]}<br/>{lang.start[5]}</p>
                        </Paper>
                        <Paper style={styles.paper2} zDepth={0} circle={true}>
                            <h5 style={styles.h5}>{lang.start[6]}</h5>
                            <p>{lang.start[7]}<br/>{lang.start[8]}<br/>{lang.start[9]}<br/>{lang.start[10]}</p>
                        </Paper>
                        <Paper style={styles.paper3} zDepth={0} circle={true}>
                            <h5 style={styles.h5}>{lang.start[11]}</h5>
                            <p>{lang.start[12]}<br/>{lang.start[13]}<br/>{lang.start[14]}</p>
                        </Paper>
                        <Paper style={styles.paper4} zDepth={0} circle={true}>
                            <h5 style={styles.h5}>{lang.start[15]}</h5>
                            <p>{lang.start[16]}<br/>{lang.start[17]}<br/>{lang.start[18]}</p>
                        </Paper>
                    </div>
                    <p style={styles.h1des}>
                        {lang.start[19]}
                    </p>
                </FullWidthSection>
                <FullWidthSection style={styles.footer}>
                    <p>{lang.footer[0]} <img style={styles.logo2} src="images/logo.png" width="16"/></p>
                </FullWidthSection>
                <RouteHandler />
            </div>
        )
    },
    _handleQuickLogin: function(){
        var that = this
        request({
            url:'http://127.0.0.1:8085/login/?callback=?',
            type: 'jsonp',
            data: {
                phone: this.refs.newPhone.getValue(),
                mode: 'quick'
            }

        })
        .then(function(data){
            that.setState({
                codeMsg: data.msg
            })
            that.refs.codeCheck.show()
            console.log(data)
        })
    },
    _handleCodeDiaClose: function(){
        this.refs.codeCheck.dismiss()
    },
    _handlecodeDiaSubmit: function(){
        this._handleCodeCheck()
    },
    _handleCodeCheck: function(){
        var value = this.refs.phoneCode.getValue()
        var isNumeric = !isNaN(parseFloat(value)) && isFinite(value)
        this.setState({
            codeErr: (isNumeric && value.length == 4) ? '' : lang.login[10]
        })
    }

})

module.exports = Start
