import { TestComponent } from "./Ex01";

const data = ["HEY", "YO!", "LFG", "WTF"];

export const TestRiyo = () => {
  return (
    <div>
      {data.map((item) => (
        <TestComponent key={item} before={item} />
      ))}
    </div>
  );
};
