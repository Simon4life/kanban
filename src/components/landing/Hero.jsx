import styled from "styled-components"

export default function Hero() {
  return (
    <Wrapper className="relative pt-24 pb-16 md:pt-32 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none container"></div>
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
        Master Your <span className="purple-gradient-text">Workflow</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
        The ultimate command center for engineering teams. Visualize tasks, automate repetitive work, and drive projects to completion with surgical precision.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
      <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-md text-label-md font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
        Get Started for Free
      </button>
      <button className="border border-outline-variant text-on-surface px-10 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-variant/50 transition-all">
        Book a Demo
      </button>
      </div>
</Wrapper>
  );
}

const Wrapper = styled.div`

.container {
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
}
`