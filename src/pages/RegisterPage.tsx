import React from "react";

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="register_content">
        <form>
          <input placeholder="First Name" name="firstName" required />
          <input placeholder="Last Name" name="lastName" required />
          <input placeholder="Email " name="email" type="email" required />
          <input
            placeholder="Password"
            name="password"
            type="password"
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            required
          />
          <input
            accept="image/*"
            name="profileImage"
            type="file"
            required
            style={{ display: "none" }}
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
