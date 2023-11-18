import { SnacksData } from "../../../assets/sampleData";
import CardAbstract from "../../ui/Card";
const Snacks: React.FC = () => {
  return (
    <>
      <h4 className="m-4">Snacks</h4>
      <CardAbstract data={SnacksData} />
    </>
  );
};
export default Snacks;
