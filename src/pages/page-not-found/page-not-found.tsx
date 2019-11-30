import React from "react";
import {Link} from "react-router-dom";
import Notification from '../../components/notification/notification';

export default function PageNotFound() {
  return (
    <Notification type="error">
      Page not found<br />
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Notification>
  );
}
