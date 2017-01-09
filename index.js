'use strict'

exports.handler = (event, context, callback) => {
  // console.log('Received event:', JSON.stringify(event, null, 2))

  // event.queryStringParameters.parm1 === "ABCDEFG"

  context.succeed({
   statusCode: '400',
   body: JSON.stringify({ error: 'We had an error' }),
   headers: {
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*'
  }

  // or

  context.succeed({
    statusCode: '200',
    body: `<?xml version="1.0" ?>I'm returning XML for some reason!</bibRecords>`,
    headers: {
      'Content-Type': 'application/xml',
      'Access-Control-Allow-Origin': '*'
    }


}
