const validateEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(email);
};

const validatePassword = (password) => {
    // var regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

    //should contain atleast 6 characters
    // const regEx = /^.{6,}$/;

    //can contain alphanumeric and special characters
    // const regEx = /^[a-zA-Z0-9`~!@#$%^&*()\-_=+{}[\]\\;:'",<.>/?]/;
    const regEx = /^[\w`~!@#$%^&*()\-_=+{}[\]\\;:'",<.>/?]{1,}$/;
    return regEx.test(password);
};

const validateMobileNumber = (mobileNo) => {
    //should contain atleast 10 characters
    // const regEx = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    // const regEx = /^.{9,}$/;
    const regEx = /^[+\d]\d{5,}$/;
    // const regEx = /^([0|\+[0-9]{1,5})?([7-9][0-9]{5,})$/;
    return regEx.test(mobileNo);
};

export {
    validateEmail,
    validatePassword,
    validateMobileNumber
};
