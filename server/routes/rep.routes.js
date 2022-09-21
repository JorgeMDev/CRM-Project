const RepController = require("./../controllers/rep.controller")

module.exports = (app) =>{
    
    app.get("/api/reps", RepController.allRep)
    app.get("/api/rep/:id", RepController.oneRep)
    app.post("/api/rep", RepController.addRep)
    app.put("/api/rep/:id", RepController.updateRep)
    app.delete("/api/rep/:id", RepController.deleteRep)
    app.get("/api/rep/all/customers", RepController.getAllCustomers) //get all reps with customers

}