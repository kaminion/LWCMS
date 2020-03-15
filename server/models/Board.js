module.exports = (sequlize, DataTypes) =>
{
    const board = sequlize.define("board",{
        gr_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'group',
                key: 'id'
            }
        },
        bo_name:{
            type: DataTypes.STRING(255),
            allowNull:false,
            unique: true 
        },
        bo_order:{
            type:DataTypes.INTEGER,
            defaultValue:0,
            allowNull:false
        },
        bo_visible:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
        timestamp:true,
        tableName:"board"
    });

    return board;
}