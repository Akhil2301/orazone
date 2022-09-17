
    exports.enquiryValidator=(req,res,next)=>{
        
        req.check('fname','Name is required')
        .isLength({min:1})
        req.check('lname','Name is required')
        .isLength({min:1})
        req.check('phone','Enter valid phone number')
            .matches(/[0-9]/)
            .withMessage('Enter Valid phone number')
            .isLength({
                min:10,
                max:10
            });
        req.check('email','Email must be 3 to 32 characters')
            .matches(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)
            .withMessage('Email must contain @')
            .isLength({
                min:4,
                max:32
            });
            
        req.check('message','Enter the Message')
        .isLength({min:1})

        const errors=req.validationErrors();
        if(errors){
        
            const firstError=errors.map(error=>error.msg)[0]
                
            return res.status(400).json({error:firstError})
        }
        next();
    };
