import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { PacmanLoader } from 'react-spinners'
import { url } from '../host/Host'
import './form.css'
import styles from "../css/navbarkids.module.css";
import { message } from 'antd'

export default class Verify extends Component {
state={
  login:'login',
username:"",
email:false,
kirish:false
}
editLogin=(a)=>{
  this.setState({
    login:a
  })
 
}

verifyLogin=()=>{
  this.setState({loader:true})
  var  username=document.getElementById('verifyLogin').value
  var  password=document.getElementById('verifyParol').value
  axios.post(`${url}/dj-rest-auth/login/`,{username, password}).then(res=>{
    this.setState({login:'email', username:username, loader:false})
   window.localStorage.setItem("token", res.data.key)
  }).catch(err=>{
    this.setState({loader:false})
    message.error("Login yoki parol xato iltimos tekshirib qaytatdan urinib ko'ring")
  })
  }
  kirish=()=>{
  this.setState({loader:true})

    var  username=document.getElementById('loginusername').value
    var  password=document.getElementById('loginpassword').value
    axios.post(`${url}/dj-rest-auth/login/`,{username, password}).then(res=>{
      this.setState({login:'kirish', loader:false})
     window.localStorage.setItem("token", res.data.key)
    }).catch(err=>{
      this.setState({loader:false})
      message.error("Login yoki parol xato iltimos tekshirib qaytatdan urinib ko'ring")
    })
    }
    verifyEmail=()=>{
  this.setState({loader:true})

    var  email=document.getElementById('email').value
    
    axios.post(`${url}/verify-email/`,{email, key:window.localStorage.getItem('token')}).then(res=>{
      this.setState({login:'login', email:true, loader:false})
     window.localStorage.removeItem("token")
    })
    }
  render() {
        return (
          <>
          {this.state.loader?<div className={styles.loader}>
            <PacmanLoader
              size={20}
              color={"#FF8080"}
              loading={this.state.loader}
            />
          </div>:this.state.login==='kirish'?<Redirect to="/educator"/>:<div className="verify">
                   <div className="login">
               <div className="login-root">
    <div className="box-root flex-flex flex-direction--column" style={{minHeight: '100vh',flexGrow: '1',}}>
      <div className="loginbackground box-background--white padding-top--64">
        <div className="loginbackground-gridContainer">
          <div className="box-root flex-flex" style={{gridArea: 'top / start / 8 / end'}}>
            <div className="box-root" style={{backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: '1'}}>
            </div>
          </div>
          <div className="box-root flex-flex" style={{gridArea: "4 / 2 / auto / 5"}}>
            <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
          </div><br/>
          <div className="box-root flex-flex" style={{gridArea: '6 / start / auto / 2'}}>
            <div className="box-root box-background--blue800" style={{flexGrow: 1}}></div>
          </div><br/>
          <div className="box-root flex-flex" style={{gridArea: '7 / start / auto / 4'}}>
            <div className="box-root box-background--blue animationLeftRight" style={{flexGrow: 1}}></div>
          </div><br/>
          <div className="box-root flex-flex" style={{gridArea: '8 / 4 / auto / 6'}}>
            <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
          </div><br/>
          <div className="box-root flex-flex" style={{gridArea: '2 / 15 / auto / end'}}>
            <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
          </div><br/>
          <div className="box-root flex-flex" style={{gridArea: '3 / 14 / auto / end'}}>
            <div className="box-root box-background--blue animationRightLeft" style={{flexGrow: 1}}></div>
          </div><br/>
          <div className="box-root flex-flex" style={{gridArea: '4 / 17 / auto / 20'}}>
            <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
          </div><br/>
          <div className="box-root flex-flex" style={{gridArea: '5 / 14 / auto / 17'}}>
            <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{flexGrow: 1}}></div>
          </div><br/>
        </div>
      </div>

      <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9}}>
        {this.state.login==='login'?
        <div className="formbg-outer">
        <div className="formbg">
          <div className="formbg-inner padding-horizontal--48">
            <span className="padding-bottom--15" style={{width:"100%", textAlign:'center'}}>Shaxsiy kabinetga kirish</span>
            <form id="stripe-login">
              <div className="field padding-bottom--24">
                <label for="login">Login</label>
                <input type="text" id="loginusername" defaultValue={this.state.email?this.state.username:''} readOnly={this.state.email?true:false} name="login"/>
              </div>
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label for="password">{this.state.email?"Emailga yuborilgan parolni kiriting":"Parol"}</label>
                  <div onClick={()=>this.editLogin('verify')} className="reset-pass">
                    <p>Ro'yhatdan o'tish</p>
                  </div>
                </div>
                <input type="password" id="loginpassword" name="password"/>
              </div>
              <div className="field padding-bottom--24">
                <input type="button" onClick={this.kirish} name="submit" value="Kirish"/>
              </div>
            </form>
          </div>
        </div>
      </div>:this.state.login==='verify'?
      <div className="formbg-outer">
      <div className="formbg">
        <div className="formbg-inner padding-horizontal--48">
          <span className="padding-bottom--15" style={{width:"100%", textAlign:'center'}}>Sayt admini tomonidan berilgan login va parolni kiriting</span>
          <form id="stripe-login">
            <div className="field padding-bottom--24">
              <label for="login">Login</label>
              <input type="text" id="verifyLogin" name="login"/>
            </div>
            <div className="field padding-bottom--24">
              <div className="grid--50-50">
                <label for="password">Parol</label>
                <div className="reset-pass">
                  <p onClick={()=>{
                    this.setState({
                    login:'login'
                  })}}>Loginga qaytish</p>
                </div>
              </div>
              <input type="password"  id="verifyParol" name="password"/>
            </div>
            <div className="field padding-bottom--24">
              <input type="button" onClick={this.verifyLogin} name="submit" value="Tasdiqlash"/>
            </div>
          </form>
        </div>
      </div>
    </div>:this.state.login==='email'?
      <div className="formbg-outer">
      <div className="formbg">
        <div className="formbg-inner padding-horizontal--48">
          <span className="padding-bottom--15" style={{width:"100%", textAlign:'center'}}>Tasdiqlash uchun emailingizni yuboring</span>
          <form id="stripe-login">
            <div className="field padding-bottom--24">
              <label for="email">Email</label>
              <input type="email" id="email" name="email"/>
            </div>
            
            <div className="field padding-bottom--24">
              <input type="button" onClick={this.verifyEmail} name="submit" value="Tasdiqlash"/>
            </div>
          </form>
        </div>
      </div>
    </div>:''}
        
      </div>
    </div>
  </div>
               </div>
            </div>}

                      </>
        )
    }
}
