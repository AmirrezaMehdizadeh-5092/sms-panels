// import packeges
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const axios = require('axios');
const { body, validationResult } = require('express-validator');

const ZarinpalCheckout = require('zarinpal-checkout');
const zarinpal = ZarinpalCheckout.create('0eff080f-ae21-4484-89a0-f049ad9cce3f', false);

// importnat variable and configuration
const app = express();
const port = 6700;
const secretKey = 'amirreza'
app.use(cors());
app.use(express.json())
app.use(bodyparser.urlencoded([extended = true]));

// models
const User = require('./model/user');

// database configuration
mongoose.connect('mongodb://127.0.0.1:27017/SmsPanel').then(() => console.log('Database connected ...'));

// routes 
app.get("/", (req, res) => {
    res.send("hello");
})

app.post("/register", async (req, res) => {
    email = req.body.email;
    password = req.body.password;

    let findEmail = await User.findOne({ email: email });
    if (findEmail) {
        res.json('چنین ایمیلی قبلا ثبت شده است');
    }
    else {
        const hash = bcrypt.hashSync(password, 8);
        NewUser = new User({
            email: email,
            password: hash,
            name: "",
            phone: "",
            address: ""
        })
        const token = jwt.sign({ email: email }, secretKey, {
            algorithm: "HS256",
        })

        NewUser.save().then(() => {
            res.json({
                "res": "ok",
                "token": token
            })
        })
    }
})

app.post("/login", async (req, res) => {
    email = req.body.email;
    password = req.body.password;

    found_email1 = await User.findOne({ email: email });
    if (!found_email1) {
        res.json('چنین حسابی وجود ندارد');
    }
    else {
        const find = bcrypt.compareSync(password, found_email1.password);
        if (!find) {
            res.json('پسورد اشتباه است. لطفا دوباره امتحان کنید');
        }
        else {
            const token = jwt.sign({ email: found_email1.email }, secretKey, {
                algorithm: "HS256",
            })
            res.json({
                "res": "ok",
                "token": token
            })
        }
    }
})

app.post("/dargah", (req, res) => {
    console.log(req.body);

    zarinpal.PaymentRequest({
        Amount: '1000', // In Tomans
        CallbackURL: 'http://localhost:5173/',
        Description: 'A Payment from Node.JS',
        Email: 'hi@siamak.work',
        Mobile: '09120000000'
      }).then(response => {
        
        if (response.status === 100) {
          res.send(response.url);
        }
      }).catch(err => {
        console.error(err);
      });

    /*const data = {
        merchant_id: "0eff080f-ae21-4484-89a0-f049ad9cce3f",
        amount: 1000,
        callback_url: "http://localhost:5173/",
        description: "خرید تست",
        metadata: {
            email: "info@email.com",
            mobile: "09121234567"
        }
    };

    axios.post("https://api.zarinpal.com/pg/v4/payment/request.json", data).then(response => {
        if (response.data.data.code === 100) {
            console.log(`Redirect to: https://www.zarinpal.com/pg/StartPay/${response.data.data.authority}`);
            res.send(`https://www.zarinpal.com/pg/StartPay/${response.data.data.authority}`)
        } else {
            console.error('Error Code:', response.data.errors.code);
            console.error('Message:', response.data.errors.message);
        }
    })
        .catch(error => {
            console.error('cURL Error #:', error);
        });*/
})

// run server
app.listen(port, () => {
    console.log("server is running");
})