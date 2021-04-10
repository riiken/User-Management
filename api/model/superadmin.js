module.exports = (sequelize, Sequelize) => {
    const SuperAdmin = sequelize.define('superadmin', {
        // attributes
    
        email: {
          type: Sequelize.STRING(100),
          primaryKey: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          required: true
        }
       
      }, {
        // options
      });
      return SuperAdmin;
}