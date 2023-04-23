const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderPath = path.join(__dirname, "/public/img/uploads");
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    cb(null, folderPath);
},
    filename: function (req, file, cb) {
        let uId = req.body.id;
        if (!uId) {
            uId = '0';
        }
        const originalName = file.originalname;
        const ext = path.extname(originalName);
        const newFileName = 'uid_' + uId + '_avatar' + ext;
        cb(null, newFileName);
    }
});

const upload = multer({ storage });

// Загрузка статических файлов
app.use(express.static(path.join(__dirname, '/public/img/uploads')));


// Маршрут для загрузки файла
app.post('/upload', upload.single('avatar'), (req, res) => {
  if (!req.file) {
    res.status(400).send('Ошибка: файл не найден');
  } else {
        // Получаем путь к загруженному файлу на сервере
        const filePath = path.join(req.file.filename);
        // Отправляем путь в ответе сервера
        res.send({ message: 'Файл загружен', filePath });
        console.log(filePath)
  }
});

app.get('/upload/:filename', (req, res) => {
    const file = req.params.filename;
    const filePath = path.join(__dirname, '/public/img/uploads', file);
  
    res.sendFile(filePath);
  });

  app.delete('/upload/:filename', (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, '/public/img/uploads', fileName);
    fs.unlink(filePath, err => {
      if (err) {
        console.error(err);
        res.status(500).send('Ошибка удаления файла');
      } else {
        res.send('Файл удален');
      }
    });
  });


// Запуск сервера на порту 3031
app.listen(3031, () => {
  console.log('Сервер запущен на порту 3031');
});