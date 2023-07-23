import express from "express";
import lab4 from '../controllers/lab4Controller';
import upload from "../configs/uploadImages";
let router = express.Router();
const initLab4Route =(app)=>{

    router.get('/', lab4.getHomepage);
    // router.get('/shop/', getShop);
    // router.get('/shop/:id', getProductsbyCatalog);
    // router.get('/product/:id', getDetail);
    // router.get('/admin/productDelete/:id', getDelete);
    // router.get('/admin/productUpdate/:id', getUpdate);
    // router.get('/admin', getAmin);
    // router.get('/admin/product-list', getProductList);
    // router.get('/admin/add_product', getAddnew);
    // router.post('/admin/update', upload.single("productImage") , PostUpdate);

    // router.post('/addnew', upload.single("productImage") ,postAddnew);

    router.get('/about',(req,res)=>{
        res.send('I am NVM')
    })

    return app.use('/',router)
}
export default initLab4Route;