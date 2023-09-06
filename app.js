var userData;
var trueData;
userData = 'now';
userData = 5;
if (typeof userData === "string") {
    trueData = userData;
}
function generateErrorCode(description, errorCode) {
    throw { message: description, code: errorCode };
}
generateErrorCode("Error happened", 502);
