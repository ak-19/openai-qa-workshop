import { Router } from 'express';

const conversationRouter = Router();

import makeCall from './makeCall.js';

conversationRouter.post('/', async (req, res) => {
    const { body: { text } } = req;
    console.log(text);

    const answer = await makeCall(text);

    res.json({ answer })
})

export { conversationRouter };