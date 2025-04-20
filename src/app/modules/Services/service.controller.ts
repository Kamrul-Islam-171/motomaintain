import catchAsync from "../../../shared/CatchAsync";
import sendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import { serviceService } from "./service.service";



const createService = catchAsync(async (req, res) => {

    const result = await serviceService.createService(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Service record created successfully",
        data: result
    })
});
const getServices = catchAsync(async (req, res) => {

    const result = await serviceService.getAllServices();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result
    })
});
const getAServices = catchAsync(async (req, res) => {

    const result = await serviceService.getAServices(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result
    })
});
const completeService = catchAsync(async (req, res) => {

    const result = await serviceService.completeService(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service marked as completed",
        data: result
    })
});
const pendingOrInProgressServices = catchAsync(async (req, res) => {
    console.log("i am")

    const result = await serviceService.pendingOrInProgressServices();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result
    })
});



export const serviceController = {
    createService,
    getServices,
    getAServices,
    completeService,
    pendingOrInProgressServices
   
    
}