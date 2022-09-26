import { createSignal, onMount } from "solid-js";

export const TestComp = () => {

  
  // console.log(isClient);
  const [mes, setMes] = createSignal("but not the client yet");

  onMount(() => setMes("and the client"));
  
  // if (isClient) {
  //   setMes();
  //   console.log("message updated");
  // }

  return (
    <div onClick={() => console.log("testing solid active")}>Render worked on the server <span>{mes()}</span></div>
  );
};