const RootContainerStyle = {
    display: "flex",
    height: "100vh",
    minHeight: "100vh",
    padding: "0 0.5rem",
    alignItems: "center",
    justifyContent: "center",
};

const PageContainerStyle = {
    flex: "1",
    display: "flex",
    padding: "5rem 0",
    alignItems: "center",
    justifyContent: "center",
};

const TitleStyle = {
    fontSize: "4rem",
    color: "#0070f3",
    lineHeight: "1.15",
    textDecoration: "none",
    _hover: {
        textDecoration: "underline",
    },
};
export { PageContainerStyle, RootContainerStyle, TitleStyle };
