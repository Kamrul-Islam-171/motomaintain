import catchAsync from "../../../shared/CatchAsync";
import sendResponse from "../../../shared/SendResponse";
import httpStatus from "http-status";
import { userService } from "./user.service";

const createUser = catchAsync(async (req, res) => {

    const result = await userService.creatUser(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User Created successfuly!",
        data: result
    })
});

export const userController = {
    createUser
}