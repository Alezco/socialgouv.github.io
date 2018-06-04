import { BlocCards, Layout } from "../../src/composants";
import { Cards } from "../index";

export default () => (
  <Layout>
    <section className="section-white">
      <div className="container">
        <h1>Work in France</h1>
        <h3>La plateforme de demande d’autorisations provisoires de travail</h3>
      </div>
    </section>
    <BlocCards title="Nos autres startups" cards={[Cards.cdtn, Cards.emjpm]} />
  </Layout>
);
