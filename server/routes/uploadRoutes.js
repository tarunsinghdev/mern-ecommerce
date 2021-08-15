import express from 'express';
import multer from 'multer';
import path from 'path';
import sharp from 'sharp';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  async filename(req, file, cb) {
    cb(
      null,
      `${file.originalname.split('.')[0]}-${Date.now()}${path
        .extname(file.originalname)
        .toLowerCase()}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname));
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post('/', upload.single('image'), (req, res) => {
  req.file.filename = `${req.file.destination}/converted/${
    req.file.originalname.split('.')[0]
  }-${Date.now()}.webp`;

  sharp(req.file.path)
    .webp({ lossless: true })
    .toFile(req.file.filename, (err) => console.log(err));
  res.send(`/${req.file.filename}`);
});

export default router;
