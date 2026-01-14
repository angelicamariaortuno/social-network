const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/auth', require('./routes/auth.routes'));
app.use('/users', require('./routes/users.routes'));
app.use('/posts', require('./routes/posts.routes'));
app.use('/follows', require('./routes/follows.routes'));
app.use('/favorites', require('./routes/favorites.routes'));
app.use('/messages', require('./routes/messages.routes'));
app.use('/profile', require('./routes/profile.routes'));
app.use('/like', require('./routes/like.routes'));
app.use('/comment', require('./routes/comment.routes'));

app.get('/', (req,res)=> {
    res.send('HOLA BIENVENIDO A LA RED SOCIAL TRUSTNET');
});
app.listen(port,()=>{
    console.log("port ==>", port);
});
module.exports = app;

