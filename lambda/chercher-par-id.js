console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event) => {
    const id = event.queryStringParameters && event.queryStringParameters.id;

    let response = {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: 'Vous devez donner un id de mdp'
    };
    if (id == null) {
        return response;
    }

    const params = {
        Bucket: "*********************************************************",
        Key: "*********************************************************",
    };

    const data = await s3.getObject(params).promise();
    console.log("Raw text:\n" + data.Body.toString('utf-8'));
    const listeMdpJson = data.Body.toString('utf-8');
    const listeMdp = JSON.parse(listeMdpJson);

    let mdp = listeMdp.find(mdp => mdp.id == id);

    response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify(mdp).toString('utf-8')
    };

    return response;
};
