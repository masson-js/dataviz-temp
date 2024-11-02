
import ContentContainer from "../components/container";
import { Navigation } from "../components/navigation";
import Chart_1 from "./chart_1/chart_1";




export default function Charts() {
  return (
    <div className="flex w-auto flex-col content-center">
      <Navigation />
      <ContentContainer>
     
        <Chart_1 />
       
      </ContentContainer>
    </div>
  );
}
