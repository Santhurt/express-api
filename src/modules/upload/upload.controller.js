import { AprendizImage } from "./upload.model.js";

export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No se subio ningun archivo",
            });
        }

        const id = req.params.id;
        const imageUrl = `${process.env.BASE_URL || "http://localhost:3000"}
            /uploads/aprendiz/${req.file.filename}`;

        const result = await AprendizImage.update(id, imageUrl);

        return res.status(200).json({
            success: true,
            file: {
                filename: req.file.filename,
                originalname: req.file.originalname,
                size: req.file.size,
                url: imageUrl,
            },
            result: result,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
