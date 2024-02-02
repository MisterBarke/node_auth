const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required : [true, 'Please enter an email'],
        unique : true,
        lowercase : true,
        validation : [isEmail, 'please enter a valid email']
    }, 
    password : {
        type : String,
        required : [true, 'Please enter a password'],
        minlength  : [6, 'Length must be 6']
    }
})


userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
next();
})

//static  model to login user

userSchema.statics.login = async function(email, password)  {
    const user = await this.findOne({email});
    if(user){
      const auth = await bcrypt.compare(password, user.password);
    if(auth){
        return user
    }
    throw Error('Incorrect Password ')
    }
    throw Error('Incorrect Email')
}

const User = mongoose.model('user', userSchema);
module.exports = User
  