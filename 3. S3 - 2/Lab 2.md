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

```

Read URL:
https://codestar-t9-2021.s3.ap-southeast-1.amazonaws.com/image%20%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4BLJPDVBRRIGMP6Y%2F20210929%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20210929T065529Z&X-Amz-Expires=300&X-Amz-Signature=35469f2777f6187fcffdfcfe8749dae5d45ab0c9452569416376897be83db3b8&X-Amz-SignedHeaders=host
Upload URL:
https://codestar-t9-2021.s3.ap-southeast-1.amazonaws.com/image%20%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4BLJPDVBRRIGMP6Y%2F20210929%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20210929T065529Z&X-Amz-Expires=300&X-Amz-Signature=8cf2f0bf2c60cd5d2eff6a8260f9a50165e84ee49fff1baf0570131588b8127b&X-Amz-SignedHeaders=host
```

**Note**: Người nhận được link sẽ nhận truy cập được file.

Thử upload 1 file lên S3 bằng PreSigned URL:

- Copy Upload URL vào Postman
- Chọn Method PUT
- Ấn vào Body chọn Binary và chọn file cần upload
- Ấn Send

Nếu thành công thì sẽ nhận được status 200

![](images/2021-09-29_13-57-11.png)

Note: Trường hợp gặp lỗi Access Denied thì add thêm quyền cho user đang sử dụng.

