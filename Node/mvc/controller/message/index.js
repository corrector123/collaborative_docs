const {httpCode, getNanoid} = require("../../../util");

const {findUserImpl} = require("../../serviceImpl/user");
const {findFileByIdImpl, findFileOnlyByIdImpl} = require("../../serviceImpl/file");
const {FindByRecipientImpl, CreateInvitationMessageMapImpl, CreateMessageMapImpl} = require("../../serviceImpl/message");
const {filePermissionImpl} = require("../../serviceImpl");
const {updateFilePermissionAcceptanceImpl} = require("../../serviceImpl/file");

exports.createInvitation = async (req,res,next) => {
    // 获取req参数
    const {userid,targetId,fileId,permissionType} = req.body;
    //获取sender和file信息
    const senderArray= await findUserImpl(userid);
    const sender = senderArray[0].username;
    let fileArray = await findFileOnlyByIdImpl(fileId)
    const fileName = fileArray[0].filename+"."+fileArray[0].filetype;
    //标题和内容编辑
    const title ="文件共享邀请提醒"
    const content = sender+"邀请您以"+permissionType+"身份一同编辑文件"+fileName
        +", 如您接受邀请，请点击右上角接受按钮，反之，请点击拒绝按钮。";
    const currentTime = new Date().toISOString().slice(0, 23).replace('T', ' ');
    //生成messageId
    let messageId = await getNanoid();

    const InvitationRes = await CreateInvitationMessageMapImpl(
        messageId,
        userid,
        targetId,
        fileId,
        title,
        content,
        currentTime,
    )
    if (InvitationRes.affectedRows !== 1) return httpCode(res, 1004);
    return httpCode(res, 200, "消息创建成功");
};
exports.getUserMessages = async (req,res,next) => {
    // 获取req参数
    const  userid  = req.loginUserId;
    let messages = await FindByRecipientImpl(userid);

    messages = JSON.parse(JSON.stringify(messages));

    // 将发送者信息添加到消息中
    const messagesWithSender = messages.map(message => {
        return {
            id: message.message_id,
            file_id:message.file_id,
            title: message.title,
            content: message.content,
            sender_id: message.sender_id,
            created_at: message.created_at,
            is_read: Boolean(message.read), // 假设数据库中是用 0/1 表示的
        };
    });
    console.log(messagesWithSender);
    return httpCode(res, 200, "消息列表获取成功",{
        messages:messagesWithSender
    });
};

// 接受邀请
exports.acceptInvitation = async (req, res, next) => {
    try {
        // 获取参数
        const {userid,targetId, file_id} = req.body;
        
        // 更新文件权限的接受状态
        const updateResult = await updateFilePermissionAcceptanceImpl(userid, file_id);
        if (updateResult.affectedRows !== 1) {
            return httpCode(res, 1004, "更新文件权限失败");
        }

        // 创建接受邀请的反馈消息
        const messageId = await getNanoid();
        const currentTime = new Date().toISOString().slice(0, 23).replace('T', ' ');
        
        // 获取用户信息
        const userArray = await findUserImpl(userid);
        const username = userArray[0].username;
        
        // 获取文件信息
        const fileArray = await findFileOnlyByIdImpl(file_id);
        const fileName = fileArray[0].filename + "." + fileArray[0].filetype;

        // 创建反馈消息
        const feedbackMessage = await CreateMessageMapImpl(
            messageId,
            userid,
            targetId,
            "邀请已接受",
            `用户 ${username} 已接受文件 ${fileName} 的编辑邀请`,
            currentTime,
            'accept'
        );

        if (feedbackMessage.affectedRows !== 1) {
            return httpCode(res, 1004, "创建反馈消息失败");
        }

        return httpCode(res, 200, "已成功接受邀请");
    } catch (error) {
        console.error('接受邀请失败:', error);
        return httpCode(res, 500, "接受邀请失败");
    }
};