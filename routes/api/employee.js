var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);
  var data ) null;


  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /byagerange/:min/:max
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

  router.get('/all', (req, res, next) => {

    employeeModel.getEmployees(
      function(err, docs){
      if(err) {
        console.log(err);
        return res.status(500).json({error:"Algo Paso"});
      }
      return res.status(200).json(docs);
    }
    );
    /*
    empModel.xyz( (err, docs)=>{
      return res.status(200).json(docs);
    });
    */
  });// all

  router.get('/byid/:EmployeeID', (req, res, next)=>{
    employeeModel.getEmployeesById(req.params.EmployeeID, (err, docs){
      if(err){
      console.log(err);
      return res.status(500).json({"error":"Error al obtener el Empleado"});
    }
    return res.status(200).json(docs);
    });//busquedaPorID
  });//byid

  return router;
}

module.exports = initEmployee;
