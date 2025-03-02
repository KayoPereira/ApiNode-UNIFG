let users = [
  { id: 1, name: 'João' },
  { id: 2, name: 'Maria' },
];

const getUsers = () => users;

const getUserById = (id) => users.find((u) => u.id === id);

const createUser = (name) => {
  const user = {
    id: users.length + 1,
    name: name,
  };
  users.push(user);
  return user;
};

const updateUser = (id, name) => {
  const user = users.find((u) => u.id === id);
  if (user) {
    user.name = name;
  }
  return user;
};

const deleteUser = (id) => {
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
  }
  return userIndex !== -1;
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
