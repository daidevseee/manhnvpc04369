import pool from '../configs/connectDB';

// let getHomepage = async (req,res)=>{
//     // Viet Logic o day
// //   const [rows, fields] = await pool.execute('SELECT * FROM	products');
  
// //   console.log("Checking selected:",rows);
// //   return res.render('lab3.ejs', {dataUser: rows,test: 'XIn chao Node JS' })


// }
const getHomepage = async(req,res) => {
  try {
    const [products, fields1] = await pool.query('SELECT * FROM products');
    const [catalogs, fields2] = await pool.query('SELECT * FROM catalog');
    return res.render('lab3.ejs', {products: products, catalogs: catalogs })
  } catch (error) {
    return console.log(error);
  }
  
}
const getShop = async (req,res) => {
  try {
  const [products, fields1] = await pool.query('SELECT * FROM products');
  const [catalogs, fields2] = await pool.query('SELECT * FROM catalog');
  return res.render('lab3.ejs', {products: products, catalogs: catalogs })
} catch (error) {
  return console.log(error);
}
}

const getProductsbyCatalog = async(req,res) => {
  try {
  let cateId=req.params.id;
  const [products, fields1] = await pool.query(`SELECT * FROM products where idCategory=${cateId}`);
  const [catalogs, fields2] = await pool.query('SELECT * FROM catalog');
  return res.render('lab3.ejs', {products: products, catalogs: catalogs })
} catch (error) {
  return console.log(error);
}
}

const getDetail = async (req,res) => {
  const productId = req.params.id;
  try {

  const [product, fields1] = await pool.query(`SELECT * FROM products where idProduct = ${productId}`);
  const [catalogs, fields2] = await pool.query('SELECT * FROM catalog ');
  return res.render('lab3_productDetail.ejs', {product: product[0], catalogs: catalogs })
} catch (error) {
  return console.log(error);
}
}

const getAmin = (req,res) => {
  try {
    res.render("admin/home");
  } catch (error) {
    return console.log(error);
  }
}
const getProductList = async (req,res) => {
  try {
    const [products, fields1] = await pool.query('SELECT * FROM products');
    return res.render('admin/product_list', {products: products })
  } catch (error) {
    return console.log(error);
  }
}
const getDelete = async (req, res) => {

  try {
    const [result, fields] = await pool.query('DELETE FROM products WHERE idProduct = ?', [req.params.id]);
    res.redirect('/admin/product-list');
  } catch (err) {
    console.log(err);
  }
};
const getUpdate = async (req, res) => {
  try {
    const [result, fields] = await pool.query('SELECT * FROM products WHERE idProduct = ?', [req.params.id]);
    res.render('admin/product_edit', { product: result[0] });
  } catch (err) {
    console.log(err);
  }

};
const PostUpdate = async (req, res) => {
  const product = req.body
  try {
    const file = req.file
    const id = req.body.idProduct;
    const title=req.body.productName;
    const price=req.body.price;
    const description=req.body.description;
    const img = file.filename;

    const product = {
      nameProduct:title,
      priceProduct:price,
      description:description,
      images:img
    }
    await pool.execute(
      'UPDATE products SET nameProduct = ?, priceProduct = ?, description = ?, images = ? WHERE idProduct = ?',
      [title, price, description, img, id]
    );
    res.redirect('/admin/product-list');
  }
  catch (error) {
    res.json(error);

  }

};

const getAddnew = (req,res) => {
  res.render("admin/add-product");
}
const postAddnew =  async (req,res) => {
  try {
    const file = req.file
    let title=req.body.productName;
    let price=req.body.price;
    let description=req.body.description;
    let img = file.filename;
    const product = {
      nameProduct:title,
      priceProduct:price,
      description:description,
      images:file.filename
    }
  
    await pool.execute(
      'INSERT INTO products (nameProduct	, priceProduct	, description, images) VALUES (?, ?, ?, ?)',
      [title, price, description, img]
    );
    res.redirect('/admin/product-list');
  }
  catch (error) {
    res.json(error);

  }
 
}
module.exports = { getHomepage, getShop, getProductsbyCatalog, getDetail, getDelete, getUpdate, PostUpdate, getAmin, getProductList,getAddnew,postAddnew };