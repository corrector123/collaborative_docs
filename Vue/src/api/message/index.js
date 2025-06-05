// 消息相关API
import { fetch } from "@/core/index.js";

export const CreateInvitation_API = (data) => {
    return fetch({
        url: "/message/createInvitation",
        method: "post",
        data
    });
};
// 获取用户消息列表
export const GetUserMessages_API = () => {
    return fetch({
        url: "/message/getUserMessages",
        method: "get",
    });
};

// 接受邀请
export const AcceptInvitation_API = (data) => {
    return fetch({
        url: "/message/acceptInvitation",
        method: "post",
        data
    });
};

// 拒绝邀请
export const RejectInvitation_API = (messageId) => {
    return fetch({
        url: "/message/rejectInvitation",
        method: "post",
        data: { messageId }
    });
};
