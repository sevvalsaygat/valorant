import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Application } from '@layouts';
import { useGetAgentDetails } from '@hooks';

export default function AgentDetails() {
  const router = useRouter();
  const { id } = router.query;

  const {
    isLoading,
    isSuccess,
    isError,
    data: agentData,
    refetch,
  } = useGetAgentDetails({ agentId: id as string }, { enabled: !!id });

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  return (
    <Application isLoading={isLoading}>
      {isSuccess && (
        <div className="flex flex-col">
          <div className=""></div>
        </div>
      )}
    </Application>
  );
}
