import multer from "multer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname,"..", "..", "uploads"));
    },
    filename: (req, file, callback) => {
      const time = new Date().getTime();

      callback(null, `${time}_${file.originalname}`);
    },
  }),
};
