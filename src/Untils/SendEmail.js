import nodemailer from "nodemailer";


async function SendEmail(to,subject,html){ //Dynamic
    const transporter = nodemailer.createTransport({
       service:"gmail",
        auth: {
          user: process.env.emailSender,
          pass: process.env.passSender,
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
     
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: `Wasan Company <${process.env.emailSender}>`, // sender address
          to , // list of receivers
          subject , // Subject line
          html, // html body
        });
      
         
      
     
}
export default SendEmail;
