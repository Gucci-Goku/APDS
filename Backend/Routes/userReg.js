const express = require('express')
const router = express.Router();
const User = require('../Model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then((hash) => {
        const user = new User({
            username: req.body.username,
            password: hash
        })
        user.save()
        .then((result) => {
            res.status(200).json({message:'User saved successfully'})
            
        }
        ).catch(
            (error) => {res.status(error.code).json({error: 'Failed to save'})
        })
    })
    
});


router.post('/login', (req,res) =>
            {
                const { username, password } = req.body;
                User.findOne({ username: username })
                .then(user => {
                    if (!user) {
                        return res.status(404).json({ message: 'User not found' });
                    }
                  
                    bcrypt.compare(password, user.password)
                    .then(match => {
                        const token = jwt.sign({username: user.username,userid: user._id}
                            ,'Rj7qE8MvF5NtN0YrG1WcL9D4R6mC3J7H3sS1T2',{expiresIn: '2h'});
                        if (match) {
                            res.status(200).json({ message: 'Hello ' +user.username+' Authenticated successfully Token : '+token });
                        } else {
                            res.status(404).json({ message: 'Failed to authenticate' });
                        }
                    })
                    .catch(err => {
                        res.status(500).json({ error: 'Error comparing passwords'+err });
                    });
            })
            .catch(err => {
                res.status(500).json({ error: 'Error finding user'+err });
            });
            })



    module.exports = router;