import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { BusinessView } from './components/BusinessView';
import { AdminView } from './components/AdminView';

import { DashboardFilters } from './components/DashboardFilters';

export default function App() {
  const [activeView, setActiveView] = useState<'business' | 'admin'>('business');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate data fetching
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <Sidebar activeView={activeView} onChangeView={setActiveView} className="hidden md:flex fixed left-0 top-0 bottom-0 z-30" />
      <div className="md:pl-64 flex flex-col flex-1 min-h-screen">
        <Header onRefresh={handleRefresh} isRefreshing={isRefreshing} />
        <main className="flex-1 p-8 overflow-y-auto">
           <div className="flex items-center justify-between space-y-2 mb-6">
            <h2 className="text-3xl font-bold tracking-tight">
              {activeView === 'business' ? 'Procurement Overview' : 'Agent Observability'}
            </h2>
            <div className="flex items-center space-x-2">
               <span className="text-sm text-muted-foreground">
                 {isRefreshing ? "Updating..." : "Last updated: Just now"}
               </span>
            </div>
          </div>
          
          <DashboardFilters className="mb-6" />

          <div className={isRefreshing ? "opacity-50 pointer-events-none transition-opacity duration-200" : "opacity-100 transition-opacity duration-200"}>
            {activeView === 'business' ? <BusinessView /> : <AdminView />}
          </div>
        </main>
      </div>
    </div>
  );
}
