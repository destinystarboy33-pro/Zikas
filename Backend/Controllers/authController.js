import Admin from "../Models/authModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"






const Register = async(req, res) =>{
 try {
    const {email, fullName, password} = req.body

   

   if (!email || !fullName || !password) {
     return res.status(400).json({
        message: "Fill all require Field",
        status: false,
    })

 }

const existingEmail = await Admin.findOne({email})

if (existingEmail) {
    return res.status(400).json({
        message: "Email already in use",
        status: false,
    })
}

const hashedPassword =await bcrypt.hash(password, 10)

const admin = await Admin.create({fullName, email, password: hashedPassword})

const token = GenerateToken(admin)

res.status(200).json({
    message: "Accounted Created Successfully",
    status: true,
    admin:{
        fullName,
        hashedPassword,
        password,
        token
    }
})

 } catch (error) {
   res.status(401).json({
    message: "something went wrong",
    error: error.message,
    status: false

   })
   console.log(error)
 }
}


const Login = async(req, res) =>{
  try {
    
      const {email, password} = req.body

    const existingAdmin = await Admin.findOne({email})

    if (!existingAdmin) {
        res.status(400).json({
            message: "invalid Credentails",
            status: false
        })
    }

    const existingPassword = await bcrypt.compare(password, existingAdmin.password)

    if (!existingPassword) {
         res.status(400).json({
            message: "invalid Credentails",
            status: false
        })
    }

    const token = GenerateToken(admin)

    res.status(200).json({
        message: "Login Successful",
        status: true,
        admin: {
            fullName: existingAdmin.fullName,
            email: existingAdmin.email
        },
        token
    })

  } catch (error) {
     res.status(401).json({
    message: "something went wrong",
    error: error.message,
    status: false

   })
  }
}





const GenerateToken = (admin) =>{
    const token = jwt.sign({
        id: admin._id,
        fullName: admin.fullName,
        email: admin.email,
        role: admin.role,
    },process.env.JWTSECRET,
    {expiresIn: "7d"})

    return token
}

export {Register, Login}