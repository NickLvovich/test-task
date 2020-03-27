import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Form } from "antd";
import {
  fetchFriendsList,
  addFriend
} from "../../../Redux/actions/friends_actions";

const AddFriend = props => {
  let { currentUser, secondUserID, key } = props;
  const [formErrorMessage, setFormErrorMessage] = useState(
    "ok, we receive data"
  );
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstUserID: currentUser,
        secondUserID: secondUserID
      }}
      onSubmit={(values, { setSubmitting }) => {
        let dataToSubmit = {
          firstUserID: values.firstUserID,
          secondUserID: values.secondUserID
        };
        dispatch(addFriend(dataToSubmit))
          .then(response => response.payload.user)
          .catch(err => {
            setFormErrorMessage(
              "There is no data, or problems with receiving it"
            );
            setTimeout(() => {
              setFormErrorMessage("");
            }, 1000);
          });
        setSubmitting(false);
      }}
    >
      {props => (
        <Form key={secondUserID} className="button-block" onSubmit={props.handleSubmit}>
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Add friend</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddFriend;
