import axios from 'axios'

export default insertOne = (collection, document) => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'Gw1o4JgAOP1nRJ8kYDFfUSGg00xazm9eOIVEXRSZC6MJK18VSQf3jCvwYEc7EUnR',
    }

    const body = JSON.stringify({
        "collection": collection,
        "database": "Main",
        "dataSource": "Main",
        "document": document
    });

    return {
        method: 'post',
        url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-ijzkz/endpoint/data/v1/action/insertOne',
        headers: headers,
        data: body
    };

}