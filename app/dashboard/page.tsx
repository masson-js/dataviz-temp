import { Navigation } from "../components/navigation";
import ContentContainer from "../components/container";
import Chart01 from "../templates/chart_01";

export default function Dashboard() {
  return (
    <main className="w-full flex flex-col">
      <Navigation />
      <ContentContainer>
        <Chart01 />
      </ContentContainer>
    </main>
  );
}
