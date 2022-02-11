console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
    const postdata = querystring.parse(event.body);

    let motDePasse = null;
    let motDePassejson = postdata["motDePassejson"];
    if(motDePassejson){
        motDePasse = JSON.parse(motDePassejson);
    }

    let response = {
        statusCode: 400,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body : "Pas de motDePasse reçu",
    };

    if (motDePasse == null) {
        return response;
    }

    motDePasse.id = Date.now();

    const params = {
        Bucket: "app-mdp",
        Key: "liste-motDePasse.json",
    };

    let data = await s3.getObject(params).promise();
    let listemotDePasseJson = data.Body.toString('utf-8');
    const listemotDePasse = JSON.parse(listemotDePasseJson);
    listemotDePasse.push(motDePasse);
    listemotDePasseJson = JSON.stringify(listemotDePasse);
    params.Body  = listemotDePasseJson;
    data = await s3.putObject(params).promise();

    response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: motDePasse.id
    };

    return response;
};
