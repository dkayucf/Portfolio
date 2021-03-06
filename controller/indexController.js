const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv/config');

module.exports = {
    getIndexRoute: (req, res) => {
        res.render('index/index');
    },
    contactSubmit: (req, res) => {

        const message = `${req.body.name} has contacted you from ${req.body.email} on your portfolio website. Message: ${req.body.message}`;
        console.log(process.env.INVOICEIT_RESET_PASS);
        var smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'invoiceitreset@gmail.com',
                pass: process.env.INVOICEIT_RESET_PASS
            }
        });
        var mailOptions = {
            to: 'dkayucf@gmail.com',
            from: 'invoiceitreset@gmail.com',
            subject: 'Portfolio Contact Submission',
            html: message
        };
        smtpTransport.sendMail(mailOptions, function (error) {
            if(error){
                return console.log(error);
            }
        });

        req.flash('success_msg', 'Thanks for taking the time to view my portfolio and contacting me.');
        res.redirect('/');
    }
}