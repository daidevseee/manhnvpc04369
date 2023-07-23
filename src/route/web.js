import express from "express";
import homeContronler from '../controllers/homeController';



let router = express.Router();
const initWebRoute =(app)=>{
    router.get('/', homeContronler.getHomepage);
    router.get('/detial/user/:id',homeContronler.getDetailPage);
    router.post('/create-new-user',homeContronler.createNewUser)
    router.post('/delete-user',homeContronler.deleteUser)
    router.get('/edit-user/:id',homeContronler.getEditPage)
    router.post('/update-user', homeContronler.postUpdateUser)

    router.get('/about',(req,res)=>{
        res.send('I am Hoang Van THo')
    })

    return app.use('/',router)
}
export default initWebRoute;