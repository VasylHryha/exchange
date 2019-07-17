import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom";
import InputBlock from "./InputBlock.jsx"


class NormalLoginForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <section className="inputBlock__wrapperBlock">
            <div className="wrapperBlock__content">
            
        <div id="filter" onClick={this.handleClick=()=>(showLogin('none'))}></div>
        <div className="fadeIn" id="modalForm">

          <InputBlock>
          <div className="top">
              <h2>Ввійти в акаунт</h2>
              <p>Для входу в акаунт, вкажіть ваш логін і пароль</p>
            </div>
          
            <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Вкажіть ваш логін!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Логін"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Вкажіть ваш пароль!' }],
            })(
              <Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Пароль"
              />,
            )}
          </Form.Item>
          
          <Form.Item>
              
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Запам'ятати мене</Checkbox>)}
            
            <a className="login-form-forgot" href="">
              Забули пароль?
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Увійти
            </Button>
            
           <br/>  <Link to="/formRegistration" className="registerNow" onClick={this.handleClick=()=>(showRegister('block'),(showLogin('none')))}>Зареєструватись зараз!</Link>
           
          </Form.Item>
        </Form>
          </InputBlock>
          </div>
          </div>
          </section>

      );
    }
  }
  
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);



export default WrappedNormalLoginForm;
