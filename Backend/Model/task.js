const mongoose = require('mongoose')

const taskschema = mongoose.Schema(
    {
        id: {type: String, required:true},
        name: {type: String, required:true}
    }
)

module.exports = mongoose.model('Task',taskschema)