class CurrentUserType {
  static userType = localStorage.getItem('userType') || 'nouser';

  static setUserType(userType) {
    this.userType = userType;
    localStorage.setItem('userType', userType);
  }

  static getUserType() {
    return this.userType;
  }
}
export default CurrentUserType;
