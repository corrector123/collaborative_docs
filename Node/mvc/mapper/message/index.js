// 数据持久层；引入 sql
const { query } = require("../../../mysql");

// 消息生成
exports.CreateMessageMap =
    async (
    message_id,
    sender_id,
    recipient_id,
    title,
    content,
    created_at,
    type,
    ) =>
    await query(
        `INSERT INTO messages(message_id,sender_id,recipient_id,title,content,created_at,is_read,type) 
                VALUES('${message_id}','${sender_id}',
                       '${recipient_id}','${title}','${content}','${created_at}',0,'${type}')`
    );
exports.CreateInvitationMessageMap =
    async (
        message_id,
        sender_id,
        recipient_id,
        file_id,
        title,
        content,
        created_at,
    ) =>
        await query(
            `INSERT INTO messages(message_id,sender_id,recipient_id,file_id,title,content,created_at,is_read,type) 
                VALUES('${message_id}','${sender_id}','${recipient_id}',
                       '${file_id}','${title}','${content}','${created_at}',0,'invite')`
        );
// 按接收者查找
exports.FindByRecipientMap = async (recipient_id) =>
        await query(
            `SELECT * FROM messages WHERE recipient_id='${recipient_id}'`
        );
