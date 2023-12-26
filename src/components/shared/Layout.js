import { Container, Navbar } from "react-bootstrap";
// Thay đổi đường dẫn tới hình ảnh logo của bạn

function Layout(props) {
  return (
    <div>
      <Navbar bg="info" variant="dark" expand="lg">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand>
            <img
              src={"../../../public/chuot1.jpg"}
              alt="Logo"
              height="30"
              
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <Container>{props.children}</Container>
    </div>
  );
}

export default Layout;
