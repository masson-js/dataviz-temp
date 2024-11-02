import { Navigation } from "../components/navigation";
import ContentContainer from "../components/container";


export default function Dashboard() {
  return (
    <main className="w-full flex flex-col">
      <Navigation />
      <ContentContainer>
        <div>Hi</div>
      </ContentContainer>
    </main>
  );
}
