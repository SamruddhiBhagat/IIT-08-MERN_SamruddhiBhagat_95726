//importing
const jwt = require('jsonwebtoken');
const result = require(`./result`);
const config = require(`./config`);

//authUser
function authUser (req,res,next){
    const allowedUrls =["/users/signup", "/users/signin"]
    if(allowedUrls.includes(req.url))
        {
        next();
        }
    else
    {
        const token = req.headers.token;
        if(!token){
            res.send(result.createResult("Token is missing"))
        }
        else
        {
            try{
                // verify token
                const payload = jwt.verify(token, config.SECRET)
                req.headers.id = payload.id;
                req.headers.email = payload.email;
                next()
            } catch(err){
                res.send(result.createResult("Token is invalid"))
            }

        }
        
    }
}

//exporting
module.exports = {
    authUser
}