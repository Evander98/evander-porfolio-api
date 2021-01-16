const nodemailer = require('nodemailer')

module.exports = {
    mailer : (req, res) => {
        let {email, subject, fName, lName, message} = req.body
        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : 'christrevand@gmail.com',
                pass : 'bzrrkzrbhmzbovtp'
            },
            tls : {
                rejectUnauthorized : false
            }
        })
    
        let mailOptions = {
            from : email,
            to : 'christrevand@gmail.com',
            subject,
            html : `From : ${email}<br/>Name : ${fName} ${lName}<br/>Message : ${message}`
        }
    
        transporter.sendMail(mailOptions, (err, res2) => {
            if(err) throw {error : true, msg : 'Error saat pengiriman email'}
            res.send('Mail Sent')
        })
    }
}