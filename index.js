const express = require('express');
const { sequelize } = require('./models/index');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const productRoute = require('./routes/product');
const authorRoute = require('./routes/author');
const newRoute = require('./routes/new');
const rateRoute = require('./routes/rate');

app.use('/product', productRoute);
app.use('/author', authorRoute);
app.use('/new', newRoute);
app.use('/new', rateRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// const User = require('./models/users');
// User.create({
//   username: 'john_doe',
//   email: 'john@example.com',
//   password: 'testing'
// })
//   .then(user => {
//     console.log('Người dùng đã được tạo:', user.toJSON());
//   })
//   .catch(error => {
//     console.error('Lỗi tạo người dùng:', error);
//   });

sequelize.sync({ force: true })
  .then(() => {
    console.log('Cơ sở dữ liệu đã được đồng bộ hóa');
  })
  .catch((err) => {
    console.error('Lỗi đồng bộ hóa cơ sở dữ liệu:', err);
  });
