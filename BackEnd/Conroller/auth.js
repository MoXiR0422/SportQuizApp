const { v4: uuidv4 } = require('uuid');

const { Pool } = require('pg');
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'sport_base',
    password:'20010422',
    port:'5432',
});

let codePhone;

const loginAuth = async(req,res) => {
    const {phoneNumber,password} = req.body;
    let userSTR = `SELECT * FROM userbase WHERE phoneNumber = '${phoneNumber}' AND password = '${password}'`;
    try{
        let ctp = await pool.query(userSTR);
        console.log(ctp);
        res.json(ctp.rows[0]).status(200);
    }catch(err){
        console.log('hato',err);
        res.status(200).end();
        
    }
}

const getCodePhone = async(req, res) => {
    try{
        let code = "";
        for(let i=0;i<5;i++){
            code = code + Math.floor((Math.random() * 9));
        }
        codePhone = {
            phoneNumber:req.body.phoneNumber,
            authCode:code
        }
        console.log(code);
        res.json(code).end();
    }catch(err){
        res.json('error').end();
    }
}
const authCodeIdentify = async(req,res) =>{
    // console.log(req.body);
    try{
        if(codePhone.phoneNumber === req.body.phoneNumber && codePhone.authCode === req.body.authCode){
            let id = uuidv4();        
            let user = {
                id,
                // username:req.body.username,
                phoneNumber:req.body.phoneNumber,
                // password:req.body.password,
            }
            console.log(user);
            // let info = `INSERT INTO userBase (${createItemKey}) 
            // VALUES(${createItemInfo})`;
            // await pool.query(info);
            res.status(200).json('success').end();
        }else{
            res.json(Error).status(500).end();
        }
    }catch{
        res.status(500).json('malumotni saqlashdagi xatolik').end();
    }
}

const registration = async(req,res) => {
    console.log(codePhone);
    console.log(req.body);
    let itemInfo = req.body;
    try{
        console.log('gbg');
        let id = uuidv4();  

        // let user = {
        //     username:req.body.username,
        //     phoneNumber:req.body.phoneNumber,
        //     role:req.body.role,
        //     password:req.body.password,
        // }
        let createItemKey = 'id';
        let createItemInfo=`'${id}'`;
        Object.keys(itemInfo).forEach(function(key, index) {
            createItemKey+=`,${key}`;
            createItemInfo+=`,'${itemInfo[key]}'`;
        }); 
        let info = `INSERT INTO userBase (${createItemKey}) 
        VALUES(${createItemInfo})`;
        console.log(info);
        await pool.query(info);
        res.status(200).json(id).end();
    }catch{
        res.status(500).json('malumotni saqlashdagi xatolik').end();
    }
}

const forgetPassword = async(req,res) => {

}

module.exports = {
    getCodePhone,
    authCodeIdentify,
    loginAuth,
    registration,
    forgetPassword,
}













