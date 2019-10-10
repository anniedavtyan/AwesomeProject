const User = require('../Models/user');
const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const secret = 'mysecrets'

exports.signupUser = async function(req,res){
    const data = {name:req.body.name,password:req.body.password}
    const password = data.password
    if(password.length>5)
    {const newUser = new User(data);
    const salt = await bcrypt.genSalt(10)
	newUser.password = await bcrypt.hash(password,salt)
	newUser.save()
	.then(ok => res.json(ok))
    .catch(err => res.json(err));}
    else{
        const newUser = new User(data)
        newUser.save()
        .then(ok => res.json(ok))
        .catch(err => res.json(err));
    }
}

exports.loginUser = async function(req,res){
    const name = req.body.name
    const password = req.body.password
    User.find({name},async (err, docs)=>{ 
        if(docs[0]){
            let hashPassword = docs[0].password
            const isMatch = await bcrypt.compare(password,hashPassword)
              if (isMatch) {
                // const payload = {name}
                // const token = jwt.sign(payload,secret,{expiresIn:'1h'})
                // docs[0].token = token
                res.send(docs[0])
              }
        }
         res.end(JSON.stringify(err))
     })
        // .then(() => console.log('ok'))
        // .catch(err => console.log(err));
}