type Props = {
  pageName: string;
  value: number;
};

export const PageSelectionCheckBox = ({ pageName, value }: Props) => {
  return (
    <div className="page-selection-row ">
      <h1 className="text-[14px]">{pageName}</h1>

      <input
        type="checkbox"
        name="pageNumber"
        className="custom-checkbox"
        value={value}
      />
    </div>
  );
};
