import React from "react";
import Email from "./EmailInput";
import Success from "./SubmitSuccess";
import Error from "./ErrorMSG";

function Form() {
  return (
    <>
      <form
        className="form-subscribe"
        id="contactForm"
      >
        {/* <!-- Email address input--> */}
        <Email />
        {/* <!-- Submit success message-->
                                <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted--> */}
        <Success />
        {/* <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form--> */}
        <Error />
      </form>
    </>
  );
}
export default Form;
