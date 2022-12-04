import CardRepo from "../repositories/CardRepo";
import { errorHandler } from "../utils/errorHandler";
import { StatusCode } from "../utils/statusCode";
import Joi from 'joi';

const cardSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  list: Joi.string().required(),
})

export default class CardService {
  constructor(private readonly cardRepo: CardRepo) {}

  async createCardService(body: any) {   
    const { error } = cardSchema.validate(body);
    if (error) throw errorHandler(StatusCode.BAD_REQUEST, 'missing params');
    return this.cardRepo.createCardRepo(body);
  }

  async getAllCardsService() {
    return this.cardRepo.getAllCards();
  }

  async getCardByIdService(id: any) {  
    return this.cardRepo.getCardById(id);
  }

  async updateCardService(id: any, body: any) {
    const cardFound = await this.cardRepo.getCardById(id);
    if (!cardFound) throw errorHandler(StatusCode.NOT_FOUND, 'card not found');
    const updateCard = await this.cardRepo.updateCard(id, body);
    return updateCard;
  }

  async deleteCardService(id: any) {
    const cardFound = await this.cardRepo.getCardById(id);
    if (!cardFound) throw errorHandler(StatusCode.NOT_FOUND, 'card not found');
    
    return this.cardRepo.deleteCard(id);
  }
}