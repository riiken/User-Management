const Sequelize=require('sequelize')
const env=require('./env')
const sequelize=new Sequelize(env.local.database,env.local.username,env.local.password,{
    host:env.local.host,
    dialect:env.local.dialect
})

const umDB= {};

umDB.sequelizeDB=sequelize;

umDB.user=require('../model/user')(sequelize,Sequelize)
umDB.admin=require('../model/admin')(sequelize,Sequelize)
umDB.org=require('../model/org')(sequelize,Sequelize)
umDB.superadmin=require('../model/superadmin')(sequelize,Sequelize)
umDB.subs=require('../model/subs')(sequelize,Sequelize)


module.exports={
    sequelize:sequelize,
    umDB:umDB
}