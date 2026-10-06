# Lego Developer Portfolio - Next.js & AWS Amplify

Dự án Portfolio cá nhân xây dựng bằng Next.js (App Router), TypeScript, Tailwind CSS theo phong cách giao diện các khối lắp ráp Lego, tối ưu hóa để triển khai trên AWS Amplify Hosting.

---

## 1. Cấu Trúc Thư Mục

```text
├── amplify.yml                  # Cấu hình quy trình build và deploy trên AWS Amplify Hosting
├── package.json                 # Khai báo các gói phụ thuộc và scripts
├── tsconfig.json                # Cấu hình TypeScript
├── src/
│   ├── app/
│   │   ├── globals.css          # Định nghĩa biến màu Lego, mẫu chốt studs và hiệu ứng bóng đổ
│   │   ├── layout.tsx           # Layout gốc và cấu hình metadata
│   │   └── page.tsx             # Trang chủ ghép nối toàn bộ các thành phần
│   ├── components/
│   │   ├── LegoStudRow.tsx      # Hàng chốt tròn 3D trên đỉnh các khối
│   │   ├── LegoButton.tsx       # Nút bấm dạng khối gạch với phản hồi khi click
│   │   ├── LegoCard.tsx         # Khối thẻ chứa nội dung với viền đen và bóng đổ cứng
│   │   ├── MinifigAvatar.tsx    # Nhân vật đại diện SVG với bộ tùy biến màu áo và phụ kiện
│   │   ├── Navbar.tsx           # Thanh điều hướng với trạng thái kết nối AWS Amplify
│   │   ├── HeroSection.tsx      # Phần mở đầu, thông tin kỹ thuật và các chỉ số định lượng
│   │   ├── AboutSection.tsx     # Sổ tay hướng dẫn kỹ thuật 4 giai đoạn
│   │   ├── SkillsSection.tsx    # Danh mục công nghệ phân loại theo số chốt studs
│   │   ├── ProjectsSection.tsx  # Danh mục dự án định dạng hộp bộ đồ chơi (Set Box)
│   │   ├── ExperienceSection.tsx# Tiến trình công tác dạng tháp khối ghép nối
│   │   ├── InteractiveBuilder.tsx # Bàn thử nghiệm lắp ráp khối trực tiếp trên trình duyệt
│   │   ├── ContactSection.tsx   # Biểu mẫu tiếp nhận thông tin và liên kết xã hội
│   │   ├── Footer.tsx           # Chân trang dạng đế gạch (baseplate)
│   │   └── SocialIcons.tsx      # Biểu tượng vector SVG cho GitHub và LinkedIn
│   └── data/
│       └── portfolioData.ts     # Dữ liệu nội dung hồ sơ, kỹ năng, dự án và kinh nghiệm
```

---

## 2. Hệ Thống Màu & Quy Chuẩn Thiết Kế

- **Đỏ Lego**: `#D01012`
- **Xanh Dương Lego**: `#0055BF`
- **Vàng Lego**: `#F5CD2F`
- **Xanh Lá Lego**: `#00852B`
- **Cam Lego**: `#FE8A18`
- **Đen Viền**: `#111111` (Độ dày viền: `border-3` hoặc `border-4`)
- **Bóng Đổ Cứng**: `shadow-[4px_4px_0px_#000000]`, `shadow-[6px_6px_0px_#000000]`
- **Hiệu Ứng Bấm (Click)**: `active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#000000]`

---

## 3. Cài Đặt & Chạy Tại Môi Trường Cục Bộ

### Bước 1: Cài đặt gói phụ thuộc
```bash
npm install
```

### Bước 2: Chạy máy chủ phát triển
```bash
npm run dev
```
Truy cập trình duyệt tại địa chỉ: `http://localhost:3000`

### Bước 3: Kiểm tra build trước khi xuất bản
```bash
npm run build
```

---

## 4. Hướng Dẫn Triển Khai Lên AWS Amplify

### Phương án 1: Triển khai qua AWS Amplify Hosting Console (Khuyên dùng)

1. Đẩy toàn bộ mã nguồn dự án lên kho chứa GitHub (hoặc GitLab / AWS CodeCommit):
   ```bash
   git add .
   git commit -m "feat: complete lego style portfolio with aws amplify config"
   git push origin main
   ```
2. Đăng nhập vào [AWS Management Console](https://console.aws.amazon.com/).
3. Tìm kiếm và mở dịch vụ **AWS Amplify**.
4. Chọn **Deploy an app** -> Chọn nguồn mã nguồn là **GitHub**.
5. Cấp quyền truy cập và chọn kho chứa `Portfolio`, nhánh `main`.
6. Tại bước **Build settings**: AWS Amplify sẽ tự động nhận diện file `amplify.yml` trong mã nguồn:
   - Node.js Version: Khuyến nghị đặt `Node.js 20.x` hoặc `22.x` trong **Build settings > Package version overrides**.
7. Nhấn **Save and deploy**. AWS Amplify sẽ tự động chạy pipeline build và cung cấp đường dẫn truy cập (ví dụ: `https://main.d123456789.amplifyapp.com`).

### Phương án 2: Triển khai bằng AWS Amplify CLI

1. Cài đặt Amplify CLI (nếu chưa có):
   ```bash
   npm install -g @aws-amplify/cli
   ```
2. Cấu hình thông tin tài khoản IAM:
   ```bash
   amplify configure
   ```
3. Khởi tạo dịch vụ hosting:
   ```bash
   amplify add hosting
   ```
4. Xuất bản ứng dụng:
   ```bash
   amplify publish
   ```

---

## 5. Tùy Chỉnh Nội Dung Cá Nhân

Chỉnh sửa trực tiếp file [src/data/portfolioData.ts](file:///d:/Project/Portfolio/src/data/portfolioData.ts):
- `profile`: Họ tên, vị trí công tác, tóm tắt kinh nghiệm, email, mạng xã hội.
- `skills`: Danh mục công nghệ, danh mục nhóm (frontend, backend, cloud, tools) và số chốt studs (1 - 4).
- `projects`: Danh sách dự án, mã bộ (setNumber), số dòng lệnh/commits (piecesCount), công nghệ sử dụng, đường dẫn demo và kho mã nguồn.
- `experiences`: Lịch sử công tác, tên công ty, thời gian và các mốc kết quả.
