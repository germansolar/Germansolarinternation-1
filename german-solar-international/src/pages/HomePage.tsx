import React from 'react';
import { Hero } from '../components/Hero';
import { KpiStrip } from '../components/KpiStrip';
import { SolutionsSection } from '../components/SolutionsSection';
import { RoiCalculatorPromo } from '../components/RoiCalculatorPromo';
import { HardwareShowcase } from '../components/HardwareShowcase';
import { ProcessSection } from '../components/ProcessSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { CtaBanner } from '../components/CtaBanner';
import { SeoKeywordSection } from '../components/SeoKeywordSection';
import { FaqSection } from '../components/FaqSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenCalculator: () => void;
  onOpenConsultation: (topic?: string, details?: string) => void;
  onOpenSpecs: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCalculator,
  onOpenConsultation,
  onOpenSpecs,
}) => {
  const [faqSearchTerm, setFaqSearchTerm] = React.useState('');

  const handleSelectSeoTag = (tag: string) => {
    setFaqSearchTerm(tag);
    const faqElement = document.getElementById('faq');
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <Hero
        onOpenCalculator={onOpenCalculator}
        onOpenConsultation={() => onOpenConsultation('Engineering Consultation')}
        onOpenSpecs={onOpenSpecs}
      />

      {/* 2. Performance Metric Strip */}
      <KpiStrip />

      {/* 3. Turnkey Energy Solutions Built for Africa */}
      <SolutionsSection
        onOpenConsultation={(topic) => onOpenConsultation(topic ? `Solution Inquiry: ${topic}` : 'Solution Inquiry')}
      />

      {/* 4. ROI Calculator Promo Banner */}
      <RoiCalculatorPromo
        onLaunchCalculator={onOpenCalculator}
      />

      {/* 5. Hardware Showcase */}
      <HardwareShowcase
        onQuote={(productName) => onOpenConsultation(`Hardware Quotation: ${productName}`, `Inquiry for ${productName}`)}
      />

      {/* 6. 10-Step EPC Roadmap */}
      <ProcessSection />

      {/* 7. Projects: Nairobi, Botswana, Kigali */}
      <ProjectsSection />

      {/* 8. Call to Action Banner */}
      <CtaBanner
        onOpenConsultation={() => onOpenConsultation('Engineering Consultation')}
      />

      {/* 9. SEO Text Block & Kenya Locations */}
      <SeoKeywordSection
        onOpenQuotation={() => onOpenConsultation('Solar Installation Quotation')}
        onOpenCalculator={onOpenCalculator}
        onSelectTag={handleSelectSeoTag}
      />

      {/* 10. Searchable FAQ Accordion */}
      <FaqSection
        onOpenConsultation={() => onOpenConsultation('Technical FAQ Inquiry')}
        searchTerm={faqSearchTerm}
      />
    </>
  );
};
