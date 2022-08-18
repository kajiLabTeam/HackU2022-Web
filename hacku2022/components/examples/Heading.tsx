//{children}を使うコンポーネント
interface HeadingProps {
  fontSize: number;
  children?: React.ReactNode;
}
export const Heading = ({ fontSize, children }: HeadingProps) => {
  return (
    <p
      style={{
        fontWeight: "bold",
        fontSize: `${fontSize}px`,
        borderLeft: "solid 8px #0c7abf",
        paddingLeft: "8px",
      }}
    >
      {children}
    </p>
  );
};
