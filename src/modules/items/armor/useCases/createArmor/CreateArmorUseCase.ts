import { inject, injectable } from "tsyringe";
import { ICreateArmorDTO } from "../../dtos/ICreateArmorDTO";
import { IArmorRepository } from "../../repositories/IArmorRepository";

@injectable()
class CreateArmorUseCase {

 constructor(
  @inject("ArmorRepository")
  private armorRepository: IArmorRepository
 ) { }

 async execute({ name, armor, weight }: ICreateArmorDTO): Promise<void> {

  await this.armorRepository.create({ name, armor, weight })
 }
}
export { CreateArmorUseCase }