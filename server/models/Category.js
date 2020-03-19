module.exports = (sequelize, DataTypes) =>
{
    const category = sequelize.define("category",{
        ca_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        ca_name:{
            type: DataTypes.STRING(255),
            allowNull:true,
            unique: true 
        },
        ca_order:{
            type:DataTypes.INTEGER,
            defaultValue:0,
            allowNull:false
        }
    },{
        timestamp:true,
        paranoid:false,
        tableName:"category"
    });

    return category;
}