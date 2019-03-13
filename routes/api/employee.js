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

  router.get('/byid/:id', (req, res, next)=>{
    employeeModel.getEmployeesById(req.params.id, (err, docs){
      if(err){
      console.log(err);
      return res.status(500).json({"error":"Error al obtener el Empleado"});
    }
    return res.status(200).json(docs);
    });//busquedaPorID
  });//byid

  router.get('/bycompany/:company', (req, res, next)=>{
    employeeModel.getEmployeesByCompany(req.params.id, (err, docs){
      if(err){
      console.log(err);
      return res.status(500).json({"error":"Error al obtener el Empleado"});
    }
    return res.status(200).json(docs);
  });//busquedaPorCompany
});//byCompany

  router.get('/bytags/:tag', (req, res, next)=>{
    employeeModel.searchByTag((req.params.tag || '').split('_'), (err, docs)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"No se encontro TAG"});
    }else{
      return res.status(200).json(docs);
    }
  } ); //searchTag
});// bytag

router.put('/addtags/:id', (req, res, next)=>{
  employeeModel.addEmployeeATag((req.body.tags || '').split('|'), req.params.id, (err, rsult)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"No se puede agregar el TAG"});
    }
    return res.status(200).json(rsult);
  });// addTag
});// addtags

router.delete('/delete/:id', function(req, res, next){
  var _id = req.params.id;
  employeeModel.removeEmployee(id, (err, result)=>{
    if(err){
      return res.status(500).json({"error":"No se pudo eliminar empleado"});
    }
    return res.status(200).json(result);
  }); //delete
}); // BorrarEmpleado

router.get('/byagerange/:min/:max', (req, res, next)=>{
  
});

  return router;
}

module.exports = initEmployee;
