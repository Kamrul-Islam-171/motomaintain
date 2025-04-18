import { PrismaClient } from "../../../../generated/prisma";


const prisma = new PrismaClient();

const creatUser = async(payload) => {
    const res = await prisma.customer.create({
        data: payload
    })
    return res;
}

export const userService = {
    creatUser
}