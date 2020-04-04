import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Form } from "antd";
import {
  addFriend,
  fetchFriendsList
} from "../../../../Redux/actions/friends_actions";

const AddFriend = props => {
  let { secondUserID, currentUser } = props;
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
            setTimeout(() => {
              setFormErrorMessage(
                "There is no data, or problems with receiving it"
              );
            }, 1000);
          });

        dispatch(fetchFriendsList())
          .then(response => response.data)
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
