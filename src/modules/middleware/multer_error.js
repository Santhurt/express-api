import multer from "multer";

const handleMulterError = (error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
            return res
                .status(400)
                .json({ success: false, message: "Archivo muy grande" });
        }
        if (error.code === "LIMIT_FILE_COUNT") {
            return res
                .status(400)
                .json({ success: false, message: "Demasiados archivos" });
        }
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
            return res.status(400).json({
                success: false,
                message: "Campo de archivo inesperado",
            });
        }
    }

    res.status(500).json({ success: false, message: error.message });
};

export default handleMulterError;
