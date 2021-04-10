module.exports = (sequelize, Sequelize) => {
    const Subs = sequelize.define('subs', {
        // attributes
        subs: {
          type: Sequelize.STRING(50),
          allowNull: false,
          required: true
        
       
        }
        // options
      });
      return Subs;
}