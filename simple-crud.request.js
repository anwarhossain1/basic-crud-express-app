const Joi = require('joi')

const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    age: Joi.number().integer().required(),
}).options({ convert: false });

const validate = (data)=>{
    const validationResult = schema.validate(data)
    return validationResult
}

module.exports = {validate}