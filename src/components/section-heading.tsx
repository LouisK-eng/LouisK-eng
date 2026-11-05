export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-12 lg:mb-16">
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent">
        <span
          aria-hidden="true"
          className="h-px w-10 bg-linear-to-r from-accent to-aqua"
        />
        {index}
      </p>
      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
