import { useQuery, UseQueryResult } from 'react-query';

import { useAxios } from '@hooks';
import { UseGetAgentsResponseType } from '@types';

export default function useGetAgents(props?: Record<string, any>): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetAgents'],
    () =>
      axios
        .get('/v1/agents', {
          params: { isPlayableCharacter: true },
        })
        .then((res) => res.data as UseGetAgentsResponseType),
    props,
  );
}
