const create = (req, res) => {
  const {name, username, email, password, avatar, background} = req.body;

if(!name || !username || !email || !password || !avatar || !background){
res.status(400).send({menssage: "Submit all fields for registration"})
}


  res.status(201).send({
    message: " User created Successfully",
    user:{
      name,
      username,
      email,
      avatar,
      background,
    }
  });
};

module.exports = { create };
