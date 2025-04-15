import { Github, Linkedin } from "lucide-react";
import { Button } from "./components/Button";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <h1 className="gradient-text">Hello, World!</h1>
      <div>
        <a
          href="https://github.com/aarifkhamdi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="social-link" aria-label="Github">
            <Github className="social-icon" />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/aarifkhamdi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="social-link" aria-label="Linkedin">
            <Linkedin className="social-icon" />
          </Button>
        </a>
      </div>
    </main>
  );
}
