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