import { Request, Response, NextFunction } from "express";
import { StatusCode } from "../utils/statusCode";
import CardService from "../services/CardService";

export default class CardController {
  constructor(private readonly cardService: CardService) {}

  async createCardController(req: Request, res: Response, next: NextFunction) {
    try {
      const cards = await this.cardService.createCardService(req.body);
      return res.status(StatusCode.CREATED).json(cards);
    } catch (error) {
      next(error);
    }
  }

  async getAllCardsController(req: Request, res: Response, next: NextFunction) {
    try {
      const cards = await this.cardService.getAllCardsService();
      return res.status(StatusCode.OK).json(cards);
    } catch (error) {
      next(error);
    }
  }

  async getCardByIdController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;  
      const card = await this.cardService.getCardByIdService(id);   
      return res.status(StatusCode.OK).json(card);
    } catch (error) {
      next(error);
    }
  }

  async updateCardController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { body } = req;     
      const updatedCard = await this.cardService.updateCardService(id, body);
      return res.status(StatusCode.OK).json(updatedCard);
    } catch (error) {
      next(error);
    }
  }

  async deleteCardController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const deletedCard = await this.cardService.deleteCardService(id);
      return res.status(StatusCode.OK).json(deletedCard);
    } catch (error) {
      next(error);
    }
  }
}