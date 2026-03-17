import Container from "@/components/Container";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <Container>
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wide text-zinc-600">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={id}
          className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-relaxed text-zinc-600">
            {description}
          </p>
        ) : null}
      </div>
    </Container>
  );
}
