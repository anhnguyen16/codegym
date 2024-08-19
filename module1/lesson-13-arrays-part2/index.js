// /*
//  * Các hàm thông dụng khi làm việc với mảng
//  */
//
// const feeds = [
//     {
//         "id": 769,
//         "user_id": 1328,
//         "feed_type": 1,
//         "blog_post_id": null,
//         "deleted_at": null,
//         "created_at": "2024-08-15 15:13:01",
//         "updated_at": "2024-08-15 15:13:01",
//         "text": "💥CÓ CASE CỨ THI, KHOE ĐI NGẠI GÌ💥<br/><br/>“Mới module 1 có tham gia Khoe Festival được không?”<br/><br/>“Em không có gì để KHOE cả!”<br/><br/>“Sản phẩm của em “lỡm\" lắm, chắc không thi được đâu”<br/><br/>‼️ĐỪNG LO LẮNG‼️<br/><br/>“KHOE FESTIVAL 2024 không phải một cuộc thi để phân định cao thấp, thắng thua, không phải để đánh giá năng lực hay tính hoàn thiện của sản phẩm. Mà KHOE Festival là sân chơi giúp 500 anh em CodeGymer tự tin khoe cá tính, kỹ năng lập trình, khả năng sáng tạo. Là cơ hội để cùng giao lưu, học hỏi, mở rộng network, xây dựng Portfolio ấn tượng để tăng cơ hội việc làm qua việc showcase sản phẩm của mình.<br/><br/>>> Tham gia KHOE, vừa được học, vừa được chơi, vừa có quà mang về!<br/><br/>👉Nếu vẫn còn lăn tăn, chưa tự tin thì lắng nghe những chia sẻ của học viên và Ban giám khảo tham gia Khoe Festival 2021 để tiếp thêm động lực, mạnh dạn gửi đăng ký về form ngay nhé!!<br/><br/>----------------------------------------<br/><br/>🟠🔵THÔNG TIN CUỘC THI:<br/><br/>🔽1. Vòng Sơ loại<br/><br/>- Thời gian: 08/8/2024 - 18/8/2024<br/><br/>- Hình thức: Online<br/><br/>- Đối tượng tham gia: Học viên đang học tại CodeGym<br/><br/>- Cách tham gia: Học viên gửi link sản phẩm đăng ký dự thi, kèm mô tả ngắn về sản phẩm qua form đăng ký:https://forms.gle/4QHWe2Md6FRm6aoG9  <br/><br/> 🔽2. Vòng Chung kết <br/><br/>- Thời gian: 13:30 - 17:30 | Thứ Sáu, 23/8/2024<br/><br/>- Hình thức: Offline tại văn phòng CodeGym Hà Nội, CodeGym Đà Nẵng, CodeGym Sài Gòn, Online toàn hệ thống<br/><br/>- Chi tiết: 10 cá nhân/nhóm xuất sắc nhất bước vào chung kết sẽ có cơ hội thuyết trình về sản phẩm của mình trước Ban Giám khảo.<br/><br/>#Codegym #khoefestival2024 #hoclaptrinh #IT",
//         "user_profiles": {
//             "first_name": "Phạm Thị",
//             "last_name": "Thuý",
//             "roles_centers": [
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 2,
//                     "center_name": "CodeGym Đà Nẵng"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 4,
//                     "center_name": "CodeGym Huế"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 7,
//                     "center_name": "CodeGym Việt Trì"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 8,
//                     "center_name": "CodeGym Quảng Trị"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 10,
//                     "name": "Center Manager",
//                     "description": "Giám đốc Trung tâm đào tạo",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 15,
//                     "name": "Accountant",
//                     "description": "Kế toán viên",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 10,
//                     "center_name": "CodeGym NAL"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 11,
//                     "center_name": "CodeGym Thanh Xuân"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 12,
//                     "center_name": "CodeGym Sài Gòn"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 13,
//                     "center_name": "CodeGym Tester"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 15,
//                     "center_name": "CodeGym Việt Nam"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 14,
//                     "center_name": "CodeGym Online"
//                 }
//             ],
//             "avatar_path": "photos/C773D061-BA31-4766-8174-744CCDD0C586_1686533903.jpg"
//         },
//         "comments_count": 1,
//         "photos": [],
//         "metadata_likes": {
//             "user_liked": {},
//             "emotions": {
//                 "total": 1,
//                 "like": 1,
//                 "haha": 0,
//                 "love": 0,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 1
//     },
//     {
//         "id": 766,
//         "user_id": 1328,
//         "feed_type": 2,
//         "blog_post_id": null,
//         "deleted_at": null,
//         "created_at": "2024-08-12 13:52:24",
//         "updated_at": "2024-08-12 13:52:24",
//         "text": "💥💥KHOE FESTIVAL 2024 HỨA HẸN BÙNG CHOÁY HƠN 2021<br/><br/>Ai sợ thì đi về!!!<br/><br/>Không chỉ là một cuộc thi, KHOE Festival còn là sân chơi giúp 500 anh em CodeGymer tự tin khoe cá tính, kỹ năng lập trình, khả năng sáng tạo. Là cơ hội để cùng giao lưu, học hỏi, mở rộng network, xây dựng Portfolio ấn tượng để tăng cơ hội việc làm qua việc showcase sản phẩm của mình.<br/><br/>Nếu vẫn chưa biết mình sẽ khoe gì, hãy cùng xem lại những sản phẩm đặc sắc trong phiên KHOE FESTIVAL 2021 nhé!!!<br/><br/>----------------------------------------<br/><br/>🟠🔵THÔNG TIN CUỘC THI:<br/><br/>🔽1. Vòng Sơ loại<br/><br/>- Thời gian: 08/8/2024 - 18/8/2024<br/><br/>- Hình thức: Online<br/><br/>- Đối tượng tham gia: Học viên đang học tại CodeGym<br/><br/>- Cách tham gia: Học viên gửi link sản phẩm đăng ký dự thi, kèm mô tả ngắn về sản phẩm qua form đăng ký:https://forms.gle/4QHWe2Md6FRm6aoG9  <br/><br/> 🔽2. Vòng Chung kết <br/><br/>- Thời gian: 13:30 - 17:30 | Thứ Sáu, 23/8/2024<br/><br/>- Hình thức: Offline tại văn phòng CodeGym Hà Nội, CodeGym Đà Nẵng, CodeGym Sài Gòn, Online toàn hệ thống<br/><br/>- Chi tiết: 10 cá nhân/nhóm xuất sắc nhất bước vào chung kết sẽ có cơ hội thuyết trình về sản phẩm của mình trước Ban Giám khảo.<br/><br/>🟠🔵TIÊU CHÍ CHẤM THI:<br/><br/>Các sản phẩm sẽ được Ban giám khảo đánh giá và chấm điểm trên thang điểm 100. Với những tiêu chí sau:<br/><br/>- Tính sáng tạo: Đề tài mới, lạ, sáng tạo, thể hiện được sự độc đáo<br/><br/>- Tính ứng dụng thực tiễn <br/><br/>- Độ khó kỹ thuật và độ phức tạp của sản phẩm/dự án<br/><br/>- Khả năng thuyết trình thuyết phục, lôi cuốn.<br/><br/>- Yếu tố khác\t như tính thẩm mỹ, khả năng ứng dụng, sự đầu tư và chuẩn bị kỹ lưỡng,...<br/><br/>🚀Phát triển bản thân, bứt phá giới hạn. Bạn đã sẵn sàng để \"KHOE\" tài năng và ẵm giải thưởng lên đến 3.000.000đ chưa? Đừng ngần ngại gửi sản phẩm để tham gia Khoe Festival 2024 cùng CodeGym nhé!!!<br/><br/>----------------------------------------<br/><br/>CODEGYM - HỆ THỐNG ĐÀO TẠO LẬP TRÌNH HIỆN ĐẠI <br/><br/>🏢 CodeGym Hà Nội | 23.TT01, Khu đô thị Mon City, Mỹ Đình 2 <br/><br/>➖ CodeGym Sài Gòn | 152 Điện Biên Phủ, Phường 25, Q. Bình Thạnh<br/><br/>➖ CodeGym Đà Nẵng | 295 Nguyễn Tất Thành, Quận Hải Châu<br/><br/>📞 Hotline: 0989 534 458 <br/><br/>📧 Email: info@codegym.vn <br/><br/>🌎 Website: codegym.vn<br/><br/>#Codegym #khoefestival2024 #hoclaptrinh #IT",
//         "user_profiles": {
//             "first_name": "Phạm Thị",
//             "last_name": "Thuý",
//             "roles_centers": [
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 2,
//                     "center_name": "CodeGym Đà Nẵng"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 4,
//                     "center_name": "CodeGym Huế"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 7,
//                     "center_name": "CodeGym Việt Trì"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 8,
//                     "center_name": "CodeGym Quảng Trị"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 10,
//                     "name": "Center Manager",
//                     "description": "Giám đốc Trung tâm đào tạo",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 15,
//                     "name": "Accountant",
//                     "description": "Kế toán viên",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 10,
//                     "center_name": "CodeGym NAL"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 11,
//                     "center_name": "CodeGym Thanh Xuân"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 12,
//                     "center_name": "CodeGym Sài Gòn"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 13,
//                     "center_name": "CodeGym Tester"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 15,
//                     "center_name": "CodeGym Việt Nam"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 14,
//                     "center_name": "CodeGym Online"
//                 }
//             ],
//             "avatar_path": "photos/C773D061-BA31-4766-8174-744CCDD0C586_1686533903.jpg"
//         },
//         "comments_count": 0,
//         "photos": [
//             {
//                 "id": 2145,
//                 "feed_id": 766,
//                 "path": "photos/Artboard 1 (2)_1723445544.png"
//             },
//             {
//                 "id": 2146,
//                 "feed_id": 766,
//                 "path": "photos/Artboard 2_1723445545.png"
//             },
//             {
//                 "id": 2147,
//                 "feed_id": 766,
//                 "path": "photos/Artboard 3_1723445545.png"
//             },
//             {
//                 "id": 2148,
//                 "feed_id": 766,
//                 "path": "photos/Artboard 4 (1)_1723445545.png"
//             }
//         ],
//         "comments": [],
//         "metadata_likes": {
//             "user_liked": {},
//             "emotions": {
//                 "total": 1,
//                 "like": 1,
//                 "haha": 0,
//                 "love": 0,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 1
//     },
//     {
//         "id": 22,
//         "title": "[KHOE FESTIVAL 2024] Cơ hội \"khoe\" tài năng và rinh giải thưởng lên đến 3.000.000đ!",
//         "status": 1,
//         "center_id": null,
//         "user_id": 3,
//         "created_at": "2024-08-08 17:25:08",
//         "updated_at": "2024-08-08 17:25:08",
//         "user_profiles": {
//             "first_name": "System",
//             "last_name": "Administrator",
//             "roles_centers": [],
//             "avatar_path": "photos/icon_300x300_1651112991.png"
//         },
//         "comments_count": 0,
//         "comments": [],
//         "announcement_images": [],
//         "metadata_likes": {
//             "user_liked": {},
//             "emotions": {
//                 "total": 1,
//                 "like": 1,
//                 "haha": 0,
//                 "love": 0,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 2,
//         "target": "Thông báo đến toàn hệ thống",
//         "text": "<span id=\"docs-internal-guid-cfd0f334-7fff-ece7-30f9-32b83c234d1a\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">Chào bạn,</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">CodeGym xin thông báo về sự kiện KHOE FESTIVAL 2024 - Một sân chơi đỉnh cao dành riêng cho học viên CodeGym!</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">KHOE Festival 2024 là một cuộc thi dành cho học viên CodeGym. Đây là cơ hội để các bạn thể hiện kỹ năng lập trình, khả năng sáng tạo, được đánh giá và công nhận bởi những người có kinh nghiệm để nâng cao chất lượng sản phẩm và kỹ năng của mình.&nbsp;</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">Không chỉ là một cuộc thi, KHOE Festival còn là sân chơi giúp các bạn giao lưu, học hỏi, mở rộng network, xây dựng portfolio ấn tượng để tăng cơ hội việc làm qua việc showcase sản phẩm của mình.</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">🟠🔵HÌNH THỨC VÀ NỘI DUNG CUỘC THI:</span></p><ol style=\"margin-bottom: 0px; padding-inline-start: 48px;\"><li dir=\"ltr\" style=\"list-style-type: decimal; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Vòng Sơ loại</span></p></li></ol><ul style=\"margin-bottom: 0px; padding-inline-start: 48px;\"><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Thời gian: 08/8/2024 - 18/8/2024</span></p></li><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Hình thức: Online</span></p></li><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Đối tượng tham gia: Học viên đang học tại CodeGym</span></p></li><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Cách tham gia: Học viên gửi link sản phẩm đăng ký dự thi, kèm mô tả ngắn về sản phẩm dưới hình thức:</span></p></li><ul style=\"padding-inline-start: 48px;\"><li dir=\"ltr\" style=\"list-style-type: circle; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"2\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Đối với các sản phẩm đang chạy thật, online, qua server cá nhân/heroku/hình thức deployment khác: Gửi link sản phẩm đang chạy, gửi kèm link Github.</span></p></li><li dir=\"ltr\" style=\"list-style-type: circle; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"2\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Đối với các sản phẩm đã chạy, chưa deployment: Gửi link Github và video quay màn hình demo sản phẩm trên máy tính cá nhân.</span></p></li><li dir=\"ltr\" style=\"list-style-type: circle; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"2\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Đối với các sản phẩm đã từng chạy: Bật video khoe. (Xem hướng dẫn cách quay video demo cực đơn giản </span><a href=\"https://drive.google.com/file/d/11FCLmrkymjAm2N2wS2M5W9ZuPE-f2AIi/view?usp=sharing\" style=\"text-decoration-line: none;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(17, 85, 204); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; text-decoration-skip-ink: none; vertical-align: baseline; text-wrap: wrap;\">tại đây.</span></a><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">)</span></p></li></ul><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">BTC nhận thông tin đăng ký khoe sản phản phẩm qua form đăng ký:</span><a href=\"https://bit.ly/duthiKHOEfestival\" style=\"text-decoration-line: none;\"></a><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSecf7anBFUGTFaCWbsaC1qLi44sObrv-rRf6WlZgQBQhOhH6Q/viewform\" style=\"text-decoration-line: none;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(17, 85, 204); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; text-decoration-skip-ink: none; vertical-align: baseline; text-wrap: wrap;\">https://s.net.vn/dangkythamgia</span></a></p></li></ul><br><p dir=\"ltr\" style=\"line-height:1.38;margin-left: 36pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">2. Vòng Chung kết&nbsp;</span></p><ul style=\"margin-bottom: 0px; padding-inline-start: 48px;\"><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Thời gian: 13:30 - 17:30 | Thứ Sáu, 23/8/2024</span></p></li><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Hình thức: Offline tại văn phòng CodeGym Hà Nội, CodeGym Đà Nẵng, CodeGym Sài Gòn, Online toàn hệ thống</span></p></li><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Chi tiết: : 10 cá nhân/nhóm bước vào chung kết</span></p></li><ul style=\"padding-inline-start: 48px;\"><li dir=\"ltr\" style=\"list-style-type: circle; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"2\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Tại chung kết, mỗi cá nhân/nhóm có 10 phút để trình bày về sản phẩm, 5 phút Q&amp;A (nếu có).&nbsp;</span></p></li><li dir=\"ltr\" style=\"list-style-type: circle; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"2\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:12pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Sau khi các cá nhân/nhóm trình bày xong, Ban giám khảo sẽ trao đổi và thống nhất để chọn ra sản phẩm/dự án đạt giải.</span></p></li></ul></ul><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">🏆 GIẢI THƯỞNG HẤP DẪN</span></p><ul style=\"margin-bottom: 0px; padding-inline-start: 48px;\"><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Giải Nhất: 500.000đ</span></p></li><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">Giải Nhì: 300.000đ</span></p></li><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">2 Giải Ba: 200.000đ/giải</span></p></li><li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:12pt;\" role=\"presentation\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; text-wrap: wrap;\">6 Giải Khuyến khích: 100.000đ/giải</span></p></li></ul><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">Đây là cơ hội tuyệt vời để bạn thể hiện khả năng, học hỏi từ các chuyên gia và bạn bè, đồng thời xây dựng Portfolio ấn tượng cho sự nghiệp tương lai.</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">Hãy đăng ký ngay hôm nay và chuẩn bị cho một trải nghiệm đáng nhớ tại KHOE Festival 2024!</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với Ban tổ chức để được giải đáp chi tiết.</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">Chúc bạn may mắn và hẹn gặp tại KHOE Festival 2024!</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">Trân trọng,&nbsp;</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:12pt;margin-bottom:12pt;\"><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\">Ban Tổ Chức KHOE Festival 2024 CodeGym.</span></p><p><span style=\"font-size: 12pt; font-family: Arial, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; font-variant-alternates: normal; font-variant-position: normal; vertical-align: baseline; white-space-collapse: preserve;\"><br></span></p></span>",
//         "feed_type": 1,
//         "photos": []
//     },
//     {
//         "id": 765,
//         "user_id": 1328,
//         "feed_type": 2,
//         "blog_post_id": null,
//         "deleted_at": null,
//         "created_at": "2024-08-08 11:19:42",
//         "updated_at": "2024-08-08 11:19:42",
//         "text": "💥💥KHOE FESTIVAL 2024 - THÁCH THỨC BẢN THÂN, KHẲNG ĐỊNH NĂNG LỰC💥💥<br/><br/>🚀Sân chơi đỉnh cao cho học viên CodeGym đã chính thức khởi động!<br/><br/>KHOE Festival 2024 là một cuộc thi dành cho học viên CodeGym. Đây là cơ hội để các bạn thể hiện kỹ năng lập trình, khả năng sáng tạo, được đánh giá và công nhận bởi những người có kinh nghiệm để nâng cao chất lượng sản phẩm và kỹ năng của mình. <br/><br/>Không chỉ là một cuộc thi, KHOE Festival còn là sân chơi giúp các bạn giao lưu, học hỏi, mở rộng network, xây dựng Portfolio ấn tượng để tăng cơ hội việc làm qua việc showcase sản phẩm của mình.<br/><br/>🚀Phát triển bản thân, bứt phá giới hạn. Bạn đã sẵn sàng để \"KHOE\" tài năng và ẵm giải thưởng lên đến 3.000.000đ chưa?<br/><br/>🟠🔵HÌNH THỨC VÀ NỘI DUNG CUỘC THI:<br/><br/>🔽1. Vòng Sơ loại<br/><br/>- Thời gian: 08/8/2024 - 18/8/2024<br/><br/>- Hình thức: Online<br/><br/>- Đối tượng tham gia: Học viên đang học tại CodeGym<br/><br/>- Cách tham gia: Học viên gửi link sản phẩm đăng ký dự thi, kèm mô tả ngắn về sản phẩm qua form đăng ký: https://forms.gle/4QHWe2Md6FRm6aoG9 <br/><br/> 🔽2. Vòng Chung kết <br/><br/>- Thời gian: 13:30 - 17:30 | Thứ Sáu, 23/8/2024<br/><br/>- Hình thức: Offline tại văn phòng CodeGym Hà Nội, CodeGym Đà Nẵng, CodeGym Sài Gòn, Online toàn hệ thống.<br/><br/>- Chi tiết: 10 cá nhân/nhóm xuất sắc nhất bước vào chung kết sẽ có cơ hội thuyết trình về sản phẩm của mình trước Ban Giám khảo.<br/><br/>🏆GIẢI THƯỞNG HẤP DẪN<br/><br/>Giải Nhất: 500.000đ<br/><br/>Giải Nhì: 300.000đ<br/><br/>2 Giải Ba: 200.000đ/giải<br/><br/>6 Giải Khuyến khích: 100.000đ/giải<br/><br/>💥💥Thách thức bản thân, khẳng định năng lực. Tham gia ngay KHOE Festival 2024 để \"KHOE\" tài năng và ẵm giải thưởng thôi nào!!!!!<br/><br/>----------------------------------------<br/><br/>CODEGYM - HỆ THỐNG ĐÀO TẠO LẬP TRÌNH HIỆN ĐẠI <br/><br/>🏢 CodeGym Hà Nội | 23.TT01, Khu đô thị Mon City, Mỹ Đình 2 <br/><br/>➖ CodeGym Sài Gòn | 152 Điện Biên Phủ, Phường 25, Q. Bình Thạnh<br/><br/>➖ CodeGym Đà Nẵng | 295 Nguyễn Tất Thành, Quận Hải Châu<br/><br/>📞 Hotline: 0989 534 458 <br/><br/>📧 Email: info@codegym.vn <br/><br/>🌎 Website: codegym.vn",
//         "user_profiles": {
//             "first_name": "Phạm Thị",
//             "last_name": "Thuý",
//             "roles_centers": [
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 2,
//                     "center_name": "CodeGym Đà Nẵng"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 4,
//                     "center_name": "CodeGym Huế"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 7,
//                     "center_name": "CodeGym Việt Trì"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 8,
//                     "center_name": "CodeGym Quảng Trị"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 10,
//                     "name": "Center Manager",
//                     "description": "Giám đốc Trung tâm đào tạo",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 15,
//                     "name": "Accountant",
//                     "description": "Kế toán viên",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 10,
//                     "center_name": "CodeGym NAL"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 11,
//                     "center_name": "CodeGym Thanh Xuân"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 12,
//                     "center_name": "CodeGym Sài Gòn"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 13,
//                     "center_name": "CodeGym Tester"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 15,
//                     "center_name": "CodeGym Việt Nam"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 14,
//                     "center_name": "CodeGym Online"
//                 }
//             ],
//             "avatar_path": "photos/C773D061-BA31-4766-8174-744CCDD0C586_1686533903.jpg"
//         },
//         "comments_count": 0,
//         "photos": [
//             {
//                 "id": 2144,
//                 "feed_id": 765,
//                 "path": "photos/1080x1080 (2)_1723090782.png"
//             }
//         ],
//         "comments": [],
//         "metadata_likes": {
//             "user_liked": {},
//             "emotions": {
//                 "total": 1,
//                 "like": 1,
//                 "haha": 0,
//                 "love": 0,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 1
//     },
//     {
//         "id": 764,
//         "user_id": 15,
//         "feed_type": 1,
//         "blog_post_id": null,
//         "deleted_at": null,
//         "created_at": "2024-08-07 16:32:47",
//         "updated_at": "2024-08-07 16:32:47",
//         "text": "Cho một mảng bao gồm các phần tử số nguyên dương. Hãy tìm điểm cân bằng của mảng đó.<br/><br/>Điểm cân bằng của mảng là vị trí mà tổng của những phần tử ở trước nó bằng với tổng của những phần tử nằm sau nó.<br/><br/><br/><br/>https://codegym.vn/blog/moi-ngay-1-thuat-toan-bai-toan-tim-diem-can-bang-cua-mang/",
//         "user_profiles": {
//             "first_name": "Nguyễn Khắc",
//             "last_name": "Nhật",
//             "roles_centers": [
//                 {
//                     "id": 2,
//                     "name": "Head Quarter Manager",
//                     "description": "Quản lý HQ",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Center Head",
//                     "description": "Giám đốc cơ sở",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 }
//             ],
//             "avatar_path": "photos/6FBE0360-4F72-405E-93FD-2243B0669DF1_1680589518.jpg"
//         },
//         "comments_count": 0,
//         "photos": [],
//         "comments": [],
//         "metadata_likes": {
//             "user_liked": {},
//             "emotions": {}
//         },
//         "category": 1
//     },
//     {
//         "id": 763,
//         "user_id": 15,
//         "feed_type": 1,
//         "blog_post_id": null,
//         "deleted_at": null,
//         "created_at": "2024-08-05 15:06:21",
//         "updated_at": "2024-08-05 15:06:21",
//         "text": "Cho hai chuỗi string1 và string2. Hãy kiểm tra xem string1 và string2 có cùng chứa các ký tự giống như nhau hay không? (trật tự của các ký tự có thể khác nhau, không phân biệt chữ hoa và chữa thường)<br/><br/><br/><br/>https://codegym.vn/blog/moi-ngay-1-thuat-toan-tim-hai-chuoi-cung-co-cac-ky-tu-giong-nhau/",
//         "user_profiles": {
//             "first_name": "Nguyễn Khắc",
//             "last_name": "Nhật",
//             "roles_centers": [
//                 {
//                     "id": 2,
//                     "name": "Head Quarter Manager",
//                     "description": "Quản lý HQ",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Center Head",
//                     "description": "Giám đốc cơ sở",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 }
//             ],
//             "avatar_path": "photos/6FBE0360-4F72-405E-93FD-2243B0669DF1_1680589518.jpg"
//         },
//         "comments_count": 0,
//         "photos": [],
//         "comments": [],
//         "metadata_likes": {
//             "user_liked": {},
//             "emotions": {
//                 "total": 4,
//                 "like": 4,
//                 "haha": 0,
//                 "love": 0,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 1
//     },
//     {
//         "id": 762,
//         "user_id": 15,
//         "feed_type": 1,
//         "blog_post_id": 15125,
//         "deleted_at": null,
//         "created_at": "2024-08-02 15:28:47",
//         "updated_at": "2024-08-02 15:28:47",
//         "text": "https://blog.codegym.vn/?p=15125",
//         "user_profiles": {
//             "first_name": "Nguyễn Khắc",
//             "last_name": "Nhật",
//             "roles_centers": [
//                 {
//                     "id": 2,
//                     "name": "Head Quarter Manager",
//                     "description": "Quản lý HQ",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Center Head",
//                     "description": "Giám đốc cơ sở",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 }
//             ],
//             "avatar_path": "photos/6FBE0360-4F72-405E-93FD-2243B0669DF1_1680589518.jpg"
//         },
//         "comments_count": 0,
//         "photos": [],
//         "comments": [],
//         "metadata_likes": {
//             "user_liked": {
//                 "is_liked": true,
//                 "type": 1
//             },
//             "emotions": {
//                 "total": 2,
//                 "like": 2,
//                 "haha": 0,
//                 "love": 0,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 1
//     },
//     {
//         "id": 761,
//         "user_id": 15,
//         "feed_type": 1,
//         "blog_post_id": null,
//         "deleted_at": null,
//         "created_at": "2024-07-31 12:15:57",
//         "updated_at": "2024-07-31 12:15:57",
//         "text": "Cho hai mảng số nguyên đã được sắp xếp theo trật tự tăng dần. Hãy viết thuật toán để gộp hai mảng này lại thành một mảng mới cũng được sắp xếp với trật tự tăng dần.<br/><br/><br/><br/>https://codegym.vn/blog/moi-ngay-1-thuat-toan-gop-hai-mang-da-sap-xep/",
//         "user_profiles": {
//             "first_name": "Nguyễn Khắc",
//             "last_name": "Nhật",
//             "roles_centers": [
//                 {
//                     "id": 2,
//                     "name": "Head Quarter Manager",
//                     "description": "Quản lý HQ",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Center Head",
//                     "description": "Giám đốc cơ sở",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 }
//             ],
//             "avatar_path": "photos/6FBE0360-4F72-405E-93FD-2243B0669DF1_1680589518.jpg"
//         },
//         "comments_count": 0,
//         "photos": [],
//         "comments": [],
//         "metadata_likes": {
//             "user_liked": {
//                 "is_liked": true,
//                 "type": 1
//             },
//             "emotions": {
//                 "total": 3,
//                 "like": 3,
//                 "haha": 0,
//                 "love": 0,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 1
//     },
//     {
//         "id": 760,
//         "user_id": 322,
//         "feed_type": 1,
//         "blog_post_id": null,
//         "deleted_at": null,
//         "created_at": "2024-07-31 10:57:40",
//         "updated_at": "2024-07-31 10:57:40",
//         "text": "Xin chào mn",
//         "user_profiles": {
//             "first_name": "Phan Văn",
//             "last_name": "Luân",
//             "roles_centers": [
//                 {
//                     "id": 6,
//                     "name": "Coach",
//                     "description": "Huấn luyện viên của trung tâm",
//                     "center_id": 7,
//                     "center_name": "CodeGym Việt Trì"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Tutor",
//                     "description": "Trợ giảng của trung tâm",
//                     "center_id": 7,
//                     "center_name": "CodeGym Việt Trì"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Instructor",
//                     "description": "Instructor",
//                     "center_id": 7,
//                     "center_name": "CodeGym Việt Trì"
//                 },
//                 {
//                     "id": 12,
//                     "name": "Product owner",
//                     "description": "Product owner",
//                     "center_id": 7,
//                     "center_name": "CodeGym Việt Trì"
//                 },
//                 {
//                     "id": 13,
//                     "name": "Scrum master",
//                     "description": "Scrum master",
//                     "center_id": 7,
//                     "center_name": "CodeGym Việt Trì"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Instructor",
//                     "description": "Instructor",
//                     "center_id": 9,
//                     "center_name": "AMELA"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Coach",
//                     "description": "Huấn luyện viên của trung tâm",
//                     "center_id": 11,
//                     "center_name": "CodeGym Thanh Xuân"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Tutor",
//                     "description": "Trợ giảng của trung tâm",
//                     "center_id": 11,
//                     "center_name": "CodeGym Thanh Xuân"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Instructor",
//                     "description": "Instructor",
//                     "center_id": 11,
//                     "center_name": "CodeGym Thanh Xuân"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Coach",
//                     "description": "Huấn luyện viên của trung tâm",
//                     "center_id": 13,
//                     "center_name": "CodeGym Tester"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Tutor",
//                     "description": "Trợ giảng của trung tâm",
//                     "center_id": 13,
//                     "center_name": "CodeGym Tester"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Instructor",
//                     "description": "Instructor",
//                     "center_id": 13,
//                     "center_name": "CodeGym Tester"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Coach",
//                     "description": "Huấn luyện viên của trung tâm",
//                     "center_id": 15,
//                     "center_name": "CodeGym Việt Nam"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Tutor",
//                     "description": "Trợ giảng của trung tâm",
//                     "center_id": 15,
//                     "center_name": "CodeGym Việt Nam"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Instructor",
//                     "description": "Instructor",
//                     "center_id": 15,
//                     "center_name": "CodeGym Việt Nam"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Coach",
//                     "description": "Huấn luyện viên của trung tâm",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Tutor",
//                     "description": "Trợ giảng của trung tâm",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Instructor",
//                     "description": "Instructor",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Coach",
//                     "description": "Huấn luyện viên của trung tâm",
//                     "center_id": 2,
//                     "center_name": "CodeGym Đà Nẵng"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Tutor",
//                     "description": "Trợ giảng của trung tâm",
//                     "center_id": 2,
//                     "center_name": "CodeGym Đà Nẵng"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Instructor",
//                     "description": "Instructor",
//                     "center_id": 2,
//                     "center_name": "CodeGym Đà Nẵng"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Coach",
//                     "description": "Huấn luyện viên của trung tâm",
//                     "center_id": 4,
//                     "center_name": "CodeGym Huế"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Tutor",
//                     "description": "Trợ giảng của trung tâm",
//                     "center_id": 4,
//                     "center_name": "CodeGym Huế"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Instructor",
//                     "description": "Instructor",
//                     "center_id": 4,
//                     "center_name": "CodeGym Huế"
//                 },
//                 {
//                     "id": 6,
//                     "name": "Coach",
//                     "description": "Huấn luyện viên của trung tâm",
//                     "center_id": 12,
//                     "center_name": "CodeGym Sài Gòn"
//                 },
//                 {
//                     "id": 7,
//                     "name": "Tutor",
//                     "description": "Trợ giảng của trung tâm",
//                     "center_id": 12,
//                     "center_name": "CodeGym Sài Gòn"
//                 },
//                 {
//                     "id": 11,
//                     "name": "Instructor",
//                     "description": "Instructor",
//                     "center_id": 12,
//                     "center_name": "CodeGym Sài Gòn"
//                 }
//             ],
//             "avatar_path": null
//         },
//         "comments_count": 0,
//         "photos": [],
//         "comments": [],
//         "metadata_likes": {
//             "user_liked": {},
//             "emotions": {
//                 "total": 5,
//                 "like": 5,
//                 "haha": 0,
//                 "love": 0,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 1
//     },
//     {
//         "id": 759,
//         "user_id": 7040,
//         "feed_type": 2,
//         "blog_post_id": null,
//         "deleted_at": null,
//         "created_at": "2024-07-29 09:01:38",
//         "updated_at": "2024-07-29 09:01:38",
//         "text": "Hello CodeGym !",
//         "user_profiles": {
//             "first_name": "Nguyễn",
//             "last_name": "Minh Công",
//             "roles_centers": [
//                 {
//                     "id": 8,
//                     "name": "Student",
//                     "description": "Học viên của trung tâm",
//                     "center_id": 15,
//                     "center_name": "CodeGym Việt Nam"
//                 }
//             ],
//             "avatar_path": "photos/448889033_1172097874058678_8398302845698336554_n_1722215865.jpg"
//         },
//         "comments_count": 1,
//         "photos": [
//             {
//                 "id": 2128,
//                 "feed_id": 759,
//                 "path": "photos/832ead536f07189a01d958e0e6b5bae5_1722218498.jpg"
//             }
//         ],
//         "metadata_likes": {
//             "user_liked": {},
//             "emotions": {
//                 "total": 7,
//                 "like": 7,
//                 "haha": 0,
//                 "love": 0,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 1
//     },
//     {
//         "id": 758,
//         "user_id": 15,
//         "feed_type": 1,
//         "blog_post_id": null,
//         "deleted_at": null,
//         "created_at": "2024-07-27 10:42:37",
//         "updated_at": "2024-07-27 10:42:37",
//         "text": "Cho 2 số nguyên a và b. Hãy hoán đổi giá trị của a và b cho nhau mà không sử dụng đến một biến thứ ba.<br/><br/>https://codegym.vn/blog/moi-ngay-1-thuat-toan-cach-hoan-doi-gia-tri-cua-hai-bien/",
//         "user_profiles": {
//             "first_name": "Nguyễn Khắc",
//             "last_name": "Nhật",
//             "roles_centers": [
//                 {
//                     "id": 2,
//                     "name": "Head Quarter Manager",
//                     "description": "Quản lý HQ",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Training Manager",
//                     "description": "Quản lý đào tạo",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Center Head",
//                     "description": "Giám đốc cơ sở",
//                     "center_id": 1,
//                     "center_name": "CodeGym Hà Nội"
//                 }
//             ],
//             "avatar_path": "photos/6FBE0360-4F72-405E-93FD-2243B0669DF1_1680589518.jpg"
//         },
//         "comments_count": 0,
//         "photos": [],
//         "comments": [],
//         "metadata_likes": {
//             "user_liked": {
//                 "is_liked": true,
//                 "type": 1
//             },
//             "emotions": {
//                 "total": 5,
//                 "like": 4,
//                 "haha": 0,
//                 "love": 1,
//                 "sad": 0,
//                 "wow": 0,
//                 "angry": 0
//             }
//         },
//         "category": 1
//     }
// ];
// // Kiểm tra kiểu dữ liệu của biến
// console.log(typeof feeds);
// // Kiểm tra một biến có phải là mảng hay không
//
// console.log(Array.isArray(feeds));
//
// // Tìm kiếm status được đăng bởi anh Nhật
// const anhNhatPosts = feeds.filter(item => item.user_profiles.last_name === 'Nhật');
// console.log(anhNhatPosts);
//
// // Hiển thị danh sách trung tâm
// const firstPost = feeds[0];
// const count = firstPost.user_profiles.roles_centers.length;
// console.log(count);
//
// const centerNames = [];
//
// // for (let i = 0; i < count; i++) {
// //     const role = firstPost.user_profiles.roles_centers[i];
// //     centerNames.push(role.center_name);
// //     document.write(role.center_name + "<br>");
// // }
//
// // Hàm toString();
// console.log(centerNames.toString()) // TT HN,TT DN,...
// console.log(centerNames.join('-')) // TT HN,TT DN,...
// console.log(centerNames.reverse())
// centerNames.sort();
// console.log(centerNames)
// // Sắp xếp tăng dần
// // feeds.sort(function(a, b) {
// //     return a.metadata_likes.emotions.total - b.metadata_likes.emotions.total;
// // });
// // Sắp xếp giảm dần
// feeds.sort(function(a, b) {
//     return b.metadata_likes.emotions.total - a.metadata_likes.emotions.total;
// });
// feeds.forEach(item => {
//     document.write( item.user_profiles.last_name + ": " + item.metadata_likes.emotions.total + "<br>");
// });

// Mảng 2 chiều 5x5
/// Cach 2:
const BOARD_SIZE = 5;
// const matrix = new Array(boardSize);
// console.log(matrix);
// for (let i = 0; i < matrix.length; i++) {
//     matrix[i] = new Array(boardSize);
//     document.write(matrix[i][i]);
// }

// Cach 1:
const matrix1 = [];
for (let row = 0; row < BOARD_SIZE; row++) {
    matrix1[row] = [];
    for (let column = 0; column < BOARD_SIZE; column++) {
        matrix1[row][column] = Math.floor((Math.random() * 100) + 1);
        document.write(`${matrix1[row][column]}&nbsp;&nbsp;`); // Template literal, HTML Entity
    }
    document.write("<br>");
}
