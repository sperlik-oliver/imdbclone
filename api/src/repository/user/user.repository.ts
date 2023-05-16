import { User } from "@prisma/client"
import client from "../client/client"
import CryptoJS from "crypto-js"
import dotenv from 'dotenv'

dotenv.config()

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

export const deleteAccount = async (email: string): Promise<void> => {
    await client.user.delete({ where: { email } })
}

export const addFriend = async (adder: number, added: number): Promise<void> => {
    await client.$transaction([
        client.user.update({
            where: {
                id: adder
            },
            data: {
               friends: { connect: [{ id: added }] }
            }
        }),
        client.user.update({
            where: {
                id: added
            },
            data: {
                friends: { connect: [{ id: adder }] }
            }
        })
    ])
}

export const removeFriend = async (remover: number, removed: number): Promise<void> => {
    await client.$transaction([
        client.user.update({
            where: {
                id: remover
            },
            data: {
               friends: { disconnect: [{ id: removed }] }
            }
        }),
        client.user.update({
            where: {
                id: removed
            },
            data: {
                friends: { disconnect: [{ id: remover }] }
            }
        })
    ])
}
 
export const all = async (): Promise<User[]> => await client.user.findMany()