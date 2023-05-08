import { User } from "@prisma/client"
import client from "../client/client"
import CryptoJS from "crypto-js"
import dotenv from 'dotenv'

dotenv.config

const hash = (password: string) => 
    CryptoJS.HmacSHA3(password, process.env.SECRET_KEY).toString()


export const login = async (email: string, password: string): Promise<User | null> => 
    await client.user.findFirst({
        where: {
            email,
            password: hash(password)
        }
    }) ?? null


export const register = async (user: User): Promise<number> => {
    const { email, name, password } = user
    const createdUser = await client.user.create({
        data: {
            email,
            name,
            password: hash(password)
        }
    })
    return createdUser.id
}