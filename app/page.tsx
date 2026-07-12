"use client";

import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import DashboardView from "@/components/dashboard/DashboardView";
import UploadView from "@/components/upload/UploadView";
import TasksView from "@/components/tasks/TasksView";
import RiskCenterView from "@/components/risk/RiskCenterView";
import EvidenceVaultView from "@/components/evidence/EvidenceVaultView";

export default function Home() {
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        background: "var(--bg-primary)",
      }}
    >
      {/* Sidebar */}
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        {/* Top Navigation */}
        <TopNav />

        {/* View Content */}
        <div
          className="bg-dots"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 28,
          }}
        >
          {currentView === "dashboard" && (
            <DashboardView onNavigate={setCurrentView} />
          )}
          {currentView === "upload" && (
            <UploadView onNavigate={setCurrentView} />
          )}
          {currentView === "tasks" && <TasksView />}
          {currentView === "risk" && <RiskCenterView />}
          {currentView === "evidence" && <EvidenceVaultView />}
        </div>
      </main>
    </div>
  );
}
