import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import "../../assets/css/auth.css";

const Auth = ({ authRoute }) => {
    let formbody;
    formbody = (
        <>
            {authRoute === "login" && <LoginForm />}
            {authRoute === "register" && <RegisterForm />}
        </>
    );
    // const arr = [
    //     {
    //         id: 1,
    //         name: "Test 1",
    //     },
    //     {
    //         id: 2,
    //         name: "Test 2",
    //     },
    //     {
    //         id: 3,
    //         name: "Test 3",
    //     },
    // ];
    // const renderElement = arr.map((item, index) => (
    //     <h1 key={index}>{item.name}</h1>
    // ));

    return (
        <div className="body-login">
            <div className="body__element">
                <div className="container-app">
                    <h2 className="container-app__element">
                        Learning Application
                    </h2>
                    <p className="container-app__element">
                        Keep track of what you are learning
                    </p>
                    <div className="container-app-form">
                        <div className="container-app-form__element">
                            {formbody}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
