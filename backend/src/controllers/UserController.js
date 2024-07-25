import User from '../models/User.js';
import validator from 'validator';
import {
  confirmIfIsSamePassword,
  generateEncryptedPassword,
} from '../helpers/handleEncryptedPassword.js';
import { getToken } from '../helpers/handleTokens.js';

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

      const encryptedPassword = await generateEncryptedPassword(password);

      const newUser = {
        email,
        password: encryptedPassword,
      };
      const newUserAdded = await User.create(newUser, { raw: true });
      const token = getToken({ id: newUserAdded.id, email: newUserAdded.email });

      res.status(201).json({ message: 'Conta criada', token });
    } catch (error) {
      console.error('An error occurred when trying to create a new user:', error);
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email) {
        return res.status(422).json({ message: 'Email obrigatório' });
      }

      if (!validator.isEmail(email)) {
        return res.status(422).json({ message: 'Email inválido' });
      }

      if (!password) {
        return res.status(422).json({ message: 'Senha obrigatória' });
      }

      const user = await User.findOne({ where: { email }, raw: true });

      if (!user) {
        return res.status(404).json({ message: 'Email ou senha inválidos' });
      }

      const isSamePassword = await confirmIfIsSamePassword(password, user.password);
      const isSamePasswordAndSameEmail = isSamePassword && email === user.email;

      if (!isSamePasswordAndSameEmail) {
        return res.status(422).json({ message: 'Email ou senha inválidos' });
      }

      const token = getToken({ email: user.email });

      res.status(200).json({ message: 'ok', token });
    } catch (error) {
      console.error('An error occurred when trying to login:', error);
      res.status(500).json({ message: error.message });
    }
  }
}
