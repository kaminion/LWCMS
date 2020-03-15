module.exports = (sequlize, DataTypes) =>
{
    const group = sequlize.define("group",{
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
        tableName:"group"
    });

    group.associate = (models) =>
    {
        group.hasMany(models.board, {as: 'gr_id'});
    }

    return group;
}