type Props = {
  pageName: string;
  value: number;
};

export const PageSelectionCheckBox = ({ pageName, value }: Props) => {
  return (
    <label className="page-selection-row cursor-pointer">
      <h1 className="text-[14px]">{pageName}</h1>

      <input
        type="checkbox"
        name="pageNumber"
        className="custom-checkbox"
        value={value}
      />
    </label>
  );
};
