import { NextPage } from 'next';
import { Layout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
        <div className="flex">
          <section className="w-1/4 h-screen">
            <div className="mt-14">
              <h3>Left</h3>
            </div>
          </section>
          <section className="w-2/4 border-l border-r">
            <div className="mt-14">
              <h3>Center</h3>
            </div>
          </section>
          <section className="w-1/4">
            <div className="mt-14">
              <h3>Right</h3>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
