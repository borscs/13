import React, {useCallback, useMemo, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";
// import DemoOutput from "./components/Demo/DemoOutput";

function App() {

    const [listTitle, setListTitle] = useState('My List');

    const changeTitleHandler = useCallback(() => {
        setListTitle('New Title');
    }, []);

    const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

    return (
        <div className="app">
            <DemoList title={listTitle} items={listItems} />
            <Button onClick={changeTitleHandler}>Change List Title</Button>
        </div>
    );


  //   const [showParagraph, setShowParagraph] = useState(false)
  //   const [allowToggle, setAllowToggle] = useState(false)
  //
  //   console.log("App RUNNING");
  //
  //
  //
  //   const toggleParagraphHandler = useCallback( () => {
  //
  //       if(allowToggle) {
  //           setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  //       }
  //   }, []);
  //
  //   const allowToggleHandler = () => {
  //       setAllowToggle(true);
  //   };
  //
  // return (
  //   <div className="app">
  //     <h1>Hi there!</h1>
  //       <DemoOutput show={showParagraph}/>
  //       <Button onClick={allowToggleHandler}>Allow Paragraph!</Button>
  //       <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
  //   </div>
  // );
}

export default App;
