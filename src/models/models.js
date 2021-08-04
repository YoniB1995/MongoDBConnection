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

// const personSchema = mongoose.Schema({
//     _id: Schema.Types.ObjectId,
//     name: String,
//     age: Number,
//     stories: [{ type: Schema.Types.ObjectId, ref: 'Story'}]
// });

// const storySchema = mongoose.Schema({
//     author: {type: Schema.Types.ObjectId , ref : 'Person'},
//     title: String,
//     fans: [{ type: Schema.Types.ObjectId , ref: 'Person'}]
// });

// const story = mongoose.model('Story',storySchema);
// const Person = mongoose.model('Person',personSchema)





module.exports =  breakfastMinMax()


// UserModel.find() // find all users
//  .where({firstName: "Shuki"}) // with first name equals to Shuki
//  .skip(100) // skip the first 100 items
//  .limit(10) // limit to 10 items
//  .sort({firstName: 1}) // sort ascending by firstName
//  .select({firstName: true}) // select firstName only
//  .exec() // execute the query
//  .then(docs => {
//  console.log(docs);
//  })
//  .catch(err => {
//  console.error(err);
//  })
