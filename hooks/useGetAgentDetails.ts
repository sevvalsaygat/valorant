import { useQuery, UseQueryResult } from 'react-query';

import { useAxios } from '@hooks';
import { UseGetAgentDetailsResponseType } from '@types';

type useGetAgentsDetailsParamsType = {
  agentId: string;
};

export default function useGetAgentDetails(
  params: useGetAgentsDetailsParamsType,
  props?: Record<string, any>,
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetAgentDetails'],
    () =>
      axios.get(`/v1/agents/${params.agentId}`, { params }).then((res) => res.data as UseGetAgentDetailsResponseType),
    props,
  );
}
