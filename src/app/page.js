//import styles from "./page.module.css";
import Server from "../app/server/page";
import InputModal from "../app/Client/Inputmodal";



export default function Home() {
  return (
    <main >
        <p>Your current plant inventory is listet down below. To add more plants to your inventory please fill out the form under your current plant inventory.</p>
        <div>        </div>

        <InputModal/>
        <a
          href="/otherList"
          
          target="_blank"
          rel="noopener noreferrer"
        > otherLists Page</a>


    </main>
  );
}
