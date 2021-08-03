const mongoose = require('mongoose')
const {UserSchema,
    breakfastMinMax } = require('../models/models')

const connectoToBe = () => {
    return mongoose.connect('mongodb://localhost:27017/',
 {useNewUrlParser: true},
 { useUnifiedTopology: true })


}

connectoToBe().then({
    breakfastMinMax
}
)



module.exports = mongoose





