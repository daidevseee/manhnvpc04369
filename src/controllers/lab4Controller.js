import pool from '../configs/connectDB';

// let getHomepage = async (req,res)=>{
//     // Viet Logic o day
// //   const [rows, fields] = await pool.execute('SELECT * FROM	products');
  
// //   console.log("Checking selected:",rows);
// //   return res.render('lab3.ejs', {dataUser: rows,test: 'XIn chao Node JS' })


// }
const getHomepage = async(req,res) => {
  try {
    const [posts, fields1] = await pool.query('SELECT * FROM posts');
    return res.render('lab4.home_list.ejs', {posts: posts })
  } catch (error) {
    return console.log(error);
  }
  
}

module.exports = { getHomepage };