'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import LoadingCircuit from '@/components/animations/LoadingCircuit';
import CursorTrail from '@/components/animations/CursorTrail';
import CircuitDivider from '@/components/animations/CircuitDivider';
import AnimationToggle from '@/components/animations/AnimationToggle';
import Navigation from '@/components/Navigation';
import DetailPanel from '@/components/DetailPanel';
import AboutPanel from '@/components/panels/AboutPanel';
import ProjectsPanel from '@/components/panels/ProjectsPanel';
import SkillsPanel from '@/components/panels/SkillsPanel';
import ContactPanel from '@/components/panels/ContactPanel';

export default function Home() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  return (
    <>
      <LoadingCircuit />
      <CursorTrail />
      <AnimationToggle />
      <Navigation onPanelOpen={setActivePanel} />
      
      {/* Detail Panels */}
      <DetailPanel isOpen={activePanel !== null} onClose={() => setActivePanel(null)}>
        {activePanel === 'about' && <AboutPanel />}
        {activePanel === 'projects' && <ProjectsPanel />}
        {activePanel === 'skills' && <SkillsPanel />}
        {activePanel === 'contact' && <ContactPanel />}
      </DetailPanel>
      
      <main className="relative">
        <Hero />
        <CircuitDivider />
        <Journey />
        <CircuitDivider />
        <Projects />
        <CircuitDivider />
        <Skills />
        <CircuitDivider />
        <Achievements />
        <CircuitDivider />
        <Contact />
      </main>
    </>
  );
}
