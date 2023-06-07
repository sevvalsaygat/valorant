import { Loading } from '@components';

type ApplicationPropTypes = {
  isLoading?: boolean;
  children: React.ReactNode;
};

export default function Application({ isLoading, children }: ApplicationPropTypes) {
  return (
    <div>
      {children}
      {isLoading && <Loading />}
    </div>
  );
}
