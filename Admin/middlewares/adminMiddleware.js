
let admins = ["Ada","Greta","Vim","Tim"]

let adminMiddleware={

    
    log:function(req,res,next){
        
        admins.forEach(function(admin){

        if(admin==req.body.nombre){
       
        res.render('index')
   
       }else{
           res.send('No tienes permisos')
       }
    });
    
    }
}


    

       

module.exports=adminMiddleware