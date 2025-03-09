import express from "express";
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);   // ✅ POST request
router.get("/users", getAllUsers);   // ✅ GET request
router.get("/users/:id", getUser);   // ✅ GET single user
router.put("/users/:id", updateUser); // ✅ UPDATE user
router.delete("/users/:id", deleteUser); // ✅ DELETE user

export default router;