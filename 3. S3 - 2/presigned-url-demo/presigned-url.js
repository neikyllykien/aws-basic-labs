const AWS = require('aws-sdk')

const s3 = new AWS.S3()
// Hard code access key id nếu cần thiết
// AWS.config.update({accessKeyId: 'id-omitted', secretAccessKey: 'key-omitted'})

// Tried with and without this. Since s3 is not region-specific, I don't
// think it should be necessary.
// AWS.config.update({region: 'us-west-2'})

const myBucket = 'codestar-t9-2021'
const myKey = 'image (1).png'
const signedUrlExpireSeconds = 60 * 5

const url = s3.getSignedUrl('getObject', {
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds
})

console.log(url)