import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FormButton} from "../../components/form-button/form-button";
import {FormRadio} from "../../components/form-radio/form-radio";
import Notification from "../../components/notification/notification";
import useFormInputValue from "../../hooks/use-form-input-value/use-form-input-value";
import {useSettings} from "../../hooks/use-settings/use-settings";
import "../../styles/utilities/margin.css";
import {GiphyRating} from "../../types/giphy-api/giphy-rating";

export default function  Settings() {
  const [ settings, setSettings ] = useSettings();
  const [ isSaved, setIsSaved ] = useState(false);
  const rating = useFormInputValue(settings.rating);

  function saveRating(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSettings({
      rating: rating.value as GiphyRating,
    });

    setIsSaved(true);
  }

  if (isSaved) {
    return (
      <Notification type="success">
        Your settings have been saved.<br />
        <br />
        <Link to="/">Go back to the image search</Link>
      </Notification>
    );
  }

  return (
    <>
      <h2 className="u-mt--none u-mb--large">Settings</h2>
      <form onSubmit={saveRating}>
        <div className="u-mb--large">
          <FormRadio label="Kid friendly" formInputValue={rating} value="g" />
          <FormRadio label="The worst of the internet" formInputValue={rating} value="r" />
        </div>

        <FormButton type="submit" disabled={rating.value === settings.rating}>
          Save
        </FormButton>
      </form>
    </>
  );
}
