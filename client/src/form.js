import React from 'react';

const Form = () => {
  return (
    <form>
      <center>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td><input type="text" name="fullname" placeholder="Full Name" required /></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input type="email" name="email" placeholder="Email" required /></td>
            </tr>
            <tr>
              <td>Password:</td>
              <td><input type="password" name="password" placeholder="Password" required /></td>
            </tr>
            <tr>
              <td>Address:</td>
              <td><input type="text" name="address" placeholder="Please enter your address" required /></td>
            </tr>
            <tr>
              <td>Phone number:</td>
              <td><input type="text" name="phn" placeholder="Phone number" required /></td>
            </tr>
            <tr>
              <td>Pin Code:</td>
              <td><input type="text" name="pin" placeholder="Pin Code" required /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{textAlign: 'center'}}>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </form>
  );
};

export default Form;
