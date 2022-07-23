import { GoogleLoginButton } from "ts-react-google-login-component";

export const GoogleLoginBtn = () => {
  const preLoginTracking = () => {
    console.log('Attemp to login with google');
  }

  const errorHandler = (error: string) => {
    // handle error if login got failed...
    console.error(error)
  }

  //@ts-ignore
  const responseGoogle = (googleUser: gapi.auth2.GoogleUser) => {
    const id_token = googleUser.getAuthResponse(true).id_token
    const googleId = googleUser.getId()

    console.log({ googleId })
    console.log({accessToken: id_token})
    // Make user login in your system
    // login success tracking...
  }

  const google_client = {
    client_id: process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS 
  }

  return(
    <>
      <GoogleLoginButton
        responseHandler={responseGoogle}
        clientConfig={google_client}
        preLogin={preLoginTracking}
        failureHandler={errorHandler}
    />
    </>
  );
}