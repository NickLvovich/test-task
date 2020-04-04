import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Form } from "antd";
import { removeFriend, fetchFriendsList } from "../../../../Redux/actions/friends_actions";

const RemoveFriend = props => {
  let { friendshipID } = props;
  const [formErrorMessage, setFormErrorMessage] = useState(
    "ok, we receive data"
  );
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        friendshipID: friendshipID
      }}
      onSubmit={(values, { setSubmitting }) => {
        let dataToSubmit = {
          _id: values.friendshipID
        };
        dispatch(removeFriend(dataToSubmit))
          .then(response => response.payload.user)
          .catch(err => {
            setFormErrorMessage(
              "There is no data, or problems with receiving it"
            );
            setTimeout(() => {
              setFormErrorMessage("");
            }, 1000);
          });
          dispatch(fetchFriendsList())
          .then(response => response.data)
          .catch(err => {
            setFormErrorMessage("There is no data, or problems with receiving it");
            setTimeout(() => {
              setFormErrorMessage("");
            }, 1000);
          });
        setSubmitting(false);
      }}
    >
      {props => (
        <Form
          className="button-block"
          onSubmit={props.handleSubmit}
        >
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button  className="ant-btn"  type="submit">Delete</button>
        </Form>
      )}
    </Formik>
  );
};

export default RemoveFriend;
