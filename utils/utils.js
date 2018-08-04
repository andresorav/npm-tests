module.exports.add = (x, y) => x + y;
module.exports.asyncAdd = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y);
    }, 1000)
};

module.exports.square = (x) => x * x;
module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];

    return user;
};