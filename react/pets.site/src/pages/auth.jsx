import AuthForm from "../components/forms/auth_form";

const Auth = (props) => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Авторизация</h2>
            <AuthForm setToken={props.setToken}/>
        </div>
    );
};

export default Auth;