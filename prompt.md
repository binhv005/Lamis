# PROMPT CHỈNH SỬA WEBSITE LAMIS STUDIO THEO NỘI DUNG MỚI

## 1. MỤC TIÊU

Hãy chỉnh sửa website hiện tại thành website giới thiệu dịch vụ **Lamis Studio – Photography & Makeup** tại Vinh, Nghệ An.

**Yêu cầu quan trọng:** Website đã có thiết kế, bố cục và cấu trúc sẵn. Nhiệm vụ của bạn là chỉnh sửa trực tiếp dự án hiện tại, không xây dựng lại từ đầu.

Chỉ tập trung vào 4 công việc:
1. Thay đổi màu sắc theo phong cách Minimalist Luxury.
2. Thay toàn bộ hình ảnh bằng hình ảnh phù hợp lấy từ thư mục `newfolder`.
3. Xóa các hình ảnh cũ không thuộc thư mục `newfolder` khỏi giao diện website.
4. Thay đổi toàn bộ nội dung chữ theo thông tin Lamis Studio được cung cấp bên dưới.

Không tự ý thay đổi thiết kế tổng thể, bố cục các section hoặc cấu trúc điều hướng hiện có.

---

## 2. NGUYÊN TẮC BẮT BUỘC

Trước khi chỉnh sửa, hãy kiểm tra toàn bộ dự án để xác định:

- Framework, thư viện và công nghệ đang sử dụng.
- Cấu trúc thư mục và các file chứa giao diện.
- Các section hiện có trên trang chủ.
- File CSS, Tailwind CSS hoặc hệ thống design token đang quản lý màu sắc.
- Tất cả vị trí đang sử dụng hình ảnh, bao gồm ảnh nền, ảnh trong component, ảnh banner, ảnh portfolio và ảnh trang trí.
- Cách website hiển thị trên desktop, tablet và mobile.

Sau khi kiểm tra, thực hiện trực tiếp trên code hiện tại.

### Không được phép

- Không khởi tạo dự án mới.
- Không thay thế toàn bộ giao diện bằng một template khác.
- Không tự ý xóa section hoặc chức năng đang hoạt động.
- Không thay đổi cấu trúc bố cục chỉ vì muốn giao diện trông khác biệt.
- Không tự ý cài thêm thư viện nếu không thực sự cần thiết.
- Không sử dụng ảnh mẫu từ Unsplash, Pexels, Pixabay hoặc các nguồn ảnh bên ngoài.
- Không giữ lại ảnh cũ chỉ vì ảnh đó đang được import trong component.
- Không tạo số liệu, đánh giá khách hàng, bảng giá hoặc thông tin chưa được cung cấp.
- Không thay đổi cấu hình backend, API, routing hoặc logic nghiệp vụ nếu không cần thiết cho nhiệm vụ.

Nếu cần chỉnh sửa component để thay ảnh hoặc nội dung, hãy giữ nguyên chức năng và cấu trúc tổng thể của component đó.

---

## 3. THÔNG TIN THƯƠNG HIỆU

Tên thương hiệu: **Lamis Studio**

Lĩnh vực:
- Studio chụp ảnh.
- Chụp ảnh beauty.
- Chụp ảnh chân dung.
- Chụp ảnh concept.
- Chụp ảnh ngoại cảnh.
- Phóng sự cưới.
- Makeup chuyên nghiệp.
- Đào tạo trang điểm.

Khu vực hoạt động: Vinh, Nghệ An.

Số điện thoại: 034 616 1908.

Các kênh liên hệ:
- Facebook: Lamis Studio.
- Google Maps: Lamis Studio – Google Maps.
- Hotline: 034 616 1908.

Thư mục hình ảnh được phép sử dụng:

https://drive.google.com/drive/u/0/folders/1EU7VHxJ7Mi7GULyKSsVZc9y2ad5Wiyw-

Video/tham khảo hình ảnh:

https://drive.google.com/file/d/1FnxmqNuIPyHwZUHY3WWCKdDxuZWgsVsw/view

Nếu dự án đã có thư mục `newfolder`, hãy ưu tiên sử dụng trực tiếp các file trong thư mục đó. Nếu thư mục chưa tồn tại hoặc không thể truy cập được, hãy kiểm tra workspace và yêu cầu tôi cung cấp đúng đường dẫn thay vì tự tìm ảnh thay thế trên Internet.

Lưu ý: Không được giả định rằng AI có quyền truy cập trực tiếp vào Google Drive. Nếu cần, hãy sử dụng các file đã được đồng bộ hoặc tải về máy.

---

## 4. CHỈNH SỬA MÀU SẮC

Chuyển màu sắc hiện tại của website sang bảng màu Minimalist Luxury, thanh lịch, nghệ thuật và cao cấp.

### Bảng màu định hướng

- Kem sáng: `#F7F3ED`
- Trắng ngà: `#FFFCF8`
- Be nhạt: `#E8DED1`
- Be đậm: `#C9B8A5`
- Nâu xám: `#81766B`
- Đen than: `#24211F`
- Xám chữ phụ: `#77716B`

### Quy tắc sử dụng

- Nền chính: kem sáng hoặc trắng ngà.
- Nền các section xen kẽ: trắng ngà và be nhạt.
- Tiêu đề: đen than.
- Nội dung phụ: nâu xám hoặc xám trung tính.
- Nút CTA chính: nền đen than, chữ trắng ngà.
- Nút phụ: nền trong suốt, viền be hoặc đen than.
- Đường phân cách: be nhạt.
- Các chi tiết nhấn mạnh: sử dụng màu nâu/be một cách tiết chế.

Nếu website có hệ thống biến màu CSS hoặc Tailwind theme, hãy cập nhật hệ thống màu tập trung thay vì sửa màu rời rạc ở từng component.

Giữ nguyên hiệu ứng, animation, hover, transition, border radius và kích thước component hiện tại nếu chúng đang hoạt động tốt. Chỉ điều chỉnh những thuộc tính cần thiết để màu sắc mới đồng bộ và dễ nhìn.

Không sử dụng màu neon, gradient sặc sỡ, màu hồng quá đậm hoặc hiệu ứng phát sáng không phù hợp với phong cách studio cao cấp.

---

## 5. THAY TOÀN BỘ HÌNH ẢNH

Đây là một trong những nhiệm vụ quan trọng nhất.

### Nguồn ảnh duy nhất

Chỉ sử dụng hình ảnh có sẵn trong thư mục `newfolder`.

Hãy duyệt toàn bộ thư mục và lập danh sách hình ảnh trước khi thay thế. Kiểm tra định dạng, kích thước, tỷ lệ khung hình và nội dung trực quan của từng ảnh để lựa chọn vị trí sử dụng phù hợp.

### Nguyên tắc lựa chọn

- Ảnh chân dung: ưu tiên cho phần giới thiệu studio và dịch vụ chụp chân dung.
- Ảnh beauty, makeup: ưu tiên cho phần dịch vụ beauty và trang điểm.
- Ảnh concept: ưu tiên cho phần album concept và portfolio.
- Ảnh cưới hoặc ảnh cặp đôi: ưu tiên cho dịch vụ phóng sự cưới.
- Ảnh ngoại cảnh: sử dụng ở các khu vực thể hiện dịch vụ chụp ngoài trời.
- Ảnh có chất lượng tốt, bố cục đẹp và phù hợp tỷ lệ khung hình của component hiện tại sẽ được ưu tiên.

Không suy đoán nội dung ảnh chỉ dựa vào tên file nếu có thể xem trước ảnh.

### Quy định loại bỏ ảnh cũ

- Xóa toàn bộ ảnh cũ đang được hiển thị trên giao diện nếu ảnh đó không nằm trong `newfolder`.
- Thay ảnh hero, ảnh banner, ảnh dịch vụ, ảnh portfolio, ảnh nền và ảnh trang trí bằng ảnh phù hợp từ thư mục này.
- Kiểm tra cả đường dẫn ảnh được khai báo trực tiếp trong JSX/TSX, HTML, CSS, JSON và các file cấu hình dữ liệu.
- Kiểm tra các ảnh được tải thông qua component dùng chung, mảng dữ liệu, object cấu hình hoặc đường dẫn import.
- Không giữ lại ảnh demo, ảnh stock, ảnh placeholder hoặc ảnh của thương hiệu khác.
- Nếu một ảnh trong `newfolder` không phù hợp với vị trí nào, không ép sử dụng ảnh đó chỉ để lấp đầy giao diện.

Không xóa logo, icon giao diện hoặc tài nguyên kỹ thuật cần thiết chỉ vì chúng không nằm trong `newfolder`. Quy định chỉ giới hạn các hình ảnh minh họa, ảnh chụp và ảnh trang trí của website.

Nếu không đủ ảnh cho một section, hãy tận dụng cách bố trí ảnh hiện có, dùng lại ảnh phù hợp khi hợp lý hoặc để trống vị trí hình ảnh theo cách thanh lịch. Tuyệt đối không tự lấy ảnh bên ngoài thay thế.

### Đảm bảo kỹ thuật

- Không để ảnh lỗi hoặc đường dẫn 404.
- Không để ảnh bị kéo giãn hoặc biến dạng.
- Dùng `object-fit: cover` hoặc `contain` tùy mục đích hiển thị.
- Giữ đúng tỷ lệ, focal point và kích thước hiển thị hợp lý.
- Không làm vỡ bố cục khi ảnh có kích thước khác ảnh cũ.
- Giữ lazy loading cho các ảnh bên dưới màn hình đầu tiên nếu dự án đang hỗ trợ.

---

## 6. THAY ĐỔI NỘI DUNG TOÀN WEBSITE

Thay nội dung cũ bằng nội dung liên quan đến Lamis Studio.

Không chỉ thay tiêu đề trang chủ. Hãy rà soát tất cả nội dung ở các section, menu, CTA, footer, thông tin liên hệ, metadata và các dữ liệu hiển thị khác.

### 6.1. Header và điều hướng

Tên thương hiệu: Lamis Studio.

Các mục điều hướng:
- Trang chủ.
- Giới thiệu Studio.
- Dịch vụ chụp ảnh.
- Portfolio.
- Album theo concept.
- Bảng giá tham khảo.
- Đánh giá khách hàng.
- Liên hệ.

CTA chính: **Đặt lịch chụp ảnh**

Thông tin hotline: 034 616 1908.

Nếu thiết kế hiện tại có header cố định, menu mobile hoặc hiệu ứng cuộn, hãy giữ nguyên hoạt động của chúng.

### 6.2. Hero section

Nội dung đề xuất:

Eyebrow: PHOTOGRAPHY · MAKEUP · ART

Tiêu đề chính:

**Lưu giữ vẻ đẹp của bạn theo cách riêng.**

Mô tả:

Lamis Studio mang đến trải nghiệm chụp ảnh và makeup chỉn chu, giúp bạn tự tin thể hiện cá tính qua từng khung hình — từ beauty, chân dung cá nhân đến những concept sáng tạo và khoảnh khắc cưới đáng nhớ.

CTA chính: Đặt lịch chụp ảnh.

CTA phụ: Khám phá portfolio.

Thông tin địa điểm: Vinh, Nghệ An.

Sử dụng một hình ảnh nổi bật, phù hợp với ảnh thực tế trong `newfolder`. Ưu tiên hình ảnh có tính nghệ thuật, ánh sáng đẹp và thể hiện được phong cách của studio.

Không thêm số năm kinh nghiệm, số lượng khách hàng hoặc giải thưởng khi chưa có thông tin xác nhận.

### 6.3. Section giới thiệu Studio

Tiêu đề: **Một không gian dành cho vẻ đẹp và cá tính riêng.**

Nội dung:

Lamis Studio đồng hành cùng bạn trong những buổi chụp ảnh cá nhân, bộ ảnh beauty, concept sáng tạo và những dấu mốc đặc biệt của cuộc sống. Bên cạnh dịch vụ chụp ảnh, studio còn cung cấp makeup chuyên nghiệp và đào tạo trang điểm, hướng đến trải nghiệm phù hợp với nhu cầu của từng khách hàng.

CTA: Tìm hiểu dịch vụ.

Không tự thêm địa chỉ cụ thể, lịch hoạt động hoặc câu chuyện thành lập nếu chưa được cung cấp.

### 6.4. Section dịch vụ

Hiển thị đầy đủ các dịch vụ sau:

**Chụp ảnh Beauty**

Tập trung vào đường nét, thần thái và vẻ đẹp riêng của mỗi người qua ánh sáng, góc máy và cách thể hiện phù hợp.

**Chụp ảnh chân dung**

Lưu giữ hình ảnh cá nhân với phong cách thanh lịch, tự nhiên hoặc cá tính theo mong muốn của khách hàng.

**Chụp ảnh Concept**

Khám phá nhiều cách thể hiện khác nhau thông qua ý tưởng, trang phục, ánh sáng và bối cảnh được lựa chọn phù hợp.

**Chụp ảnh ngoại cảnh**

Ghi lại những khoảnh khắc trong không gian tự nhiên với cách thể hiện linh hoạt, giàu cảm xúc.

**Phóng sự cưới**

Lưu giữ những khoảnh khắc và cảm xúc đáng nhớ trong ngày cưới bằng hình ảnh chân thực, tự nhiên.

**Makeup chuyên nghiệp**

Dịch vụ trang điểm phù hợp với nhu cầu chụp ảnh, sự kiện và phong cách cá nhân.

**Đào tạo trang điểm**

Dành cho những người muốn tìm hiểu và phát triển kỹ năng makeup. Nội dung khóa học cụ thể cần được xác nhận với studio.

Mỗi dịch vụ cần sử dụng hình ảnh phù hợp từ `newfolder`.

Giữ nguyên cách trình bày dịch vụ của website hiện tại, chỉ thay nội dung và ảnh. Không tự ý biến tất cả dịch vụ thành các card giống nhau nếu giao diện hiện tại đang có bố cục đa dạng.

### 6.5. Section Portfolio

Tiêu đề: **Portfolio — Những khoảnh khắc mang dấu ấn riêng.**

Mô tả:

Khám phá các bộ ảnh được thực hiện theo nhiều phong cách, từ beauty và chân dung đến concept sáng tạo, ngoại cảnh và ảnh cưới.

Phân loại portfolio theo các nhóm nếu ảnh trong `newfolder` cho phép:

- Beauty.
- Chân dung.
- Concept.
- Ngoại cảnh.
- Cưới.
- Makeup.

Chỉ hiển thị các danh mục có hình ảnh thực tế phù hợp.

Nếu website hiện tại có lightbox, bộ lọc ảnh, carousel hoặc hiệu ứng xem ảnh, hãy giữ nguyên và kiểm tra hoạt động sau khi thay dữ liệu.

Không tạo dự án giả, tên khách hàng giả hoặc mô tả về buổi chụp không có căn cứ.

### 6.6. Section Album theo concept

Tiêu đề: **Tìm phong cách phù hợp với bạn.**

Mô tả:

Mỗi concept mở ra một cách thể hiện khác nhau. Hãy khám phá những bộ ảnh hiện có để tìm cảm hứng cho buổi chụp tiếp theo.

Dùng hình ảnh thật trong `newfolder` để tạo các nhóm concept phù hợp. Không tự đặt tên concept như một bộ ảnh đã hoàn thành nếu ảnh thực tế không xác nhận được điều đó.

CTA: Tư vấn concept.

### 6.7. Section bảng giá

Tiêu đề: **Lựa chọn gói chụp phù hợp.**

Mô tả:

Mỗi nhu cầu chụp ảnh đều có những yêu cầu riêng. Liên hệ Lamis Studio để được tư vấn về phong cách, dịch vụ và chi phí phù hợp với mong muốn của bạn.

**Lưu ý quan trọng:** Chưa có dữ liệu giá chính thức. Không tự tạo mức giá, tên gói, thời lượng chụp, số lượng ảnh bàn giao, số lần chỉnh sửa hoặc ưu đãi.

Nếu website hiện tại có section bảng giá, giữ lại bố cục nhưng thay các số liệu chưa xác minh bằng nội dung tư vấn liên hệ. Không hiển thị giá giả hoặc khiến khách hàng hiểu nhầm đó là bảng giá chính thức.

CTA: Liên hệ nhận tư vấn.

### 6.8. Section đánh giá khách hàng

Tiêu đề: **Cảm nhận từ khách hàng.**

Chỉ hiển thị đánh giá có thật và có nguồn xác minh.

Nếu dự án hiện có các review demo, tên khách hàng giả, số sao giả hoặc nội dung mẫu, hãy xóa dữ liệu đó. Giữ lại component nếu cần, nhưng thay phần nội dung bằng thông điệp trung tính:

**Mỗi bộ ảnh là một hành trình sáng tạo cùng khách hàng.**

Hãy liên hệ studio để tìm hiểu thêm về dịch vụ và xem portfolio thực tế.

Không tự viết lời chứng thực rồi trình bày như đánh giá của khách hàng thật.

### 6.9. Section đặt lịch

Tiêu đề: **Cùng Lamis Studio lên ý tưởng cho bộ ảnh tiếp theo.**

Mô tả:

Chia sẻ nhu cầu chụp ảnh hoặc makeup của bạn để studio có thể tư vấn dịch vụ, phong cách và lịch hẹn phù hợp.

Các trường thông tin nếu website đã có form:
- Họ và tên.
- Số điện thoại.
- Dịch vụ quan tâm.
- Phong cách hoặc concept mong muốn.
- Ngày dự kiến chụp.
- Nội dung cần tư vấn.

Nút gửi: Gửi yêu cầu tư vấn.

Giữ nguyên cơ chế xử lý form, validation, API và thông báo thành công/thất bại đang hoạt động. Không giả lập gửi thành công nếu backend chưa thực sự xử lý yêu cầu.

Nếu chưa có backend đặt lịch, không tự tuyên bố rằng lịch đã được xác nhận.

### 6.10. Section liên hệ và footer

Tên: Lamis Studio.

Lĩnh vực: Photography & Makeup.

Khu vực: Vinh, Nghệ An.

Hotline: 034 616 1908.

Các liên kết:
- Facebook: Lamis Studio.
- Google Maps: Lamis Studio – Google Maps.

Ưu tiên sử dụng liên kết Facebook và Google Maps thực tế đã được cấu hình trong dự án hoặc được cung cấp bởi tôi. Không tự tạo URL giả.

CTA: Liên hệ Lamis Studio.

Footer cần đồng bộ màu sắc, kiểu chữ và khoảng cách với toàn bộ website.

---

## 7. SEO VÀ NỘI DUNG KỸ THUẬT

Cập nhật các nội dung SEO hiện có theo thương hiệu mới:

Title gợi ý: Lamis Studio | Chụp Ảnh Beauty, Chân Dung & Makeup tại Vinh

Meta description gợi ý: Lamis Studio tại Vinh, Nghệ An cung cấp dịch vụ chụp ảnh beauty, chân dung, concept, ngoại cảnh, phóng sự cưới, makeup chuyên nghiệp và đào tạo trang điểm.

Kiểm tra:
- Thẻ H1 chỉ có một tiêu đề chính phù hợp.
- H2/H3 có thứ bậc hợp lý.
- Alt ảnh mô tả đúng nội dung ảnh.
- Open Graph title, description và ảnh chia sẻ nếu có.
- Favicon và logo thương hiệu hiện có.
- Không còn metadata, title, mô tả hoặc tên thương hiệu của website cũ.

Không tự tạo địa chỉ, tọa độ, giờ hoạt động hoặc thông tin doanh nghiệp chưa xác nhận.

---

## 8. RESPONSIVE VÀ TRẢI NGHIỆM NGƯỜI DÙNG

Giữ nguyên khả năng tương thích với desktop, tablet và mobile.

Sau khi thay ảnh và nội dung:
- Kiểm tra ảnh không bị cắt mất chủ thể quan trọng.
- Tiêu đề không bị tràn hoặc xuống dòng mất thẩm mỹ.
- CTA không bị che khuất.
- Menu mobile hoạt động.
- Khoảng cách section đồng nhất.
- Không xuất hiện thanh cuộn ngang ngoài ý muốn.
- Không có vùng trắng lớn do ảnh lỗi hoặc nội dung bị thiếu.
- Màu chữ có độ tương phản đủ tốt.
- Hiệu ứng hover, chuyển section và animation hiện có vẫn hoạt động.

Không thay đổi kích thước chữ, khoảng cách và bố cục hàng loạt nếu không cần thiết. Chỉ hiệu chỉnh những vị trí thực sự bị ảnh hưởng do nội dung mới dài/ngắn hơn hoặc do tỷ lệ ảnh khác.

---

## 9. QUY TRÌNH THỰC HIỆN

Hãy thực hiện lần lượt:

**Bước 1 — Kiểm tra dự án**

Xác định các component, section, stylesheet, dữ liệu và nguồn ảnh hiện tại.

**Bước 2 — Kiểm tra thư mục newfolder**

Lập danh sách ảnh, xem trước nội dung nếu có thể, xác định ảnh phù hợp với từng vị trí trên website.

**Bước 3 — Thay đổi theme**

Cập nhật màu sắc về bảng màu kem – be – trắng ngà – đen than.

**Bước 4 — Thay ảnh**

Thay toàn bộ ảnh minh họa, ảnh nền và ảnh portfolio cũ bằng ảnh phù hợp trong `newfolder`. Rà soát toàn bộ đường dẫn ảnh còn sót lại.

**Bước 5 — Thay nội dung**

Cập nhật từng section, menu, nút CTA, form, footer và metadata theo nội dung Lamis Studio.

**Bước 6 — Kiểm tra chức năng**

Chạy dự án, kiểm tra lỗi compile, lỗi console, ảnh lỗi, liên kết, form, điều hướng và responsive.

**Bước 7 — Rà soát lần cuối**

Tìm kiếm toàn bộ source code để xác định:
- Tên thương hiệu cũ còn sót lại.
- Nội dung không còn liên quan đến Lamis Studio.
- Đường dẫn ảnh ngoài `newfolder` còn được sử dụng.
- Dữ liệu giá, đánh giá hoặc thông tin chưa xác minh.
- Các component bị lỗi do thay đổi nội dung hoặc hình ảnh.

Sửa các lỗi phát hiện được trước khi kết thúc.

---

## 10. TIÊU CHÍ NGHIỆM THU

Chỉ hoàn thành khi đáp ứng tất cả các điều kiện sau:

- [ ] Giữ nguyên thiết kế và bố cục nền tảng của website hiện tại.
- [ ] Màu sắc đã chuyển sang phong cách Minimalist Luxury.
- [ ] Toàn bộ ảnh chụp, ảnh minh họa và ảnh trang trí đã được thay bằng ảnh từ `newfolder`.
- [ ] Không còn ảnh cũ ngoài nguồn ảnh được cho phép.
- [ ] Nội dung toàn website đã chuyển sang thương hiệu Lamis Studio.
- [ ] Có đầy đủ thông tin dịch vụ chụp ảnh, makeup và đào tạo trang điểm.
- [ ] Thông tin liên hệ sử dụng đúng số 034 616 1908.
- [ ] Không có bảng giá, đánh giá hoặc số liệu tự bịa.
- [ ] Các liên kết, form, menu và chức năng cũ vẫn hoạt động.
- [ ] Không có lỗi build, ảnh lỗi hoặc lỗi responsive nghiêm trọng.
- [ ] Không có thay đổi ngoài phạm vi yêu cầu.

## 11. BÁO CÁO SAU KHI SỬA

Sau khi hoàn thành, hãy báo cáo ngắn gọn:

1. Những file đã chỉnh sửa.
2. Những section đã cập nhật.
3. Số lượng ảnh cũ đã thay thế và các ảnh mới được sử dụng.
4. Xác nhận đã rà soát các ảnh nằm ngoài `newfolder`.
5. Các chức năng đã kiểm tra.
6. Kết quả chạy build và những lỗi còn tồn tại nếu có.
7. Những nội dung còn thiếu cần tôi cung cấp, chẳng hạn bảng giá chính thức, link Facebook hoặc Google Maps chính xác.

**Yêu cầu cuối cùng:** Hãy trực tiếp sửa code trong workspace hiện tại, giữ nguyên thiết kế nền tảng, chỉ thay đổi màu sắc, hình ảnh và nội dung theo đúng yêu cầu. Không chỉ đưa ra hướng dẫn hoặc ví dụ code; hãy thực hiện chỉnh sửa thực tế và kiểm tra kết quả.