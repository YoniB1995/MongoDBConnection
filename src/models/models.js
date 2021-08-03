const mongoose = require('mongoose')

const UserSchema = async () => {

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true, // אם לא ייכנס יוזר הוא לא יישמר בסכימה
    },
},)
const User = mongoose.model("User",userSchema);
const user1 = new User({username:"yoni"});
try {
    await user1.save();
}catch (e){
    console.log(`Error: ${e._message}`)
}
return {userSchema,User,user1}
}


const breakfastMinMax = async()=>{

    const breakfastSchema = new Schema({
        eggs:{
            type:Number,
            min:[6,'Too few eggs'], // validation error message.
            max:12
        },
        drink:{
            type:String,
            enum:['Coffee','Tea'],
            required: ()=>{
                return this.eggs >3;
            }
        }
    })

    const Meal = mongoose.model("Meal",breakfastSchema)
    const meal1 = new Meal({eggs:8,drink:'Coffee'})

    try {
    await meal1.save();
}catch (e){
    console.log(`Error: ${e._message}`)
}


    return {breakfastSchema,Meal,meal1}
}

module.exports =  breakfastMinMax()
