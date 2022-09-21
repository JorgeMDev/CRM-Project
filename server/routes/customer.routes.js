const CustomerController = require("./../controllers/customer.controller")

module.exports = (app) =>{
    app.get("/api/test", CustomerController.testApi)
    app.get("/api/customers", CustomerController.allCust)
    app.get("/api/customers/all", CustomerController.getCustomerwithRep)
    app.get("/api/customer/:id", CustomerController.oneCust)
    app.post("/api/customer/:repId", CustomerController.addCust)
    app.put("/api/customer/:id", CustomerController.updateCust)
    app.delete("/api/customer/:id", CustomerController.deleteCust)
    app.get("/api/customers/:repId", CustomerController.customersOfOneRep)
    
}