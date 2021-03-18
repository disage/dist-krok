import { makeAutoObservable } from 'mobx';

class Auth {
  userLogin = '';
  userPassword = '';
  isLoggined = false;
  constructor() {
    makeAutoObservable(this);
  }
  setCurrentUser(email, password) {
    this.userLogin = email;
    this.userPassword = password;
    this.isLoggined = true;
  }
  clearCurrentUser() {
    this.userLogin = '';
    this.userPassword = '';
    this.isLoggined = false;
  }
}
export default new Auth();
