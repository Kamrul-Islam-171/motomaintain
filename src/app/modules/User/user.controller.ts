import catchAsync from "../../../shared/CatchAsync";
import sendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import { userService } from "./user.service";

const createUser = catchAsync(async (req, res) => {

    const result = await userService.creatUser(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Customer created successfully",
        data: result
    })
});
const getAllUser = catchAsync(async (req, res) => {

    const result = await userService.getAllCustomers();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })
});
const getACustomer = catchAsync(async (req, res) => {

    const result = await userService.getACustomer(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer fetched successfully",
        data: result
    })
});
const updateCustomer = catchAsync(async (req, res) => {

    const result = await userService.updateCustomer(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer updated successfully",
        data: result
    })
});
const deleteCustomer = catchAsync(async (req, res) => {

    await userService.deleteCustomer(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer deleted successfully",
        data: null
    })
});

export const userController = {
    createUser,
    getAllUser,
    updateCustomer,
    getACustomer,
    deleteCustomer
}