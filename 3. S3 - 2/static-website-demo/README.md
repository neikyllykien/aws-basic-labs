1. Tạo 1 bucket mới
2. Remove permission: Disabled with Block all public access, Public Access withACL
3. Upload source html ở mục **www** đến root folder của s3, make public bằng Bucket Policy

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
4. Enable Static Website in S3 (property)

(Optional) Redirect config rule:
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

5. Kích hoạt Static website hosting

(Vào Properties --> Static website hosting)

Static website hosting: Chọn **Enable**

Index document: **index.html**

Save


Truy cập endpoint


6. Create Distribution (Cloudfront), point to S3

**B0**: Vào dịch vụ CloudFront: https://console.aws.amazon.com/cloudfront/v3/home?region=ap-southeast-1#/welcome

**B1**: Nhấn Create a CloudFront distribution

**B2**: Ở màn hình Create distribution

Origin domain: Chọn bucket s3 vừa tạo (Ví dụ: codestar-static-demo.s3.ap-southeast-1.amazonaws.com)

Tất cả tùy chọn còn lại giữ default.

Nhấn **Create distribution**

Note: Chờ một vài phút đề CloudFront được khởi tạo

**B3**: Tạo cache behaviors 5 phút

Edit record ```Default (*)```

Ở Cache key and origin requests --> Legacy cache settings --> Customize

Minimum TTL: 300 (5 phút)

Save cache

**B4**: 

Vào bằng đường dẫn CloudFront

Ví dụ: Vào https://d203u9jphuws1c.cloudfront.net/index.html

---
# Lab 3:

Lambda Extract S3:

https://kipalog.kaopiz.com/posts/Multiple-file-upload-into-Amazon-s3-bucket