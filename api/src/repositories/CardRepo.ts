export default class CardRepo {
  constructor(private cardModel: any) {}

  public async createCardRepo(body: any) {  
    return this.cardModel.create(body);
  }

  public async getAllCards() {
    return this.cardModel.findAll();
  }

  public async getCardById(id: any) {  
    return this.cardModel.findByPk(id);
  }

  public async updateCard(id: any, body: any) {  
    const { title, content, list } = body;
    const [updateCard] = await this.cardModel.update(
      { title, content, list },
      { where: { id } },
    );    
    return updateCard;
  }

  public async deleteCard(id: any) {
    return this.cardModel.destroy(
      { where: { id } },
    );
  }
}