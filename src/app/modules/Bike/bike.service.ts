import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();
const createBike = async(payload: {
    brand:string;
    model: string;
    year: number;
    customerId: string
}) => {
    const res = await prisma.bike.create({
        data: payload
    })
    return res;
}

const getAllBikes = async() => {
    const res = await prisma.bike.findMany();
    return res;
}

const getBikeDetails = async(id:string) => {
    const res = await prisma.bike.findUniqueOrThrow({
        where: {
            bikeId: id
        }
    })
    return res;
}

export const bikeService = {
    createBike,
    getAllBikes,
    getBikeDetails
}