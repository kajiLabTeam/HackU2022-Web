interface TestComponentProps {
  before: string;
  after?: string;
  children?: React.ReactNode;
}

export const TestComponent = ({
  before,
  after,
  children,
}: TestComponentProps) => {
  return (
    <p style={{ fontWeight: "bold", color: "green", fontSize: "48px" }}>
      {before}, おじゃ！ {children}
      {after}
    </p>
  );
};
