"use client";

import React from "react";

interface GaugeChartProps {
  value: number;
  maxValue?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  color?: string;
}

export function GaugeChart({
  value,
  maxValue = 100,
  size = 160,
  strokeWidth = 10,
  label,
  sublabel,
  color = "var(--accent-indigo)",
}: GaugeChartProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius; // semicircle
  const percentage = Math.min(value / maxValue, 1);
  const dashOffset = circumference * (1 - percentage);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <svg width={size} height={size / 2 + 20} viewBox={`0 0 ${size} ${size / 2 + 20}`}>
        {/* Background arc */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke="rgba(148, 163, 184, 0.1)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Value arc */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="gauge-ring"
          style={{ filter: `drop-shadow(0 0 8px ${color})` }}
        />
        {/* Center text */}
        <text
          x={size / 2}
          y={size / 2 - 4}
          textAnchor="middle"
          style={{
            fontSize: size / 5,
            fontWeight: 800,
            fill: "var(--text-primary)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {value}%
        </text>
      </svg>
      {label && (
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--text-primary)",
            marginTop: -8,
          }}
        >
          {label}
        </div>
      )}
      {sublabel && (
        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
          {sublabel}
        </div>
      )}
    </div>
  );
}
