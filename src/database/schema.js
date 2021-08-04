const mongoose = require('mongoose')
const Schema = mongoose.Schema

const {UserSchema,
    breakfastMinMax } = require('../models/models')

const connectoToBe = () => {
    return mongoose.connect('mongodb+srv://yoni:046344579@cluster0.b7rbb.mongodb.net/test',
 {useNewUrlParser: true},
 { useUnifiedTopology: true })


}

// const personSchema = Schema({
//     _id: Schema.Types.ObjectId,
//     name: String,
//     age: Number,
//     stories: [{ type: Schema.Types.ObjectId, ref: 'Story'}]
// });

// const storySchema = Schema({
//     author: {type: Schema.Types.ObjectId , ref : 'Person'},
//     title: String,
//     fans: [{ type: Schema.Types.ObjectId , ref: 'Person'}]
// });

// const Story = mongoose.model('Story',storySchema);
// const Person = mongoose.model('Person',personSchema)

// const author = new Person({
//     name: 'Ian Fleming',
//     age: 50
// });

// author.save((err)=>{
//     if (err) return err;
//     const story1 = new Story({
//         title: ' Casino Royal',
//         author: author._id
//     })

//     story1.save((err)=> {
//         if (err) return err;
//         console.log('story1 saved')
//         })
// })

// Story.findOne({title: 'Casino Royale'})
// .populate('author')
// .exec((err,story)=>{
//     if (err) throw err;
//     console.log(`The author is ${story.author.name}`)
// })


connectoToBe().then({
    // breakfastMinMax,
    // personSchema,storySchema
}
)



module.exports = mongoose





