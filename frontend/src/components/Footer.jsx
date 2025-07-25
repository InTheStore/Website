function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "1rem 2rem",
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} In The Store
      </p>
    </footer>
  );
}

export default Footer;
