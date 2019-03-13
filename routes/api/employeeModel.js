var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('emps');
  lib.getEmployees = (handler)=>{
    obt.find({}).toArray(
      (err , docs) => {
        if(err){
          handler(err, null);
        }else{
          handler(null, docs);
        }
      }
     );
    // implementar
    // obtener todos los documentos
  }

  lib.getEmployeesById = (id, handler) => {
    obt.findOne({"_id": new ObjectID(id)},(err, doc)=>{
      if(err){
          handler(err, null);
        }else{
          handler(null, doc);
        }
    });
    // implementar
    // Obtener un Documento solo mostrar
    // email, phone, name y age
  }

  lib.getEmployeesByCompany = (company, handler) => {
obt.findOne({"company": new ObjectID(company)},(err, doc)=>{
    if(err){
      handler(err, null);
    }else{
      handler(null, doc);
    }
});
    // implementar
    // solo mostrar name, email, company

  }

  lib.getEmployeesByAgeRange = (ageLowLimit, ageHighLimit, handler) => {
    //implementar
    // Mostrar todos los documento incluyendo los extremos
    // que esten entre las edades indicadas por los parametros
    // ageLowLimit y ageHighLimit
    // solo mostrar name, age, email
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    var queryObject= {"tags": {"$in": Array.isArray(tags)? tags: [tags]}};
  obt.find(queryObject).toArray((err, docs) => {
    if(err){
      handler(err, null);
    }else{
      handler(null, docs);
    }
  });
    //implementar
    // obtener todos los documentos que contenga
    // al menos una vez el tag dentro del arreglo
    // tags
    // mostrar solo name, email, tags
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    var curatedTags = Array.isArray(tags)? tags: [tags];
  var updateObject = { "$set": { "tags": curatedTags}};
  obt.updateOne({"_id": ObjectId(id)}, updateObject, (err, rsult)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, rsult.result);
      }
  });
    //Implementar
    //Se requiere agregar a un documento un nuevo tag
    // $push
  }

  lib.removeEmployee = (id, handler) => {
    //Implementar
    //Se requiere eliminar un documento de la colección
    return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
