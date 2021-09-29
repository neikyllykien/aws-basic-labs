* Tạo 1 bucket mới
* Remove permission: Disabled with Block all public access, Public Access withACL
* Upload source html ở mục _www_ đến root folder của s3, make public bằng Bucket Policy

Note: Update lại ARN của bucket. Ví dụ ```"Resource": "arn:aws:s3:::codestar-static-demo/*"```

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::buckket-name/*"
        }
    ]
}
```

* Enable Static Website in S3 (property)
(Optional) Redirect config rule:


* Kích hoạt Static website hosting

(Vào Properties --> Static website hosting)
Static website hosting: Chọn Enable
Index document: index.html

```
[
    {
        "Condition": {
            "KeyPrefixEquals": "docs/"
        },
        "Redirect": {
            "ReplaceKeyPrefixWith": "documents/"
        }
    }
]
```

Truy cập endpoint


* Create Distribution (Cloudfront), point to S3

Vào dịch vụ CloudFront: https://console.aws.amazon.com/cloudfront/v3/home?region=ap-southeast-1#/welcome

B1: Nhấn Create a CloudFront distribution
B2: Ở màn hình Create distribution

Origin domain: Chọn bucket s3 vừa tạo (Ví dụ: codestar-static-demo.s3.ap-southeast-1.amazonaws.com)
Nhấn **Create distribution**

Note: Chờ một vài phút đề CloudFront được khởi tạo

B3: Tạo cache behaviors 5 phút

Edit record ```Default (*)```

Ở Cache key and origin requests --> Legacy cache settings --> Customize

Minimum TTL: 300 (5 phút)

B4: Save cache

Vào https://d203u9jphuws1c.cloudfront.net/index.html




* Lambda Extract S3:

https://kipalog.kaopiz.com/posts/Multiple-file-upload-into-Amazon-s3-bucket