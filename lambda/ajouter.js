console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
    const postdata = querystring.parse(event.body);

    let mdp = null;
    let mdpjson = postdata["mdpjson"];
    if(mdpjson){
        mdp = JSON.parse(mdpjson);
    }

    let response = {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body : "Pas de mdp reçu",
    };

    if (mdp == null) {
        return response;
    }

    mdp.id = Date.now();

    const params = {
        Bucket: "app-mdp",
        Key: "liste-mdp.json",
    };

    let data = await s3.getObject(params).promise();
    let listeMdpJson = data.Body.toString('utf-8');
    const listeMdp = JSON.parse(listeMdpJson);
    listeMdp.push(mdp);
    listeMdpJson = JSON.stringify(listeMdp);
    params.Body  = listeMdpJson;
    data = await s3.putObject(params).promise();

    response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: mdp.id
    };

    return response;
};
