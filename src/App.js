import Note from "./Note";
import Footer from "./footer";
import Header from "./header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
