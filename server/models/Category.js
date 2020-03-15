module.exports = (sequlize, DataTypes) =>
{
    const category = sequlize.define("category",{
        ca_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        bo_id:{
            type: DataTypes.INTEGER,
            references:{
                model: "board",
                key: "bo_id"
            }
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
        tableName:"group"
    });

    return category;
}