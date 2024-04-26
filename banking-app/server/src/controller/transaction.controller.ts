import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { BankTransfer } from "../entity/BankTransfer";

export class TransactionController extends Controller{
    repository = AppDataSource.getRepository(BankTransfer);

    create = async (req, res) => {
        try{
            const entity = this.repository.create(req.body as object);
            delete entity.id;
            delete entity.timestamp;

            const saveEntity = await this.repository.save(entity);
            res.json(saveEntity);
        } catch(err){
            this.handleError(res, err);
        }
    };

    transactionsOfUser = async (req, res) => {
        try{
            const userId = req.params.userId;

            const transactions = await this.repository.find({
                where: {
                    source: { id: userId }
                }
            });

            res.json(transactions);
        } catch(err){
            this.handleError(res, err);
        }
    };

}