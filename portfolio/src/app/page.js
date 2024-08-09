import { Nav } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="row g-5">
      <div className="basicTabBG col-3 p-0 justify-content-center dashContent ms-3 me-5">

        

        <Nav variant="underline" defaultActiveKey="#summary">
          <Nav.Item>
            <Nav.Link href="#summary">Summary</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#education">Education</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="leftContainer">
          <div className="tab-pane container mb-5 active" id="summary" > 
            <h2>Step 1</h2>
          </div>
          <div className="tab-pane container mb-5 " id="education" >
            <h2>Step 2</h2>
          </div>
          <div className="tab-pane container" id="resume" >
            <h2>Step 3</h2>
          </div>
        </div>

        


      </div>

      <div className="basicTabBG col-8 pt-4 justify-content-center dashContent ms-5 me-5">
        <h2>Hello world!</h2>
      </div>
    </div>
  );
}
