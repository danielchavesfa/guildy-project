import jwt from 'jsonwebtoken';

export function getToken(payload) {
  const JWTSecret = String(process.env.JWT_SECRET);
  return jwt.sign(payload, JWTSecret);
}
