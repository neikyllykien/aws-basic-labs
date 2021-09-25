- Tạo 1 bucket mới

```
Bucket name: codestart-t9-2021
AWS Region: ap-southeast-1
```

![](images/2021-09-25_17-19-19.png?raw=true)

![](images/2021-09-25_17-30-11.png?raw=true)

![](images/2021-09-25_17-33-31.png?raw=true)

- Upload File/Folder mới

![](images/upload-file-folder.gif?raw=true)

- Xóa File/Di chuyển file.

![](images/delete-move.gif?raw=true)

- Thay đổi các thông tin metadata.

![](images/metadata.gif?raw=true)

- Thay đổi quyền truy cập file.

![](images/permission.gif?raw=true)

- Gắn tag, ...

![](images/tag.gif?raw=true)


S3 Bucket Policy chống delete bucket
```

{
  "Id": "ExamplePolicyId12345678",
  "Statement": [
    {
      "Sid": "ExampleStmtSid12345678",
      "Action": [
        "s3:DeleteBucket"
      ],
      "Effect": "Deny",
      "Resource": "arn:aws:s3:::testdelete1222",
      "Principal": {
        "AWS": [
          "*"
        ]
      }
    }
  ]
}

```

https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html