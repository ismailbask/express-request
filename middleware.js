const girisKontrol=(req,res,next)=>{
    // console.log("ara katman kontrolü");
    const access=true;
    if(!access){
        res.json({
            access:false,
            data:"Giriş yapamadın"
        })
    }
    next();
}
module.exports = {
    girisKontrol    
}