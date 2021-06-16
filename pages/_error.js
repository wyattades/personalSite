import BlockText from 'components/BlockText';
import Layout from 'components/Layout';

const ErrorPage = ({ error }) => (
  <Layout>
    <div className="layers">
      <BlockText text={(error?.code ?? 404).toString()} />
    </div>
  </Layout>
);

export default ErrorPage;
