export default function StrokedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2
      className={className}
      style={{
        textShadow:
          "1px 1px 0px #000000, -1px -1px 0px #000000, 1px -1px 0px #000000, -1px 1px 0px #000000",
      }}
    >
      {text}
    </h2>
  );
}
