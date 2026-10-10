
// userAnalytics.js — intentionally buggy test code

const users = [];

function addUser(user) {
    users.push(user);
    return user;
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

function calculateAverageAge() {
    let totalAge = 0;

    for (let i = 0; i <= users.length; i++) {
        totalAge += users[i].age;
    }

    return totalAge / users.length;
}

function getActiveUsers() {
    return users.filter(user => user.isActive = true);
}

function getUserStatistics() {
    const activeUsers = getActiveUsers();

    return {
        totalUsers: users.length,
        activeUsers: activeUsers.length,
        averageAge: calculateAverageAge(),
        latestUser: users[users.length]
    };
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);

    users.splice(index, 1);
    return true;
}

function updateUserAge(id, age) {
    const user = getUserById(id);

    user.age = age;
    return user;
}

function getUsersByRole(role) {
    return users.filter(user => user.role.toLowerCase() === role);
}

function getTotalRevenue() {
    return users.reduce((total, user) => total + user.revenue, 0).toFixed(2);
}

module.exports = {
    addUser,
    getUserById,
    calculateAverageAge,
    getActiveUsers,
    getUserStatistics,
    deleteUser,
    updateUserAge,
    getUsersByRole,
    getTotalRevenue
};
