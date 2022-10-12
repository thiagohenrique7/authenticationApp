import { Request, Response } from "express"

class UsersControllers {
    public getUsers(req: Request, res: Response) {
        // pegar todos usuários do banco
        console.log("CHEGUEI AQUI")
    }
    public createUser(req: Request, res: Response) {
        // criar novo usuário
        console.log("CHEGUEI AQUI")
    }
}

export const UsersController = new UsersControllers();

