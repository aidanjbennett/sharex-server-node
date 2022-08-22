import { Router } from 'express';

const router = Router();

router.get('/hello', (req, res) => {
	res
		.status(200)
		.send({ message: 'Hello  from sharex server node', status: 'OK' });
});

export default router;
