import { Router } from 'express';
import CardRepo from '../repositories/CardRepo';
import CardService from '../services/CardService';
import CardController from '../controllers/CardController';
import db from '../models';
import auth from '../middlewares/auth';

const cardRepo = new CardRepo(db.Cards);
const cardService = new CardService(cardRepo);
const cardController = new CardController(cardService);

const cardRouter = Router();

cardRouter.post('/', auth, cardController.createCardController.bind(cardController));
cardRouter.get('/', auth, cardController.getAllCardsController.bind(cardController));
cardRouter.put('/:id', auth, cardController.updateCardController.bind(cardController));
cardRouter.delete('/:id', auth, cardController.deleteCardController.bind(cardController));

export default cardRouter;
