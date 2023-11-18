import { FruitsData } from "../../../assets/sampleData";
import CardAbstract from "../../ui/Card";

const Fruits: React.FC = () => {
  return (
    <>
      <h4 className="m-4">Fruits</h4>
      <CardAbstract data={FruitsData} />
    </>
  );
};

export default Fruits;
