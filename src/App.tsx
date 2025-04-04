import { PageSelectionCard } from "./components/PageSelectionCard";
import { PageSelectionCheckBox } from "./components/PageSelectionCheckBox";
import { PageSelectionCheckBoxesList } from "./components/PageSelectionCheckBoxesList";

function App() {
  return (
    <div className="center-layout">
      <PageSelectionCard>
        <PageSelectionCheckBox pageName="All pages" value={0} />

        <div className="line-layout">
          <hr className="line" />
        </div>

        <PageSelectionCheckBoxesList />

        <div className="line-layout">
          <hr className="line" />
        </div>

        <div className="button-layout">
          <button className="button">Done</button>
        </div>
      </PageSelectionCard>
    </div>
  );
}

export default App;
