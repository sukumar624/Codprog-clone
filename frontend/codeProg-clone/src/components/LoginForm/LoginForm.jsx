import { Form } from "react-router-dom"
import "./LoginForm.css"

export const loginAction = async ({ request }) => {
    console.log('request', request);
    const data = await request.formData();

    console.log('email', data.get("name"));
    console.log('password', data.get("password"));
    // for (const pair of data.entries()) {
    //     console.log(pair[0], pair[1]);
    // }


    return null;
}
const LoginForm = () => {
    return (
        <div className="login_form">
            <Form method="POST" action="/login">
                <div className="input_group">
                    <input type="text" name="name" id="name" autoComplete="off" />
                </div>
                <div className="input_group">
                    <input type="password" name="password" id="password" autoComplete="off" />
                </div>
                <div className="submit_btn">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm