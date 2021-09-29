# 1. PreSigned URL

Chúng ta sẽ tạo thử Presign URL để download một object và upload 1 object

Cách tạo Presigned URL:
### Tạo bằng code:
Yêu cầu:
```
Node JS
AWS CLI (đã chạy aws configure và nhập credentials)
Postman
```


Vào folder presigned-url-demo

Sửa nội dung file **presigned-url.js**:

Cập nhật giá trị các biến sau:
 - myBucket: Tên bucket của mình (Ví dụ: ```'codestar-t9-2021'```)
 - myKey: Tên object muốn download hoặc upload (Ví dụ: ```'image (1).png'```)


Chạy lệnh để thực thi
```
node presigned-url.js
```

Sau khi thực thi thành công sẽ nhận được một đường dẫn như sau:
https://codestar-t9-2021.s3.amazonaws.com/image%20%281%29.png?AWSAccessKeyId=AKIA4BLJPDVBRRIGMP6Y&Expires=1632897624&Signature=h1Qwi2nn1M4F2Y3dF%2BVFaXM8RuM%3D

**Note**: Người nhận được link sẽ nhận truy cập được file.