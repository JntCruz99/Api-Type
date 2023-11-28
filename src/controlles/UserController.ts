import { Request, Response } from 'express';
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"

export const getUsers = async (req: Request, res: Response) => {
    AppDataSource.initialize().then(async () => {
        
        const user = new User()
        user.firstName = "jonatas"
        user.lastName = "cruz1"
        user.age = 25
        await AppDataSource.manager.save(user)
        res.status(201).json(user)
    
    }).catch(error => 
        res.status(400).json({ message: 'The field "title" is required' }))
};
