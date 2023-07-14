import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Application } from '@layouts';
import { useGetAgentDetails } from '@hooks';

export default function AgentDetails() {
  const router = useRouter();
  const { id } = router.query;

  const {
    isLoading: agentIsLoading,
    isSuccess: agentIsSuccess,
    isError: agentIsError,
    data: agentData,
    refetch: agentRefetch,
  } = useGetAgentDetails({ agentId: id as string }, { enabled: !!id });

  console.log(agentData);

  useEffect(() => {
    agentRefetch();
  }, [id, agentRefetch]);

  return (
    <Application isLoading={agentIsLoading}>
      {agentIsError && <div>Could not found agent...</div>}
      {agentIsSuccess && (
        <div className="flex-1 flex-col p-16 h-screen bg-blue-200">
          <div className="flex flex-row ">
            <div className=" text-120 font-bold w-1/5 text-white uppercase flex items-center ml-8 cursor-pointer hover:text-red-200 hover:animate-slide-right">
              {agentData.data.displayName}
            </div>
            <div className="w-3/5 flex justify-center">
              <Image height={700} width={700} alt={agentData.data.description} src={agentData.data.fullPortrait!!} />
            </div>
            <div className="flex flex-col w-2/5 pt-20">
              <div className="flex flex-col text-white">&#47;&#47; ROLÜ</div>
              <div className="flex flex-col text-white text-60">{agentData.data.role.displayName}</div>
              <div className="mt-10 mr-10">
                <div className="flex flex-col text-white">&#47;&#47; Yaşam Öyküsü</div>
                <div className="flex flex-row pt-8 text-16 text-gray-400 leading-12 mb-12">
                  {agentData.data.description}
                </div>
                <div className="border-2 rounded-7"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Application>
  );
}
