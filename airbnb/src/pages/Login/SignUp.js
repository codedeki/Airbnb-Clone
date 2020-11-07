import React, {Component} from 'react';
import './Login.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../actions/openModal';
import regAction from '../../actions/regAction';

import Login from './Login';
import axios from 'axios';
import swal from 'sweetalert';

class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            lowerPartOfForm: ""
        }
    }

    componentDidMount() {
        this.setState({
            lowerPartOfForm: <button type="button" onClick={this.showInputs} className="sign-up-button">Sign up with email</button>
        })
    }

    changeEmail = (e) => this.setState({email: e.target.value});
    changePassword = (e) => this.setState({password: e.target.value});


    showInputs = () => {
        this.setState({
            lowerPartOfForm: <SignUpInputFields 
            changeEmail={this.changeEmail} 
            changePassword={this.changePassword}
            />
        })
    }

    submitLogin = async (e) => {
        e.preventDefault();
        // console.log(this.state.email);
        // console.log(this.state.password);
        const url = `${window.apiHost}/users/signup`;
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const res = await axios.post(url, data);
        const token = res.data.token;

        // const url2 = `${window.apiHost}/users/token-check`;
        // const res2 = await axios.post(url2, {token});

        if (res.data.msg === "userExists") {
            swal({
                title: "Email exists.",
                text: "That email is already registered.",
                icon: "error",
            })
        } else if (res.data.msg === "invalidData") {
            swal({
                title: "Invalid email/password.",
                text: "Please provide a valid email and password.",
                icon: "error",
            })
        } else if (res.data.msg === "userAdded"){
            swal({
                title: "Success!",
                icon: "success",
            })
            this.props.regAction(res.data)
        }

    }

    render(){

        console.log(this.props.auth)
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    {this.state.lowerPartOfForm}
                    <div className="divider"></div>
                    <div></div>
                    <div>Already have an account?<span className="pointer" onClick={()=>{this.props.openModal('open',<Login />)}}> Log In</span></div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal,
        regAction: regAction,
    },dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const SignUpInputFields = (props) => {
    return(
        <div className="sign-up-wrapper">
            <div className="col m12">
                <div className="input-field" id="email">
                    <div className="form-label">Email</div>
                    <input type="text" placeholder="Email" onChange={props.changeEmail}/>
                </div>
            </div>
            <div className="col m12">
                <div className="input-field" id="password">
                    <div className="form-label">Password</div>
                    <input type="password" placeholder="password" onChange={props.changePassword}/>
                </div>
            </div>
            <div className="col m12">
                <button type="submit" className="btn red accent-2">Sign Up!</button>
            </div>
        </div>    
    )
}