import { HomecareData } from "../../../assets/sampleData";
import CardAbstract from "../../ui/Card";
const HomeCare: React.FC = () => {
  return (
    <>
      <h4 className="m-4">Homecare</h4>
      <CardAbstract data={HomecareData} />
    </>
  );
};
export default HomeCare;
