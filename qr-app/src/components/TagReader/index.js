import React, {useState} from "react";
import QrReader from "react-qr-scanner";
import addGeoLocatedBarrel from "../../utils/addGeoLocatedBarrel";

const INITIAL_STATE = {
  delay: 100,
  result: "No result",
};

export default function TagReader({ onRead }) {
  const [delay, setDelay] = useState(INITIAL_STATE.delay);
  const [result, setResult] = useState(INITIAL_STATE.result);

  function handleScan(data) {
    setResult(data);
    if (data) {
      console.log(">typeof data: " + typeof data);
      addGeoLocatedBarrel(data);
    }
    if(onRead) {
      onRead(data);
    }
    
  }
  function handleError(err) {
    console.error(err);
  }

  const styles = {
      width: '100%',
      height: '100%',
  }

  return (
    <div>
      <QrReader
        delay={delay}
        style={styles}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  );
}
