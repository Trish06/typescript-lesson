let userData: unknown;
let trueData: string

userData = 'now'
userData = 5
if(typeof userData === "string") {
  trueData = userData
}

function generateErrorCode(description : string, errorCode : number) : never{
  throw {message : description, code : errorCode}
}

function infiniteLoop(): never {
  while(true){}
}
generateErrorCode("Error happened", 502);
infiniteLoop();