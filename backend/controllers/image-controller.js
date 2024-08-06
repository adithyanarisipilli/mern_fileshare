import File from '../models/file.js';

export const uploadImage = async (req, res) => {
   console.log(req);
   const fileObj = {
      path: req.file.path,
      name: req.file.originalname,
   };
   try {
      const file = await File.create(fileObj);
      res.status(201).json({ path: `https://mern-fileshare-2.onrender.com/file/${file._id}` });
   } catch (error) {
      console.error("Upload failed with error: " + error);
      res.status(500).json({ message: "Internal Server Error" });
   }
};

export const getImage = async (req, res) => {
   try {
      console.log(req.params.fileId);
      const file = await File.findById(req.params.fileId);
      file.downloadCount++;
      await file.save();
      res.download(file.path, file.name);
   } catch (error) {
      console.error("Failed to retrieve file with error: " + error);
      res.status(500).json({ message: "Internal Server Error" });
   }
};
