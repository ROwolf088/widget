import React, { Component, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "what is react",
    content: "javascript library",
  },
  {
    title: "why use react?",
    content: "its favorite among developers",
  },
  {
    title: "how do you use react?",
    content: "by creating components",
  },
];

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color blue",
    value: "blue",
  },
  {
    label: "the color yellow",
    value: "yellow",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

// const showList = () => {
//   if (window.location.pathname === "/list") {
//     return <Search />;
//   }
// };

// const showDropDown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return <Dropdown />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// };

export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      <Header />
      {/* <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle Dropdown
      </button>
      {showDropDown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      {/* <Translate /> */}
    </div>
  );
};
