const router = require('express').Router();

const loginController = require('./login.controller');

router.post('/', async (req, res, next) => {
   const {username, password} = req.body;

   if(!username || !password){
       next(new Error("Username and Password are required."));
   }else{
       res.json(await loginController.login(username, password));
   }
});

module.exports = router;