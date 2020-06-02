let ABC = ['Ada','Greta','Vim','Tim']

function adminMiddleware(req,res,next){
    
 for (i=0; i < usuariosRegistrados.length; i++){
     let usuarioAdmitido=req.query
    
    if (req.body.nombre==usuarioAdmitido){
        res.render ('index',{usuario})
 }else{

    res.send('No tienes los permisos')
 }

}
}