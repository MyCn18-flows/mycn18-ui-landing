import React, { useState, useRef, useLayoutEffect, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';

export interface StepItem {
  title: string;
  description: string;
  content?: ReactNode; // Aquí podrás poner tus <img src="gif..." /> en el futuro
}

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  steps: StepItem[];
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  stepCircleContainerClassName?: string;
  stepContainerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  backButtonText?: string;
  nextButtonText?: string;
  disableStepIndicators?: boolean;
}

export default function Stepper({
  steps,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = '',
  stepContainerClassName = '',
  contentClassName = '',
  footerClassName = '',
  backButtonText = 'Anterior',
  nextButtonText = 'Siguiente',
  disableStepIndicators = false,
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [direction, setDirection] = useState<number>(0);
  const totalSteps = steps.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  return (
    <div className={`flex flex-col items-center w-full ${rest.className}`} {...rest}>
      <div className={`mx-auto w-full max-w-2xl rounded-3xl bg-app border border-main/20 shadow-2xl ${stepCircleContainerClassName}`}>
        
        {/* Indicadores de Pasos superior */}
        <div className={`flex w-full items-center p-6 bg-mono-lighter/5 rounded-t-3xl border-b border-main/10 ${stepContainerClassName}`}>
          {steps.map((_, index) => {
            const stepNumber = index + 1;
            return (
              <React.Fragment key={stepNumber}>
                <StepIndicator
                  step={stepNumber}
                  currentStep={currentStep}
                  disableStepIndicators={disableStepIndicators}
                  onClickStep={(clicked: number) => {
                    setDirection(clicked > currentStep ? 1 : -1);
                    updateStep(clicked);
                  }}
                />
                {index < totalSteps - 1 && <StepConnector isComplete={currentStep > stepNumber} />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Contenido Animado */}
        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={`px-8 pt-10 pb-6 overflow-hidden ${contentClassName}`}
        >
          <div className="space-y-4">
             <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-xl mb-2">
                {currentStep}
             </div>
             <h3 className="text-3xl font-black text-main leading-tight">
                {steps[currentStep - 1]?.title}
             </h3>
             <p className="text-lg opacity-70 leading-relaxed max-w-prose">
                {steps[currentStep - 1]?.description}
             </p>
             
             {/* Renderizado de contenido extra (GIFs, imágenes, etc) */}
             {steps[currentStep - 1]?.content && (
               <div className="pt-4">
                 {steps[currentStep - 1].content}
               </div>
             )}
          </div>
        </StepContentWrapper>

        {/* Footer con Botones */}
        {!isCompleted && (
          <div className={`px-8 pb-8 flex items-center justify-between ${footerClassName}`}>
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`text-sm font-bold transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'opacity-60 hover:opacity-100 text-main'}`}
            >
              ← {backButtonText}
            </button>
            <button
              onClick={isLastStep ? () => updateStep(totalSteps + 1) : handleNext}
              className="bg-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-accent/30 transition-all active:scale-95"
            >
              {isLastStep ? 'Finalizar' : nextButtonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function StepContentWrapper({ isCompleted, currentStep, direction, children, className }: any) {
  const [height, setHeight] = useState<number | 'auto'>('auto');
  const containerRef = useRef<HTMLDivElement>(null);

  // ResizeObserver detecta cambios de altura incluso si cargan imágenes/gifs
  useEffect(() => {
    if (!containerRef.current || isCompleted) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [currentStep, isCompleted]);

  return (
    <motion.div
      animate={{ height: isCompleted ? 0 : (height === 'auto' ? 'auto' : height + 60) }} // +60 por padding
      transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
      className={className}
    >
      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        {!isCompleted && (
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div ref={containerRef}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const stepVariants: Variants = {
  enter: (dir: number) => ({ x: dir >= 0 ? '15%' : '-15%', opacity: 0 }),
  center: { x: '0%', opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? '-15%' : '15%', opacity: 0 })
};

// ... (StepIndicator y StepConnector se mantienen igual)
function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }: any) {
  const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';
  return (
    <motion.div 
      onClick={() => !disableStepIndicators && onClickStep(step)}
      className="relative cursor-pointer"
      animate={status}
    >
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: 'rgba(120,120,120,0.1)', color: '#a3a3a3' },
          active: { scale: 1.1, backgroundColor: '#5227FF', color: '#fff' },
          complete: { scale: 1, backgroundColor: '#5227FF', color: '#fff' }
        }}
        className="flex h-10 w-10 items-center justify-center rounded-full font-bold shadow-sm"
      >
        {status === 'complete' ? "✓" : step}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }: { isComplete: boolean }) {
  return (
    <div className="relative mx-4 h-0.5 flex-1 bg-main/10 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-accent"
        initial={false}
        animate={{ width: isComplete ? '100%' : '0%' }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}