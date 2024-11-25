// const mongoose = require("mongoose")
// async function getConnect() {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/wd_6pm_crud")
//         console.log("Database is Connected")
//     } catch (error) {
//         console.log(error)
//     }
// }
// getConnect()

// const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/wd_6pm_crud")
//     .then(() => {
//         console.log("Database is Connected")
//     })
//     .catch((error) => {
//         console.log(error)
//     })


// require("mongoose").connect("mongodb://127.0.0.1:27017/wd_6pm_crud")
require("mongoose").connect(process.env.DB_KEY)
    .then(() => {
        console.log("Database is Connected")
    })
    .catch((error) => {
        console.log(error)
    })