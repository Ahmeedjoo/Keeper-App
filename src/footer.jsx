import "../public/style.css";
let currentDate = new Date();
let year = currentDate.getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>Copy Right {year}</p>
    </footer>
  );
}
