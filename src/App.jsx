import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => {
              return <CoreConcept key={coreConcept.title} {...coreConcept} />;
            })}
          </ul>
        </section>
        <Examples />
      </main>
    </>
  );
}

export default App;
