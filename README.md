# 🏛️ North Lane — Premium Clothing & Fashion Brand

North Lane is a modern and premium fashion and clothing e-commerce platform. It is designed with a clean aesthetic, excellent user experience, and built using the latest web technologies. The project utilizes the **Bun** runtime environment for optimal development speed and performance.

---

## ✨ Features

- **Modern Architecture**: Modern folder structure based on Next.js App Router.
- **Shopping Cart**: Fully functional shopping cart system powered by `CartContext` including a Cart Drawer.
- **Dynamic Routing**: Dynamic product details page for each individual item (`/products/[id]`).
- **Elegant UI Elements**: Custom buttons, select options, and toast notifications based on Shadcn/ui and `sonner`.
- **Dark & Light Mode**: Smooth theme toggling built with `next-themes`.
- **Blazing Fast**: Optimized package management and execution runtime using **Bun**.

---

## 📂 Project Structure

The complete architecture of the project is listed below:

```text
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── about-us/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   ├── _components/
│   │   │   │   └── DetailsProduct.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Home/
│   │   │   ├── AboutStory.tsx
│   │   │   ├── Banner.tsx
│   │   │   ├── EditorialCampaign.tsx
│   │   │   └── ProductCard.tsx
│   │   ├── layout/
│   │   │   ├── cart-drawer.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── provider/
│   │   │   ├── app-toaster.tsx
│   │   │   ├── ModeToggle.tsx
│   │   │   └── theme-provider.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── icon.tsx
│   │       ├── select.tsx
│   │       └── sonner.tsx
│   ├── context/
│   │   └── CartContext.tsx
│   ├── lib/
│   ├── types/
│   └── utils/
│       ├── campaign.ts
│       ├── dummyData.ts
│       ├── footerData.ts
│       ├── milestone.ts
│       └── side.ts
├── .gitignore
├── bun.lock
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json

```

---

## 🚀 Getting Started

Follow these steps to run the project locally. The use of **Bun** is required for this project.

### Prerequisites

Ensure you have **Bun** installed on your system. If not, install it using the command below:

```bash
curl -fsSL [https://bun.sh/install](https://bun.sh/install) | bash

```

For Windows users (PowerShell):

```bash
powershell -c "irm bun.sh/install.ps1 | iex"

```

### Installation

1. Navigate to the project directory:

```bash
cd north-lane

```

2. Install the necessary dependencies:

```bash
bun install

```

### Run the Development Server

Start the local development server with the following command:

```bash
bun dev

```

Open https://north-lane.vercel.app in your browser to view the application.

---

## 🛠️ Tech Stack Used

* **Framework**: Next.js
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **UI**: Shadcn UI
* **Icons**: Lucide React
* **Package Manager & Runtime**: Bun
* **State Management**: React Context API

```

```
