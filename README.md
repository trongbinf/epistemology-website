# Website Nhận thức luận Mác-Lênin

Website giáo dục về Nhận thức luận trong triết học Mác-Lênin, được xây dựng với Next.js 14, TypeScript, và Framer Motion.

## 🎨 Tính năng

- ✅ **8 trang nội dung hoàn chỉnh** về các chủ đề nhận thức luận
- ✅ **Dark theme** với hiệu ứng glassmorphism sang trọng
- ✅ **Animations mượt mà** với Framer Motion
- ✅ **Responsive design** tối ưu cho mọi thiết bị
- ✅ **Navigation system** với active state highlighting
- ✅ **Image placeholders** sẵn sàng cho slide screenshots

## 🚀 Chạy website

Website đang chạy tại: **http://localhost:3001**

```bash
npm run dev
```

## 📄 Các trang đã hoàn thành

1. **Trang chủ** (`/`) - Hero section với 7 topic cards
2. **Giới thiệu** (`/introduction`) - Tổng quan về nhận thức luận
3. **Nguồn gốc** (`/origin`) - Nguồn gốc và bản chất của nhận thức
4. **Trình độ** (`/levels`) - Các trình độ nhận thức
5. **Thực tiễn** (`/practice`) - Thực tiễn - nền tảng của nhận thức
6. **Nhận thức** (`/cognition`) - Quá trình nhận thức
7. **Con đường biện chứng** (`/dialectical-path`) - Chu trình nhận thức
8. **Chân lý** (`/truth`) - Chân lý trong CNDVBC

## 🖼️ Thêm ảnh slides

### Bước 1: Chuẩn bị ảnh

Extract các slides từ PDF thành file PNG với tên:
- `slide_1.png`, `slide_2.png`, ..., `slide_33.png`

### Bước 2: Copy vào thư mục

```bash
cp slide_*.png public/slides/
```

Hoặc copy thủ công vào: `/Users/dotritrong/Desktop/MLN111/epistemology-website/public/slides/`

### Bước 3: Xem kết quả

Ảnh sẽ tự động hiển thị tại các vị trí placeholder trong mỗi trang.

### 📋 Mapping slides → pages

Xem file `slides-config.json` để biết slide nào thuộc page nào:

- Slides 1-5 → Introduction
- Slides 13-16 → Origin
- Slides 17-18 → Levels
- Slides 19-22 → Practice
- Slides 23-27 → Cognition
- Slides 28-31 → Dialectical Path
- Slides 32-33 → Truth

## 🎨 Design System

### Colors

- **Background**: Deep dark blues/purples (#0a0a0f, #13131a, #1a1a24)
- **Accents**: Purple, Blue, Cyan, Pink, Gold
- **Text**: White (#f8fafc), Light gray (#cbd5e1)

### Typography

- **Headings**: Outfit (Google Fonts)
- **Body**: Inter (Google Fonts)

### Effects

- Glassmorphism với backdrop blur
- Gradient borders và text
- Smooth hover animations
- Floating animations cho icons

## 📁 Cấu trúc project

```
epistemology-website/
├── app/
│   ├── globals.css              # Design system
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── introduction/            # Giới thiệu page
│   ├── origin/                  # Nguồn gốc page
│   ├── levels/                  # Trình độ page
│   ├── practice/                # Thực tiễn page
│   ├── cognition/               # Nhận thức page
│   ├── dialectical-path/        # Con đường biện chứng page
│   └── truth/                   # Chân lý page
├── components/
│   ├── Navigation.tsx           # Navigation bar
│   └── Navigation.module.css
├── public/
│   └── slides/                  # ← Thư mục cho slide images
└── slides-config.json           # Slide mapping configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Custom Design System
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Inter, Outfit)

## 📝 Ghi chú

- Tất cả pages đã được test - không có lỗi 404
- Image placeholders có label rõ ràng để dễ dàng thêm ảnh
- Design system nhất quán trên toàn bộ website
- Responsive design hoạt động tốt trên mobile, tablet, desktop

## 🎯 Next Steps (Optional)

1. Thêm slide images vào placeholders
2. Tạo interactive diagrams với SVG/Canvas
3. Thêm page transitions
4. Implement mobile hamburger menu
5. Thêm search functionality

---

**Developed with ❤️ using Next.js and Framer Motion**
