const list = require('./src/data/list.json')
module.exports = {
  lintOnSave: false,
  devServer:{
    open:true,
    before(app){
      app.get('/list',(req,res)=>{
        res.send(list)
      })
    }
  }
}
