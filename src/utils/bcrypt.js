import bcrypt from "bcryptjs";


const salt = 10

export const hashpassword = (plainPassword) =>{
  return bcrypt.hashSync(plainPassword, salt);
};

