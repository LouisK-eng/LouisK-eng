"use client";

import type { ReactNode } from "react";
import { ConfigProvider, theme, type ThemeConfig } from "antd";

const INK = "#1f2836";
const PANEL = "#293344";
const RAISED = "#3a485e";
const LINE = "#354357";
const LINE_STRONG = "#4b5c77";
const FG = "#f5f8fc";
const MUTED = "#c5cfdc";
const ACCENT = "#2c9701";
// Dark text on accent fills, for contrast.
const NAVY = "#0b1220";

// The dark algorithm darkens colorPrimary, so components that show the accent
// as a fill get these values directly.
const ACCENT_FILL = {
  colorPrimary: ACCENT,
  colorPrimaryHover: "#31fd42",
  colorPrimaryActive: "#107710",
};

const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: ACCENT,
    colorInfo: ACCENT,
    colorBgBase: INK,
    colorBgLayout: INK,
    colorBgContainer: PANEL,
    colorBgElevated: RAISED,
    colorBorder: LINE_STRONG,
    colorBorderSecondary: LINE,
    colorText: FG,
    colorTextSecondary: MUTED,
    borderRadius: 12,
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
  },
  components: {
    FloatButton: ACCENT_FILL,
    Button: {
      ...ACCENT_FILL,
      primaryShadow: "none",
      defaultShadow: "none",
      primaryColor: NAVY,
      defaultBg: "rgba(255, 255, 255, 0.05)",
      defaultColor: FG,
      defaultBorderColor: "rgba(255, 255, 255, 0.14)",
      defaultHoverBg: "rgba(255, 255, 255, 0.09)",
      defaultHoverColor: ACCENT,
      defaultHoverBorderColor: ACCENT,
      fontWeight: 500,
    },
    Segmented: {
      trackBg: "transparent",
      itemColor: MUTED,
      itemHoverColor: FG,
      itemHoverBg: "rgba(255, 255, 255, 0.07)",
      itemSelectedBg: ACCENT,
      itemSelectedColor: NAVY,
    },
    Timeline: {
      tailColor: LINE_STRONG,
      dotBg: INK,
    },
  },
};

export function Providers({ children }: { children: ReactNode }) {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
}
