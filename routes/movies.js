const express = require('express');
const router = express.Router();
const movies = require('../data/movies.json');

// المسار لعرض الأفلام أو تصفية الأفلام بناءً على النوع
router.get('/', (req, res) => {
  const genre = req.query.genre; // جلب النوع من استعلام الرابط
  
  // إذا كان يوجد نوع معين، نقوم بتصفية الأفلام بناءً عليه
  if (genre) {
    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    res.render('index', { movies: filteredMovies });
  } else {
    // إذا لم يتم تحديد نوع، نعرض جميع الأفلام
    res.render('index', { movies });
  }
});

module.exports = router;
