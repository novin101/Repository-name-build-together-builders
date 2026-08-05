import React from "react";

type Step = {
  id: number;
  title: string;
  description: string;
};

type Feature187Props = {
  heading: string;
  subheading?: string;
  steps: Step[];
};

type StepItemProps = {
  step: Step;
  isLast: boolean;
};

const StepItem: React.FC<StepItemProps> = ({ step, isLast }) => {
  return (
    <div className="max-lg:flex max-lg:gap-4">
      <div className="relative lg:py-6">
        <div
          className={`bg-muted/50 bg-linear-to-b lg:bg-linear-to-r absolute h-full w-1 -translate-x-1/2 translate-y-11 max-lg:left-1/2 lg:top-1/2 lg:h-1 lg:w-full lg:-translate-y-1/2 lg:translate-x-6 ${
            isLast ? "from-muted/50 to-white" : ""
          }`}
        />
        <div className="bg-background relative z-0 grid size-11 place-content-center rounded-full border-4">
          <p className="text-lg font-bold">{step.id}</p>
        </div>
      </div>
      <div className="max-lg:mt-2">
        <p className="text-lg font-semibold text-black">{step.title}</p>
        <p className="text-muted-foreground mt-2">{step.description}</p>
      </div>
    </div>
  );
};

const Feature187: React.FC<Feature187Props> = ({ heading, subheading, steps }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div>
          <h2 className="text-4xl font-medium sm:text-5xl lg:text-6xl">{heading}</h2>
          {subheading ? (
            <p className="text-muted-foreground mt-8 md:text-lg">{subheading}</p>
          ) : null}
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-6">
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature187 };
