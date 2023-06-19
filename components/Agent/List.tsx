import { AgentType } from '@types';
import Item from './Item';

type AgentListType = {
  agents: AgentType[];
};

export default function AgentList({ agents }: AgentListType) {
  return (
    <div className="grid grid-cols-3 gap-1 p-4">
      {agents.map((agent: AgentType) => (
        <Item key={agent.uuid} agent={agent} />
      ))}
    </div>
  );
}
