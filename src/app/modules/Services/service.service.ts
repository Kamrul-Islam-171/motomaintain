import { PrismaClient, STATUS } from "../../../../generated/prisma";
import { subDays } from 'date-fns';
const prisma = new PrismaClient();
const createService = async(payload: {
    bikeId:string;
    serviceDate: string;
    description: string;
    status: STATUS
}) => {
    const res = await prisma.serviceRecord.create({
        data: {
            bikeId: payload.bikeId,
            serviceDate: new Date(payload.serviceDate),
            description: payload.description,
            status: payload.status
        }
    })
    return res;
}

const getAllServices = async() => {
    const res = await prisma.serviceRecord.findMany();
    return res;
}
const getAServices = async(id:string) => {
    const res = await prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id
        }
    });
    return res;
}

const completeService = async(id:string, payload: {completionDate: string}) => {
    const res = await prisma.serviceRecord.update({
        where: {
            serviceId: id
        },
        data: {
            completionDate: new Date(payload.completionDate),
            status: "done"
        }
    })
    return res;
}


const pendingOrInProgressServices = async() => {
    const sevenDaysAgo = subDays(new Date(), 7);
    // console.log(sevenDaysAgo)
    const res = await prisma.serviceRecord.findMany({
        where : {
            AND: [
                {
                    OR: [
                        {
                            status: 'pending'
                        },
                        {
                            status: 'in_progress'
                        }
                    ],
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo
                    }
                }
            ]
           
        }
    })
    return res;
}



export const serviceService = {
    createService,
    getAllServices,
    getAServices,
    completeService,
    pendingOrInProgressServices
}