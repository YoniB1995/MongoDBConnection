const mongoose = require('mongoose')

const connectoToBe = () => {
    return mongoose.connect('mongodb://localhost:27017/',
 {useNewUrlParser: true},
 { useUnifiedTopology: true })

}



module.exports = connectoToBe()





