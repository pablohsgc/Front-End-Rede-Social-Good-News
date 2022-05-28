import "./Login.css";

export function Login() {
    return (
        <>   
            <body class="flex">
                <div class="container">
                    <div class="user"></div>
                    <form>
                        <h1>Log In </h1>
                        <div class="input">
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div class="input box">
                            <input type="password" required />
                            <label>Password</label>
                            <div class="forgot"><a id="forgot-password" href="#">Forgot Password?</a></div>
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                    <div class="div">
                        <div class="line"></div>
                        <div class="signup">Don't Have an account? <a href="#">Sign Up</a></div>
                    </div>
                </div>
            </body>
        </>


    );
}