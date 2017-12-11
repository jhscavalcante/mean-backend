const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}' para o atributo '{PATH}'."
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maior que o limite máximo de '{MAX}' para o atributo '{PATH}'."
mongoose.Error.messages.String.enum = "O valor '{VALUE}' informado não é válido para o atributo '{PATH}'."
