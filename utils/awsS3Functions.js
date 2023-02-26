const axios = require("axios");

convertBase64ToFile = (base64, fileName) => {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], fileName, { type: mime });
    return file;
}




exports.awsS3Upload = async (file, id, type) => {

    console.log("fileee", file);

    convertBase64ToFile(file, id, type);


    const res = await axios(`https://th4btgkpuc.execute-api.ap-southeast-1.amazonaws.com/default/putObject?fileName=${id}&type=${file.type}`);

    const { uploadURL } = JSON.parse(res.data);
    const config = {
        headers: {
            "content-type": file.type
        }
    }
    await axios.put(uploadURL, file, config);

}