const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// إعدادات
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// المسارات
const movieRoutes = require('./routes/movies');
app.use('/', movieRoutes);

// معالجة الأخطاء
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page Not Found' });
});

// تشغيل الخادم
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
