exports.handler = async function (event, context) {
    let status_code, msg;
    try {
        const requestBody = JSON.parse(event.body);
        if (requestBody.message) {
            status_code = 200;
            msg = requestBody.message;
        }
        else {
            msg = "Message not found. Please join in a message.";
            status_code = 404;
        }
    } catch (error) {
        msg = "Bad Request. No body found.";
        status_code = 400;
    }

    return {
        statusCode: status_code,
        body: JSON.stringify({ message: msg }),
    };
};