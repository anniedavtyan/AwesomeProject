const mongoose = require('mongoose');

const Schema = mongoose.Schema;
  
// установка схемы
const userSchema = new Schema({
    name: {
        type: String,
        unique: [true,"Already exist"],
        required:[true,"Please fill in all the fields"],
    	minlength:[3,"Name min length will be 3 letters"],
    },
    password: {
        type: String,
        required: [true,"Please fill in all the fields"],
        minlength: [6, "Password min length will be 6 letters"]
    }
});
  
  
const User = mongoose.model("Users", userSchema);

module.exports = User;