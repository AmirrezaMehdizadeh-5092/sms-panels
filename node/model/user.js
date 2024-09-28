const mongose = require("mongoose");

const UserInfo = mongose.Schema({
    email:
    {
        type: String,
        maxlength: 100,
        required: true,
        index:
        {
            unique: true,
            dropDups: true
        }
    },
    password:
    {
        type: String,
        required: true,
    },
    name:
    {
        type: String,
    },
    phone:
    {
        type: String,
    },
    address:
    {
        type: String,
    },
    joinDate:
    {
        type: Date,
        default: Date.now
    }
})

User = mongose.model("User", UserInfo);
module.exports = User;