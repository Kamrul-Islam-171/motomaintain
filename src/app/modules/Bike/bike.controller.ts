import catchAsync from "../../../shared/CatchAsync";
import sendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import { bikeService } from "./bike.service";


const createBike = catchAsync(async (req, res) => {

    const result = await bikeService.createBike(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Bike added successfully",
        data: result
    })
});
const getAllBikes = catchAsync(async (req, res) => {

    const result = await bikeService.getAllBikes();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result
    })
});
const getBikeDetails = catchAsync(async (req, res) => {

    const result = await bikeService.getBikeDetails(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bike fetched successfully",
        data: result
    })
});


export const bikeController = {
    createBike,
    getAllBikes,
    getBikeDetails
    
}