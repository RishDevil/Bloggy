const express = require("express");
const multer = require("multer");

const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const { MONGOURI, cloud_name, api_key, api_secret } = require("./config/keys");
const crypto = require("crypto");
const mongoose = require("mongoose");

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const router = express.Router();

router.post("/", (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({ msg: "No files were uploaded." });

    const file = req.files.file;
    // if (file.size > 1024 * 1024) {
    //   removeTmp(file.tempFilePath);
    //   return res.status(400).json({ msg: "Size too large" });
    // }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is incorrect." });
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "test" },
      async (err, result) => {
        if (err) throw err;

        removeTmp(file.tempFilePath);

        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }

  //res.send(`${req.file.filename}`);
});
const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
