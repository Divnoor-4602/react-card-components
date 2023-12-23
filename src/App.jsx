import { useState } from "react";

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton.jsx";

function App() {
  // setting use state for this app
  const [selectedText, setSelectedText] = useState();

  function handleSelect(selectedButton) {
    // on click of button set the selected text to something else
    setSelectedText(selectedButton);
  }

  return (
    <div>
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedText === "components"}
              onSelect={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedText === "jsx"}
              onSelect={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedText === "props"}
              onSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedText === "state"}
              onSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>

          {!selectedText ? (
            <p>Please select a button</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedText].title}</h3>
              <p>{EXAMPLES[selectedText].description}</p>
              <pre>
                <code>{EXAMPLES[selectedText].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
