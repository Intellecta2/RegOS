"use client";

import React from "react";
import {
  LayoutDashboard,
  UploadCloud,
  CheckSquare,
  ShieldAlert,
  FileText,
  Settings,
  Activity,
  Cpu,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "upload", label: "Document Upload", icon: UploadCloud },
  { id: "tasks", label: "Pending Tasks", icon: CheckSquare },
  { id: "risk", label: "Risk Center", icon: ShieldAlert },
  { id: "evidence", label: "Evidence Vault", icon: FileText },
];

export default function Sidebar({ currentView, onNavigate }: SidebarProps) {
  return (
    <aside className="glass-sidebar" style={{
      width: 260,
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      flexShrink: 0,
    }}>
      {/* Brand */}
      <div
        style={{
          padding: "24px 20px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderBottom: "1px solid rgba(148, 163, 184, 0.08)",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "var(--gradient-brand)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(99, 102, 241, 0.3)",
          }}
        >
          <Activity size={18} color="white" />
        </div>
        <div>
          <span
            className="gradient-text"
            style={{
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            RegOS
          </span>
          <div
            style={{
              fontSize: 10,
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginTop: 1,
            }}
          >
            Regulatory OS
          </div>
        </div>
      </div>

      {/* AI Engine Status */}
      <div
        style={{
          margin: "16px 12px 8px",
          padding: "10px 12px",
          borderRadius: 10,
          background: "rgba(99, 102, 241, 0.06)",
          border: "1px solid rgba(99, 102, 241, 0.1)",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Cpu size={14} style={{ color: "var(--accent-indigo)" }} />
        <span
          style={{
            fontSize: 11,
            color: "var(--text-secondary)",
            fontWeight: 500,
          }}
        >
          AI Engine
        </span>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div
            className="animate-pulse-dot"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent-emerald)",
            }}
          />
          <span
            style={{
              fontSize: 10,
              color: "var(--accent-emerald)",
              fontWeight: 600,
            }}
          >
            Active
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav
        style={{
          flex: 1,
          padding: "12px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: isActive ? 600 : 500,
                color: isActive
                  ? "var(--accent-indigo)"
                  : "var(--text-secondary)",
                background: isActive
                  ? "rgba(99, 102, 241, 0.1)"
                  : "transparent",
                transition: "all 0.2s ease",
                textAlign: "left",
                width: "100%",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.background =
                    "rgba(148, 163, 184, 0.06)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              {isActive && (
                <div
                  className="nav-indicator"
                  style={{ left: -12, top: "50%", transform: "translateY(-50%)" }}
                />
              )}
              <Icon size={17} />
              {item.label}
              {isActive && (
                <ChevronRight
                  size={14}
                  style={{ marginLeft: "auto", opacity: 0.5 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div
        style={{
          padding: "16px 12px",
          borderTop: "1px solid rgba(148, 163, 184, 0.08)",
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--text-muted)",
            background: "transparent",
            width: "100%",
            textAlign: "left",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(148, 163, 184, 0.06)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <Settings size={17} />
          Settings
        </button>
      </div>
    </aside>
  );
}
