const Enquiry=require('../models/enquiry.js')
var nodemailer=require('nodemailer')
exports.create=(req,res)=>{
    try{
   
        const  enquiry= new Enquiry(req.body);
        enquiry.save(async(error, user) => {
          if (error) {
           
              return res.status(400).json({
                  error:"Data Error"
                  
              })
              
          }
        

if(user){
    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({ 
    service: 'Gmail',
   
    auth: {
      user: process.env.MAIL, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `" "${user.email}`, // sender address
    to: "augai231997@gmail.com", // list of receivers
    subject: "Enquiry ✔", // Subject line
    text: user.message, // plain text body
    html: `<b>${user.message}</b>`, // html body
  });

}
           
          res.status(201).json({
              user
          })
        });
      }catch(error){
        res.status(500).json({message:'Internal server not found'})
      }
}

exports.read = async (req, res) => {
    try {
        const result = await Enquiry.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }

}