import db from "./db";
import bcrypt from "bcryptjs";

export const createUser = (username, email, password) => {

  const hashedPassword = bcrypt.hashSync(password, 10);

  const stmt = db.prepare(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
  );
  const info = stmt.run(username, email, hashedPassword);
  return info.lastInsertRowid;
};

export const getUserByEmail = async (email) => {
  if (!email) {
    throw new Error("Email is required");
  }

    const stmt = db.prepare("SELECT * FROM users WHERE email = ?");
    const user = stmt.get(email);
    
    if(user){
        return user;
    } else {
        throw new Error("User not found");
    }
  
}

export const checkIsProfileCompleted = (user_id) => {
    const stmt = db.prepare("SELECT isProfileCompleted FROM users WHERE id = ?");
    const info = stmt.get(user_id);
    return info.isProfileCompleted
};

export const updateIsProfileCompleted = (user_id, isProfileCompleted) => {
    const stmt = db.prepare("UPDATE users SET isProfileCompleted = ? WHERE id = ?");
    const info = stmt.run(isProfileCompleted, user_id);
    return info.changes;
};