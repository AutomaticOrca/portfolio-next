import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer
      style={{ textAlign: "center", padding: "1rem 0", background: "#f0f0f0" }}
    >
      <p className="text-small">
        Built with Next.js, UI Framework: NextUI &nbsp;
        <Link
          href="https://github.com/AutomaticOrca/portfolio-next"
          underline="always"
          color="success"
        >
          GitHub Repository
        </Link>
      </p>
      <p>
        Contact me at:{" "}
        <a href="mailto:liangjiaying1013@outlook.com">
          liangjiaying1013@outlook.com
        </a>
      </p>
    </footer>
  );
};
export default Footer;
