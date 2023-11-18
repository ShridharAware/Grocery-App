import { BeveragesData } from "../../../assets/sampleData";
import CardAbstract from "../../ui/Card";

const Beverages: React.FC = () => {
  return (
    <>
      <h4 className="m-4">BeveragesData</h4>
      <CardAbstract data={BeveragesData} />
    </>
  );
};

export default Beverages;
