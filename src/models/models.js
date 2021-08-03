const mongoose = require('mongoose')

const UserSchema = () => {

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
    },
},)

const User = mongoose.model("User",userSchema);
const user1 = new User({});

try {
    await user1.save();
}catch (e){
    console.log(`Error: ${e.message}`)
}


}