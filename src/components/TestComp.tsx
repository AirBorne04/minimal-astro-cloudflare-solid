import "solid-js";
import { onMount } from "solid-js";
import { createSignal } from "solid-js";

export const TestComp = () => {

  
  // console.log(isClient);
const isClient = typeof window !== 'undefined';
  const [mes, setMes] = createSignal(isClient ? " and the client" : "but not the client yet");

  

  // if (isClient) {
  //   setMes();
  //   console.log("message updated");
  // }

  return (
    <div onClick={() => console.log("testing solid active")}>Render worked on the server<span>{mes()}</span></div>
  );
};