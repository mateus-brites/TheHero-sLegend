import { ICreateHeroesDTO } from "../dtos/ICreateHeroesDTO";
import { Hero } from "../entities/hero";

interface IHeroesRepository {
 create(data: ICreateHeroesDTO): Promise<void>;
 findByID(id: string): Promise<Hero>;
 listHeroAndUserByUserID(user_id: string): Promise<Hero[]>;
 deleteHero(id: string): Promise<void>;
 listAllHeroes(): Promise<Hero[]>;
 addCash(hero_id: string, cash: number): Promise<void>;
 setUserInHero(user_id: string, hero_id: string): Promise<void>
}
export { IHeroesRepository }