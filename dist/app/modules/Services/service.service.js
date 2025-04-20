"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const date_fns_1 = require("date-fns");
const prisma = new prisma_1.PrismaClient();
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.serviceRecord.create({
        data: {
            bikeId: payload.bikeId,
            serviceDate: new Date(payload.serviceDate),
            description: payload.description,
            status: payload.status
        }
    });
    return res;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.serviceRecord.findMany();
    return res;
});
const getAServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id
        }
    });
    return res;
});
const completeService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.serviceRecord.update({
        where: {
            serviceId: id
        },
        data: {
            completionDate: new Date(payload.completionDate),
            status: "done"
        }
    });
    return res;
});
const pendingOrInProgressServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = (0, date_fns_1.subDays)(new Date(), 7);
    // console.log(sevenDaysAgo)
    const res = yield prisma.serviceRecord.findMany({
        where: {
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
    });
    return res;
});
exports.serviceService = {
    createService,
    getAllServices,
    getAServices,
    completeService,
    pendingOrInProgressServices
};
