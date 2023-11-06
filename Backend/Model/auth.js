const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=> {
    try { 
        const token =req.headers.authorization.split(" ")[1]
        jwt.verify(token,'Rj7qE8MvF5NtN0YrG1WcL9D4R6mC3J7H3sS1T2')
        next();
      }
    catch (err) {
        res.status(403).json({message:'Invalid token'})
    }
};