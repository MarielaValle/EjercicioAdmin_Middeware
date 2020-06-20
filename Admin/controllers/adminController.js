let adminController ={

    raiz: function(req,res){
        
     res.render('admin')

    },

    log:function(req,res){

        res.render('index')
    }
}
module.exports=adminController;
