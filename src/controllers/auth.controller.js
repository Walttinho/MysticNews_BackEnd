import bcrypt from "bcryptjs";
import { loginService } from "../services/auth.service.js";
 
const login = async (req, res) => {
  const { email, password } = req.body;
try{
  const user = await loginService(email);
  if(!user || !bcrypt.compareSync(password, user.password)){
    return res.status(404).send({message: 'User or Password not found'})
  }

  /* const passwordIsValid = bcrypt.compareSync(password, user.password);
  console.log(passwordIsValid)

  if(!passwordIsValid){
    return res.status(404).send({message: 'User or Password not found'})
  } */



  res.send('Login OK');
} catch (err){
  res.status(500).send(err.message)
}
}

export { login };
