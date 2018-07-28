module.exports.add = (x, y) => x + y;
module.exports.square = (x) => x * x;
module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];

    return user;
};