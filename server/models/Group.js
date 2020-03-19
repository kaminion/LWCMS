module.exports = (sequelize, DataTypes) =>
{
    const group = sequelize.define("group",{
        gr_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        gr_name:{
            type: DataTypes.STRING(255),
            allowNull:false,
            unique: true 
        },
        gr_order:{
            type:DataTypes.INTEGER,
            defaultValue:0,
            allowNull:false
        },
        gr_visible:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
        timestamp:true,
        paranoid:false,
        tableName:"group"
    });

    return group;
}