import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Form } from "antd";
import {
  acceptFriend,
  fetchFriendsList,
} from "../../../../Redux/actions/friends_actions";
import { Button } from 'antd';

const AcceptFriend = (props) => {
  let { friendshipID } = props;
  const [formErrorMessage, setFormErrorMessage] = useState(
    "ok, we receive data"
  );
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        friendshipID: friendshipID,
      }}
      onSubmit={(values, { setSubmitting }) => {
        let dataToSubmit = {
          _id: values.friendshipID,
        };
        dispatch(acceptFriend(dataToSubmit))
          .then((response) => response.payload.user)
          .catch((err) => {
            setTimeout(() => {
              setFormErrorMessage(
                "There is no data, or problems with receiving it"
              );
            }, 1000);
          });
        dispatch(fetchFriendsList())
          .then((response) => response.data)
          .catch((err) => {
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
      {(props) => (
        <Form className="button-block" onSubmit={props.handleSubmit}>
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button  className="ant-btn"  type="primary">Accept</button>
        </Form>
      )}
    </Formik>
  );
};

export default AcceptFriend;
