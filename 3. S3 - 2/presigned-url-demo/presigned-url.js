const AWS = require('aws-sdk')


// Hard code access key id nếu cần thiết
AWS.config.update({
    // accessKeyId: ':)))',
    // secretAccessKey: ':DDDD',
    region: 'ap-southeast-1',
    signatureVersion: 'v4'
});

const s3 = new AWS.S3({
    signatureVersion: 'v4',
})

const myBucket = 'codestar-t9-2021'
const myKey = 'image (1).png'
const signedUrlExpireSeconds = 60 * 5

const url = s3.getSignedUrl('getObject', {
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds
})

console.log("Read URL:")
console.log(url)

// Thay thành putObject để upload
const uploadKey = 'image (2).png'
const uploadUrl = s3.getSignedUrl('putObject', {
    Bucket: myBucket,
    Key: uploadKey,
    Expires: signedUrlExpireSeconds
})

console.log("Upload URL:")
console.log(uploadUrl)