import React, { useState, useEffect } from "react";
import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "./../../api/authApi.js";
import { setAuth } from "../../redux/features/auth/authSlice.js";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setToastMessage("Пожалуйста, заполните все поля.");
      setToastVariant("danger");
      setShowToast(true);
      return;
    }

    try {
      const result = await login({ email, password }).unwrap();

      if (result.data && result.data.access_token) {
        const token = result.data.access_token;
        const user = result.data.user;

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("token", token);

        dispatch(
          setAuth({
            success: true,
            message: "Успешный вход!",
            token,
            user,
            role: user.role || "admin",
          })
        );

        setToastMessage("Успешный вход!");
        setToastVariant("success");
        setShowToast(true);
        window.location.reload();
      } else {
        setToastMessage(result.message || "Неправильный логин или пароль.");
        setToastVariant("danger");
        setShowToast(true);
      }
    } catch (error) {
      setToastMessage("Ошибка входа. Проверьте данные и попробуйте снова.");
      setToastVariant("danger");
      setShowToast(true);
      console.error("Ошибка входа:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <section className="login">
      <div className="container d-flex justify-content-center align-items-center login-container">
        <div
          className="row"
          style={{ backgroundColor: "white", borderRadius: "8px" }}
        >
          <div className="col text-center">
            <h3 className="mb-4 signIn-text">Вход</h3>

            <form className="text-center" onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="admin@admin.com"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="admin"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 submit-button"
              >
                Войти
              </Button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg={toastVariant}
        >
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </section>
  );
}

export default Login;
