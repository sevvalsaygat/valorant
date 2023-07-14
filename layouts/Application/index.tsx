import { Loading, Header } from '@components';

type ApplicationPropTypes = {
  isLoading?: boolean;
  children: React.ReactNode;
};

export default function Application({ isLoading, children }: ApplicationPropTypes) {
  return (
    <div className="flex-1">
      <Header />
      {children}
      {isLoading && <Loading />}
    </div>
  );
}
