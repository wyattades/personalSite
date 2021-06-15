import BlockText from 'components/BlockText';
import Layout from 'components/Layout';

import ErrorPage from './_error';

const NotFoundErrorPage = () => <ErrorPage error={{ code: 404 }} />;

export default NotFoundErrorPage;
