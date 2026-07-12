"use client";

import React from "react";
import { Search, Bell, Command } from "lucide-react";

export default function TopNav() {
  return (
    <header
      style={{
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        borderBottom: "1px solid var(--border-secondary)",
        background: "rgba(10, 14, 26, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        flexShrink: 0,
      }}
    >
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flex: 1,
          maxWidth: 420,
        }}
      >
        <Search size={16} style={{ color: "var(--text-muted)" }} />
        <input
          type="text"
          placeholder="Search regulations, tasks, or policies..."
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            fontSize: 13,
            color: "var(--text-secondary)",
            fontFamily: "inherit",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "3px 8px",
            borderRadius: 6,
            background: "rgba(148, 163, 184, 0.06)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
          }}
        >
          <Command size={11} style={{ color: "var(--text-muted)" }} />
          <span
            style={{
              fontSize: 11,
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            K
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* Notifications */}
        <button
          style={{
            position: "relative",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 6,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(148, 163, 184, 0.08)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <Bell size={18} style={{ color: "var(--text-secondary)" }} />
          <span
            style={{
              position: "absolute",
              top: 4,
              right: 4,
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent-rose)",
              border: "2px solid var(--bg-primary)",
            }}
          />
        </button>

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 28,
            background: "var(--border-secondary)",
          }}
        />

        {/* User */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              color: "white",
            }}
          >
            AK
          </div>
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              Admin
            </div>
            <div style={{ fontSize: 10, color: "var(--text-muted)" }}>
              Chief Compliance Officer
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
