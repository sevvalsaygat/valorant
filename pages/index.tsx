import { Application } from '@layouts';
import { Agent } from '@components';
import { useGetAgents } from '@hooks';

export default function Home() {
  const { data } = useGetAgents();

  return (
    <Application>
      <div className="flex flex-col">
        <Agent.List agents={data?.data || []} />
      </div>
    </Application>
  );
}
