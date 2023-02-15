import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/appError";

const listUserIdService = async (id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const userId = await userRepository.findOneBy({id})

    if(!userId){
        throw new AppError("User not found", 404)
    }

    return userId
}

export default listUserIdService