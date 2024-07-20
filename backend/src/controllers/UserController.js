import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

export default class UserController {
  static async create(req, res) {
    try {
      const { email, password, confirm_password } = req.body;

      if (!email) {
        return res.status(422).json({ message: 'Email obrigatório' });
      }

      if (!validator.isEmail(email)) {
        return res.status(422).json({ message: 'Email inválido' });
      }

      if (!password) {
        return res.status(422).json({ message: 'Senha obrigatória' });
      }

      if (!confirm_password) {
        return res.status(422).json({ message: 'Confirmação de senha obrigatória' });
      }

      if (password !== confirm_password) {
        const message = 'Senha e a Confirmação de senha devem ser iguais';
        return res.status(422).json({ message });
      }

      const findUserWithEmail = await User.findOne({ where: { email } });

      if (findUserWithEmail) {
        return res.status(422).json({ message: 'Email já em uso' });
      }

      const saltRounds = Number(process.env.SALT);
      const salt = await bcrypt.genSalt(saltRounds);
      const encryptedPassword = await bcrypt.hash(password, salt);

      const newUser = {
        email,
        password: encryptedPassword,
      };
      const newUserAdded = await User.create(newUser, { raw: true });

      const JWTSecret = String(process.env.JWT_SECRET);
      const token = jwt.sign(
        { id: newUserAdded.id, email: newUserAdded.email },
        JWTSecret
      );

      res.status(201).json({ message: 'Conta criada', token });
    } catch (error) {
      console.error('An error occurred when trying to create a new user:', error);
      res.status(500).json({ message: error.message });
    }
  }
}
