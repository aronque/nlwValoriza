import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";

@EntityRepository()
class ComplimentsRepository extends Repository<Compliment>{

}

export { ComplimentsRepository }