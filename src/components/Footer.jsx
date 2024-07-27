const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="py-3 footer">
      <p className="text-center text-body- primary">By fnrr</p>
      <p className="text-center text-body-primary">
        © {currYear}{" "}
        <span>
          <strike>Facebook</strike> Notebook
        </span>
        , Inc
      </p>
    </footer>
  );
};

export default Footer;
