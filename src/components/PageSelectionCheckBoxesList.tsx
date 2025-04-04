import { PageSelectionCheckBox } from "./PageSelectionCheckBox";

export const PageSelectionCheckBoxesList = () => {
  const sampleData = [
    {
      id: "1",
      name: "Page 1",
      value: 1,
    },
    {
      id: "2",
      name: "Page 2",
      value: 2,
    },
    {
      id: "3",
      name: "Page 3",
      value: 3,
    },
    {
      id: "4",
      name: "Page 4",
      value: 4,
    },
  ];

  return (
    <>
      {sampleData.map((item) => (
        <div key={item.id}>
          <PageSelectionCheckBox pageName={item.name} value={item.value} />
        </div>
      ))}
    </>
  );
};
