import { Loading, Header } from '@components';

type ApplicationPropTypes = {
  isLoading?: boolean;
  children: React.ReactNode;
};

export default function Application({ isLoading, children }: ApplicationPropTypes) {
  return (
    <div>
      <Header />
      {children}
      {isLoading && <Loading />}
    </div>
  );
}
