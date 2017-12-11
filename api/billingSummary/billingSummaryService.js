const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

// Mais uma função de middleware
function getSummary(req, res){
  // função aggregate da API do mongoose
  BillingCycle.aggregate({
    $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
  },{
    $group: {
      _id : null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
  },{
    $project: {_id: 0, credit: 1, debt: 1}
  }, function(error, result){
    if(error){
      res.status(500).json({error: [error]})
    }else{
      // função do lodash, caso o valor seja nulo ele substituíra pelos valores padrão de credit e debt iguais a zero
      res.json(_.defaults(result[0], {credit: 0, debt: 0}))
    }
  })
}

module.exports = { getSummary }
