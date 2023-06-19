import React from 'react';
import { AgentType } from '@types';
import Image from 'next/image';

type AgentItemType = {
  agent: AgentType;
};

export default function AgentItem({ agent }: AgentItemType) {
  return (
    <div className="border bg-red-500 ">
      <Image height={500} width={500} alt={agent.displayName} src={agent.displayIcon!!} />
    </div>
  );
}
