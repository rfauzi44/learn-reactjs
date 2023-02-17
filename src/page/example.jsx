import React, { Component, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// class example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "Changing text",
//     };
//   }

//   componentDidMount() {
//     console.log("did mount");
//   }

//   componentDidUpdate() {
//     console.log("did update");
//   }

//   inputChange = (el) => {
//     this.setState({ email: el.target.value });
//   };
//   render() {
//     return (
//       <Form>
//         <p>{this.state.email}</p>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             onChange={this.inputChange}
//           />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     );
//   }
// }

function ChildSample(props) {
  return <div>This child component. This {props.thecounter} will change as parents component</div>;
}

function Sample() {
  const [valueEmail, setEmail] = useState("Changing email");
  const [valuePassword, setPassword] = useState("Changing password");
  const [counter, setCounter] = useState(1);

  const inputEmailChange = (el) => {
    setEmail(el.target.value);
  };
  const inputPasswordChange = (el) => {
    setPassword(el.target.value);
  };
  const increment = () => {
    setCounter(function (prevCount) {
      return prevCount + 1;
    });
  };

  useEffect(() => {
    console.log("general did mount-update");
  });
  useEffect(() => {
    console.log("did update email and password");
  }, [valueEmail, valuePassword]);

  return (
    <div className="container">
      <ChildSample thecounter={counter} />

      <h1>{counter}</h1>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">
          Min
        </button>
        <button type="button" class="btn btn-primary" onClick={increment}>
          Add
        </button>
        <button type="button" class="btn btn-primary">
          Right
        </button>
      </div>
      <Form>
        <p>Email : {valueEmail}</p>
        <p>Password : {valuePassword}</p>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={inputEmailChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={inputPasswordChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Sample;
