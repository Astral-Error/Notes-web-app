import express from "express"
import {getNotes,createNote,putNote,deleteNote, getNoteById} from "../controller/notesController.js"
const router = express.Router();

router.get("/", getNotes);
router.get("/:id",getNoteById);
router.post("/", createNote);
router.put("/:id", putNote);
router.delete("/:id", deleteNote);

export default router;