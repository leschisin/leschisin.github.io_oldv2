// import styles from "../styles/home.module.css";
import barnImg from "/barn.JPG"

export default function Home() {
  return (
    <div
      className="h-screen w-full bg-cover grayscale bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${barnImg})` }}
    >
      this is home
    </div>
  );
}
