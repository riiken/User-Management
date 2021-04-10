module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define('admin', {
        // attributes
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
          required: true
        },
        email: {
          type: Sequelize.STRING(100),
          primaryKey: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          required: true
        },
       
      }, {
        // options
      });
      return Admin;
}