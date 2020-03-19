module.exports = (sequelize, DataTypes) =>
{
    const board = sequelize.define("board",{
        bo_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        bo_name:{
            type: DataTypes.STRING(255),
            allowNull:true,
            unique: true 
        },
        bo_order:{
            type:DataTypes.INTEGER,
            defaultValue:0,
            allowNull:true
        },
        bo_visible:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
        timestamp:true,
        paranoid:false,
        tableName:"board"
    });

    return board;
}