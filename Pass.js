const specialChar = "~!@#$%^&*()_+}{[]:;'<.>?/";
//generate special character
function generatePassword() {
    const PasswordLength = 8;
    const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for (let i = 0; i < PasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() *
         characterSet.length);
         password += characterSet.charAt(randomIndex);
        
    };
    document.getElementById('password').value = password


}
//generate reset button
function Reset() {
    document.getElementById('password').value = '';
};
//generate special character
function generateSpecialCharacter() {
    const PasswordLength = 8;
    const characterSet = "~!@#$%^&*()_+}{[]:;'<.>?/";
    let password = '';

    for (let i = 0; i < PasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex)
    };

    document.getElementById('password').value = password;
};

//generate uppercase character
function generateUpperCase() {
    const PasswordLength = 12;
    const characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = '';

    for (let i = 0; i < PasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex)
    };

    document.getElementById('password').value = password;
};

//generate numbers
function generateNumbers() {
    const PasswordLength = 5;
    const characterSet = "0123456789";
    let password = '';

    for (let i = 0; i < PasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex)
    };

    document.getElementById('password').value = password;
};

//generate lowercase character
function generatelowerCase() {
    const PasswordLength = 10;
    const characterSet = "abcdefghijklmnopqrstuvwxyz";
    let password = '';

    for (let i = 0; i < PasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex)
    };

    document.getElementById('password').value = password;
};
   
