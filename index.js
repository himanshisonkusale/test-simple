
function getActiveUsers(users) {
    return users.filter(user => {
        return user.isActive === true && user.lastLogin < 30;
    });
}

const users = [
    { name: "Aman", isActive: true, lastLogin: 5 },
    { name: "Riya", isActive: false, lastLogin: 10 },
    { name: "Kabir", isActive: true, lastLogin: 45 }
];

console.log(getActiveUsers(users));
