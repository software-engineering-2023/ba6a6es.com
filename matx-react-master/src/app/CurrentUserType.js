class CurrentUserType {
  static userType = sessionStorage.getItem('userType') || 'nouser';

  static setUserType(userType) {
    this.userType = userType;
    sessionStorage.setItem('userType', userType);
  }

  static getUserType() {
    return this.userType;
  }
}
export default CurrentUserType;
