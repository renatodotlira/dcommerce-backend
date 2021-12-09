const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "'{VALUE}' é menor que o limite mínimo '{MIN}"
mongoose.Error.messages.Number.max = "'{VALUE}' é maior que o limite máximo '{MIN}"
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}"