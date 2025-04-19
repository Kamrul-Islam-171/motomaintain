import { PrismaClient } from "../../../../generated/prisma";


const prisma = new PrismaClient();

const creatUser = async(payload:{
    name: string;
    email:string;
    phone:string
}) => {
    const res = await prisma.customer.create({
        data: payload
    })
    return res;
}

const getAllCustomers = async() => {
    const res = await prisma.customer.findMany();
    return res;
}
const getACustomer = async(id:string) => {
    const res = await prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id
        }
    });
    return res;
}

const updateCustomer = async(id:string, payload: {
    name:string;
    phone:string
}) => {
    
    const res = await prisma.customer.update({
        where: {
            customerId: id
        },
        data: payload
    })
    return res;
}

const deleteCustomer = async(id:string) => {
    const res = await prisma.customer.delete({
        where: {
            customerId: id
        }
    })
    return res;
}

export const userService = {
    creatUser,
    getAllCustomers,
    getACustomer,
    updateCustomer,
    deleteCustomer
}