const Router = require("express").Router()
const encoder = require("body-parser").urlencoded()


const { home, addRecord, storeRecord,deleteRecord,editRecord, updateRecord, searchRecord } = require("../controller/index")

Router.get("", home)
Router.get("/add", addRecord)
Router.post("/add",encoder, storeRecord)
Router.get("/delete/:_id",deleteRecord)
Router.get("/edit/:_id",editRecord)
Router.post("/edit/:_id",encoder,updateRecord)
Router.get("/search",searchRecord)

module.exports = Router