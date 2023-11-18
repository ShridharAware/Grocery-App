import { VegetablesData } from "../../../assets/sampleData";
import CardAbstract from "../../ui/Card";
const Vegetables: React.FC = () => {
  return (
    <>
      <h4 className="m-4">Vegetables</h4>
      <CardAbstract data={VegetablesData} />
    </>
  );
};
export default Vegetables;
