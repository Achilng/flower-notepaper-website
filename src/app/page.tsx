import {
  Download,
  FileText,
  Layout,
  StickyNote,
  Import,
  ChevronDown,
  Monitor,
  Clipboard,
  Gamepad2,
  Lightbulb,
  ListTodo,
  ArrowRight,
  Star,
} from "lucide-react";

import FallingPetals from "./FallingPetals";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

/* ─── Logo SVG ─── */
function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4c-2 4-6 8-6 13a6 6 0 0 0 12 0c0-5-4-9-6-13Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M16 4c-2 4-6 8-6 13a6 6 0 0 0 12 0c0-5-4-9-6-13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17v9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 23c2-1 4-1 4-1s2 0 4 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Decorative Petal ─── */
function Petal({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="12"
        cy="12"
        rx="5"
        ry="10"
        fill="currentColor"
        opacity="0.12"
        transform="rotate(-30 12 12)"
      />
    </svg>
  );
}

/* ================================================================
   Navbar
   ================================================================ */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-paper-deep/50 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 group">
          <LogoIcon className="h-7 w-7 text-bamboo transition-transform duration-300 group-hover:scale-110" />
          <span className="text-lg font-medium tracking-wide text-ink font-[var(--font-display)]">
            花笺
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["功能", "场景", "下载"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative text-sm text-ink-soft transition-colors duration-200 hover:text-bamboo after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 after:bg-bamboo after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#下载"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-bamboo px-5 py-2 text-sm font-medium text-cloud transition-all duration-300 hover:bg-bamboo-light hover:shadow-lg hover:shadow-bamboo/20"
        >
          <Download className="h-4 w-4" />
          下载
        </a>
      </div>
    </nav>
  );
}

/* ================================================================
   Hero Section
   ================================================================ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-bamboo-mist/60 via-paper to-paper" />
      <FallingPetals />

      <Petal
        className="absolute top-[15%] left-[10%] h-20 w-20 text-bamboo animate-float"
        style={{ animationDelay: "0s" }}
      />
      <Petal
        className="absolute top-[25%] right-[15%] h-16 w-16 text-bamboo-light animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <Petal
        className="absolute bottom-[30%] left-[20%] h-14 w-14 text-bamboo animate-float"
        style={{ animationDelay: "3s" }}
      />
      <Petal
        className="absolute top-[60%] right-[8%] h-24 w-24 text-bamboo-light/50 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-24">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-bamboo/20 bg-bamboo-mist/60 px-4 py-1.5 text-sm text-bamboo backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-current" />
            开源免费 · 本地优先
          </div>
        </div>

        <h1
          className="animate-fade-up text-5xl font-bold leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl font-[var(--font-display)]"
          style={{ animationDelay: "0.2s" }}
        >
          轻盈如笺，
          <br />
          <span className="text-bamboo">落笔生花</span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          style={{ animationDelay: "0.35s" }}
        >
          花笺是一款轻量、优雅、现代化的本地便签工具。
          <br className="hidden sm:block" />
          支持 Markdown 编辑、桌面磁贴、快捷便签，让灵感随时落笔。
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#下载"
            className="group inline-flex items-center gap-2.5 rounded-full bg-bamboo px-8 py-3.5 text-base font-medium text-cloud shadow-lg shadow-bamboo/25 transition-all duration-300 hover:bg-bamboo-light hover:shadow-xl hover:shadow-bamboo/30 hover:-translate-y-0.5"
          >
            <Download className="h-5 w-5" />
            免费下载
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#功能"
            className="inline-flex items-center gap-2 rounded-full border border-paper-deep px-8 py-3.5 text-base font-medium text-ink-soft transition-all duration-300 hover:border-bamboo/30 hover:text-bamboo hover:bg-bamboo-mist/40"
          >
            了解更多
          </a>
        </div>

        {/* Mock app screenshot */}
        <div
          className="animate-fade-up mx-auto mt-16 max-w-3xl"
          style={{ animationDelay: "0.65s" }}
        >
          <div className="relative rounded-2xl border border-paper-deep/80 bg-cloud shadow-2xl shadow-ink/8 overflow-hidden">
            <div className="flex items-center gap-2 border-b border-paper-deep/60 bg-paper-warm/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-ink-faint">花笺</span>
            </div>
            <div className="flex min-h-[320px]">
              <div className="w-52 border-r border-paper-deep/40 bg-paper/60 p-4">
                <div className="mb-4 h-8 w-28 rounded-lg bg-bamboo-mist/80" />
                <div className="space-y-2">
                  {[1, 0.7, 0.85, 0.6, 0.75].map((w, i) => (
                    <div
                      key={i}
                      className={`h-9 rounded-lg ${i === 0 ? "bg-bamboo-glow/80 border border-bamboo/10" : "bg-paper-warm/60"}`}
                      style={{ width: `${w * 100}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="mb-4 h-7 w-48 rounded bg-ink/[0.06]" />
                <div className="space-y-2.5">
                  {[1, 0.85, 0.92, 0.6, 1, 0.78, 0.88].map((w, i) => (
                    <div
                      key={i}
                      className="h-4 rounded bg-ink/[0.04]"
                      style={{ width: `${w * 100}%` }}
                    />
                  ))}
                </div>
                <div className="mt-6 rounded-lg border border-bamboo/10 bg-bamboo-mist/30 p-4">
                  <div className="h-3 w-20 rounded bg-bamboo/15 mb-2" />
                  <div className="space-y-1.5">
                    {[0.9, 0.75, 0.6].map((w, i) => (
                      <div
                        key={i}
                        className="h-3 rounded bg-bamboo/[0.08]"
                        style={{ width: `${w * 100}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8 flex justify-center">
          <ChevronDown className="h-6 w-6 text-ink-ghost animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Features Section
   ================================================================ */
const features = [
  {
    icon: FileText,
    title: "Markdown 编辑",
    description:
      "所见即所得的 Markdown 编辑体验，支持实时预览、代码高亮、数学公式与 GFM 扩展语法。",
  },
  {
    icon: StickyNote,
    title: "快捷便签",
    description:
      "全局快捷键一键唤出，小窗多开互不干扰。灵感来时，随手记录，不打断你的工作流。",
  },
  {
    icon: Layout,
    title: "桌面磁贴",
    description:
      "将便签固定在桌面上，像磁贴一样自由排列。重要事项一目了然，无需切换窗口。",
  },
  {
    icon: Import,
    title: "导入导出",
    description:
      "支持 Markdown 文件的导入与导出，数据完全归你所有，随时迁移无压力。",
  },
];

function FeaturesSection() {
  return (
    <section id="功能" className="relative py-28 noise-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper-warm/30 to-paper" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-medium text-bamboo tracking-widest uppercase">
            核心功能
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl font-[var(--font-display)]">
            简约而不简单
          </h2>
          <p className="mt-4 text-ink-faint leading-relaxed">
            专注于笔记本身，每一个功能都经过精心打磨
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-paper-deep/60 bg-cloud/70 p-7 backdrop-blur-sm transition-all duration-300 hover:border-bamboo/20 hover:bg-cloud hover:shadow-xl hover:shadow-bamboo/[0.06] hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bamboo-mist text-bamboo transition-colors duration-300 group-hover:bg-bamboo group-hover:text-cloud">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-faint">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Use Cases Section
   ================================================================ */
const useCases = [
  {
    icon: Clipboard,
    title: "剪贴板速记",
    description: "看到有用的信息？快捷键唤出便签，粘贴保存，再也不丢失。",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Gamepad2,
    title: "游戏随记",
    description:
      "游戏过程中的攻略、坐标、配方，磁贴固定在桌面随时查看。",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Lightbulb,
    title: "灵感记录",
    description:
      "灵感转瞬即逝，花笺常驻后台，一键呼出，让每个想法都有归处。",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: ListTodo,
    title: "桌面待办",
    description:
      "用磁贴模式把待办事项钉在桌面，比任何 Todo App 都直觉。",
    color: "bg-emerald-50 text-emerald-600",
  },
];

function UseCasesSection() {
  return (
    <section id="场景" className="py-28 bg-bamboo-mist/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-medium text-bamboo tracking-widest uppercase">
            应用场景
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl font-[var(--font-display)]">
            为你的日常而生
          </h2>
          <p className="mt-4 text-ink-faint leading-relaxed">
            无论工作还是生活，花笺都是你趁手的记录伙伴
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group flex items-start gap-5 rounded-2xl border border-paper-deep/40 bg-cloud/80 p-7 backdrop-blur-sm transition-all duration-300 hover:border-bamboo/15 hover:shadow-lg hover:shadow-bamboo/[0.04]"
            >
              <div
                className={`shrink-0 flex h-12 w-12 items-center justify-center rounded-xl ${useCase.color}`}
              >
                <useCase.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink mb-1.5">
                  {useCase.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-faint">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Download Section
   ================================================================ */
function DownloadSection() {
  return (
    <section id="下载" className="relative py-28 overflow-hidden noise-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-paper via-bamboo-mist/20 to-paper" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <span className="text-sm font-medium text-bamboo tracking-widest uppercase">
          开始使用
        </span>
        <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl font-[var(--font-display)]">
          现在就下载花笺
        </h2>
        <p className="mt-4 text-ink-faint leading-relaxed mb-12">
          完全免费、开源，数据存储在本地，属于你自己
        </p>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-bamboo/15 bg-bamboo-mist/50 px-4 py-1.5 text-sm text-bamboo">
          当前版本 v1.1.0
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="group inline-flex items-center gap-3 rounded-2xl border border-paper-deep bg-cloud px-8 py-4 shadow-sm transition-all duration-300 hover:border-bamboo/20 hover:shadow-lg hover:-translate-y-0.5">
            <Monitor className="h-6 w-6 text-bamboo" />
            <div className="text-left">
              <div className="text-xs text-ink-faint">适用于</div>
              <div className="text-base font-semibold text-ink">Windows</div>
            </div>
          </button>

          <button className="group inline-flex items-center gap-3 rounded-2xl border border-paper-deep bg-cloud px-8 py-4 shadow-sm transition-all duration-300 hover:border-bamboo/20 hover:shadow-lg hover:-translate-y-0.5">
            <svg
              className="h-6 w-6 text-bamboo"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-ink-faint">适用于</div>
              <div className="text-base font-semibold text-ink">macOS</div>
            </div>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <span className="rounded-full bg-paper-warm px-3 py-1 text-xs text-ink-faint">
            x64
          </span>
          <span className="rounded-full bg-paper-warm px-3 py-1 text-xs text-ink-faint">
            ARM64
          </span>
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-ink-faint transition-colors duration-200 hover:text-bamboo"
          >
            <GithubIcon className="h-4 w-4" />
            在 GitHub 上查看源码
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Footer
   ================================================================ */
function Footer() {
  return (
    <footer className="border-t border-paper-deep/50 bg-paper-warm/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <LogoIcon className="h-5 w-5 text-bamboo" />
            <span className="text-sm font-medium text-ink font-[var(--font-display)]">
              花笺
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-ink-faint">
            <a href="#" className="transition-colors hover:text-bamboo">
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-bamboo">
              Release
            </a>
            <a href="#" className="transition-colors hover:text-bamboo">
              Wiki
            </a>
            <a href="#" className="transition-colors hover:text-bamboo">
              MIT License
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-paper-deep/30 pt-6 text-center text-xs text-ink-ghost">
          基于 Tauri 2 + React 构建 · Made with ♥
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   Page
   ================================================================ */
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
