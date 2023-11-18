import { StaplesData } from "../../../assets/sampleData";
import CardAbstract from "../../ui/Card";
const Staples: React.FC = () => {
  return (
    <>
      <h4 className="m-4">Staples</h4>
      <CardAbstract data={StaplesData} />
    </>
  );
};
export default Staples;
