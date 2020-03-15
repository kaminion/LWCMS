const path = require("path");
const app = require(path.join(__dirname, '../../app'));
const os = require('os');
require('dotenv').config();

const port = (process.env.port || '3000');

app.listen(port, ()=>{

    let netWorkinfo = os.networkInterfaces();
    let homeIp = null;

    // IP 추출 
    Object.keys(netWorkinfo).forEach((key) => {

        // 이더넷만 추출하게할것, VMWARE같은것 제외
        if (!key.includes('이더넷') && !key.includes('eth') && !key.includes('en') ) return -1;

        // 배열 안에서 객체 또 추출
        netWorkinfo[key].forEach((Obj) => {
        
            // 실제 아이피추출 조건문
            if (Obj['family'].toString().indexOf("IPv4") == -1 || Obj['internal'] !== false) return -1;
            homeIp = Obj['address'];
               
        });

    });

    // 서버가동 멘트
    console.log("웹 서버 가동");
    console.log("서버IP : " + homeIp + ":" + port);
    console.log("서버PC명 : " + os.hostname);
    console.log("OS : " + os.platform());
});