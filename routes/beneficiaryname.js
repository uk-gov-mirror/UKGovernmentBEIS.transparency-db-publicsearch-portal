// ********************************************************************
// Gov.UK public user search subsidy awards beneficiary name routing 
// ********************************************************************

const express = require('express');
const router = express.Router();

router.post('/',(req, res) => {
  /*test */
    radio_beneficiaryname = "";
    text_beneficiaryname = ""; 
    subsidy_objective_isfirst = "Yes";
    spending_sector_isfirst = "Yes";
    subsidy_instrument_isfirst = "Yes";
    console.log("subsidy_objective_isfirst bene :" + subsidy_objective_isfirst);
    res.render('publicusersearch/beneficiaryname');
  });

  router.get('/',(req, res) => {

  res.render('publicusersearch/beneficiaryname');
   
  });


module.exports = router;
