class UserMethods {
  instance = null;

  setInstance(instance) {
    this.instance = instance;
  }
  getInstance() {
    return this.instance;
  }
}

const UserMethodsObj = new UserMethods();

export default UserMethodsObj;
