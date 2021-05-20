import React from "react";
import { Col, Form, Button } from "antd";
import { useTranslation } from "gatsby-plugin-react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <WrapLoginStyles>
      <Col xl={12} lg={12} md={12} sm={8} xs={0}></Col>
      <Col xl={12} lg={12} md={12} sm={16} xs={24} className="login">
        <Col xl={12} lg={12} md={12} xs={12} className="title-login">
          <h3>{t('login.welcome')}</h3>
          <div className="divider" />
        </Col>
        <Col xl={12} lg={12} md={12} xs={12} className="login-form">
          <Form>
            <Form.Item
              name="email"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your username!",
              //   },
              // ]}
            >
              <Input placeholder={t('input.email.placeholder')} />
            </Form.Item>

            <Form.Item
              name="password"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your password!",
              //   },
              // ]}
            >
              <Input placeholder={t('input.name.placeholder')}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {t('button.login')}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Col>
    </WrapLoginStyles>
  );
};

export default LoginForm;
