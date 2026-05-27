# 🚀 Deploy lên GitHub Pages — Hướng dẫn từng bước

## Bước 1 — Tạo Repository mới trên GitHub

1. Vào **github.com** → đăng nhập
2. Nhấn nút **"+"** góc trên phải → **"New repository"**
3. Điền tên: `lifeseeker-pwa`
4. Chọn **Public** ← bắt buộc để GitHub Pages hoạt động
5. Nhấn **"Create repository"**

---

## Bước 2 — Upload các file lên GitHub

Sau khi tạo repo, GitHub sẽ hiện trang trống. Làm theo cách dễ nhất:

1. Nhấn **"uploading an existing file"**
2. Kéo thả **toàn bộ thư mục `lifeseeker-pwa`** vào ô upload
   (gồm: index.html, sw.js, manifest.json, offline.html, thư mục icons/)
3. Cuộn xuống → nhấn **"Commit changes"**

---

## Bước 3 — Bật GitHub Pages

1. Vào tab **Settings** của repo
2. Tìm mục **"Pages"** ở thanh bên trái
3. Phần **"Source"** → chọn **"Deploy from a branch"**
4. Branch: **main** → Folder: **/ (root)**
5. Nhấn **Save**

⏳ Đợi khoảng **1-2 phút** → GitHub tự động deploy

---

## Bước 4 — Lấy link app

Sau khi deploy xong, link app của bạn sẽ là:

```
https://[USERNAME].github.io/lifeseeker-pwa/
```

Ví dụ: `https://nguyen-abc.github.io/lifeseeker-pwa/`

---

## Bước 5 — Cài app lên điện thoại

### Android (Chrome):
1. Mở link trên Chrome
2. Nhấn banner **"CÀI ĐẶT"** hiện ở dưới màn hình
3. Hoặc: menu Chrome (3 chấm) → **"Thêm vào màn hình chính"**

### iPhone/iPad (Safari):
1. Mở link trên **Safari** (không phải Chrome)
2. Nhấn nút **Chia sẻ** (□↑) ở thanh dưới
3. Chọn **"Thêm vào màn hình chính"**
4. Nhấn **Thêm**

### Máy tính (Chrome):
1. Mở link
2. Nhấn icon **⊕** trên thanh địa chỉ (góc phải)
3. Nhấn **"Cài đặt"**

---

## ⚠️ Lưu ý quan trọng

Sau khi cài app, khi dùng:
- **Điện thoại/máy tính phải cùng mạng WiFi với ESP32-CAM**
- Nhập IP ESP32-CAM vào ô tìm kiếm → Connect
- App sẽ **nhớ IP** lần sau không cần nhập lại

---

## 🔄 Cập nhật app sau này

Khi muốn sửa code, chỉ cần:
1. Vào repo GitHub
2. Nhấn vào file muốn sửa → nhấn biểu tượng ✏️
3. Sửa → Commit changes
4. GitHub Pages tự động cập nhật sau 1-2 phút
5. Người dùng mở app lại là có phiên bản mới
