import { DataTypes } from "sequelize";
import db from "../configs/connectDB.js";

const User = db.define('users', {
    id : {
        type            : DataTypes.UUID({ length : 12 }),
        defaultValue    : DataTypes.UUIDV4,
        primaryKey      : true,
        allowNull       : false,
    },
    nama : {
        type        : DataTypes.STRING({length : 45}),
        allowNull   : false,
    },
    email : {
        type        : DataTypes.STRING({length : 45}),
        allowNull   : false,
        unique      : true
    },
}, {
    timestamps : true,
    freezeTableName : true
});


export default User;

