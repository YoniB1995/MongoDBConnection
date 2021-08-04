const mongoose = require('mongoose')
const {UserSchema,
    breakfastMinMax } = require('../models/models')

const connectoToBe = () => {
    return mongoose.connect('mongodb://localhost:27017/',
 {useNewUrlParser: true},
 { useUnifiedTopology: true })


}
const Schema = mongoose.Schema

const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story'}]
});

const storySchema = Schema({
    author: {type: Schema.Types.ObjectId , ref : 'Person'},
    title: String,
    fans: [{ type: Schema.Types.ObjectId , ref: 'Person'}]
});

const Story = mongoose.model('Story',storySchema);
const Person = mongoose.model('Person',personSchema)

const author = new Person({
    name: 'Ian Fleming',
    age: 50
});

author.save((err)=>{
    if (err) return err;
    const story1 = new Story({
        title: ' Casino Royal',
        author: author._id
    })

    story1.save((err)=> {
        if (err) return err;
        console.log('story1 saved')
        })
})




connectoToBe().then({
    // breakfastMinMax,
    personSchema,storySchema,Story,Person,author
}
)



module.exports = mongoose





