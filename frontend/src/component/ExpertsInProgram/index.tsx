import ExpertsList from "../ExpertsList";
import SearchExperts from "../SearchExperts";

const ExpertsInProgram = () => {
  return (
    <div className="p-4">
      <SearchExperts />
      <ExpertsList />
    </div>
  );
};

export default ExpertsInProgram;
