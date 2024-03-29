import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { AgentType } from '@types';

type AgentItemType = {
  agent: AgentType;
};

export default function AgentItem({ agent }: AgentItemType) {
  const [hovered, setHovered] = useState(false);

  const agentLink = `/agents/${agent.uuid}`;

  return (
    <Link href={agentLink} className="relative">
      <div
        className={cn('absolute top-0 left-0 right-0 bottom-0 hover:bg-red-150 hover:opacity-70 z-10 animate-slide', {
          'opacity-70': hovered,
          'opacity-0': !hovered,
        })}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ transition: 'opacity 0.1s' }}
      >
        <span
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold',
            {
              'opacity-100': hovered,
              'opacity-0': !hovered,
            },
          )}
          style={{ transition: 'opacity 0.1s' }}
        >
          {agent.displayName}
        </span>
      </div>
      <Image
        className="shadow-lg border-transparent rounded-7"
        height={500}
        width={500}
        alt={agent.displayName}
        src={agent.fullPortrait!!}
      />
    </Link>
  );
}
