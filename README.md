1. State được khai báo và quản lý trong App.js

+ student: Lưu thông tin sinh viên đang tra cứu
+ results: Danh sách kết quả học tập
+ isLoading: Trạng thái tải dữ liệu
+ error: Thông báo lỗi

Các component con (SearchForm, ResultTable, LoadingIndicator) chỉ nhận dữ liệu qua props và không tự quản lý state.

2. useEffect được kích hoạt khi:

+ Người dùng nhập mã sinh viên và nhấn “Tra cứu”
+ Ứng dụng bắt đầu gọi dữ liệu
+ Dữ liệu được trả về và React tự động cập nhật lại giao diện