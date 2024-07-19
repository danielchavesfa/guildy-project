import express from 'express';

const router = express.Router();
const SERVER_STATUS = 'ON';

router.get('/', (req, res) => {
  res.status(200).json({ status: SERVER_STATUS });
});

export default router;
