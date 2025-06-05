// 引入mapper数据持久层类
const { messageMap } = require("../../mapper");

// 消息创建
exports.CreateMessageMapImpl
    =
    async (
        message_id,
        sender_id,
        recipient_id,
        title,
        content,
        created_at,
        type
    ) =>
    await messageMap.CreateMessageMap(message_id,sender_id,recipient_id,title,content,created_at,type);

exports.CreateInvitationMessageMapImpl
    =
    async (
        message_id,
        sender_id,
        recipient_id,
        file_id,
        title,
        content,
        created_at,
    ) =>
        await messageMap.CreateInvitationMessageMap(message_id,sender_id,recipient_id,file_id,title,content,created_at);

// 按接收者查找
exports.FindByRecipientImpl = async (recipient_id) => await messageMap.FindByRecipientMap(recipient_id);