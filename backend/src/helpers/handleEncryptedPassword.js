import bcrypt from 'bcrypt';

async function generateSalt() {
  const saltRounds = Number(process.env.SALT);
  return await bcrypt.genSalt(saltRounds);
}

export async function generateEncryptedPassword(password) {
  try {
    const salt = await generateSalt();
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log('An error occurred when try to confirm password with hash:', error);
    return null;
  }
}

export async function confirmIfIsSamePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}
