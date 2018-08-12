const express = require('express');
const router = express.Router();

const getUserByEmail = (email) => {
    return new Promise((resolve,reject) => {
        resolve({
            uid:'1',
            email:'vitkuz.info@gmail.com',
            username:'vitkuz'
        })
    })
}

router.get('/user/login', (req,res,next) => {
    res.render('userLogin', {title:'User Login'});
});

router.get('/user/register', (req,res,next) => {
    res.send('register');
});

router.get('/user/password', (req,res,next) => {
    res.send('register');
});

router.get('/users', (req,res,next) => {
    res.send('List of users');
});

router.get('/user', (req,res,next) => {
    res.send('Home for user');
});

router.get('/user/:id', (req,res,next) => {
    res.send('Home for user'+req.params.id);
});

router.get('/user/:id/edit', (req,res,next) => {
    res.send('Edit user'+req.params.id);
});

router.post('/api/user/login', async (req,res,next) => {

    try {

        const user = await getUserByEmail('vitkuz.info@gmail.com');

    } catch (e) {
        console.log(e);
        return next(e)
    }



    res.json({
        msg:'OK',
        user
    });
});








module.exports = router;