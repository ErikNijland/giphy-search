import React from "react";
import { useHistory } from "react-router-dom";
import useFormInputValue from "../../hooks/use-form-input-value/use-form-input-value";
import useSearchParam from "../../hooks/use-search-param/use-search-param";
import {FormButton} from "../form-button/form-button";
import {FormInput} from "../form-input/form-input";
import "./search-form.css";

export default function SearchForm() {
  const query = useFormInputValue(useSearchParam("query") || "");
  const history = useHistory();

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    history.push(`?query=${query.value}`);
  }

  return (
    <form className="SearchForm" onSubmit={search}>
      <div className="SearchForm__Input">
        <FormInput
          autofocus={true}
          label="Search Giphy images"
          formInputValue={query}
        />
      </div>

      <div className="SearchForm__Submit">
        <FormButton type="submit">Search</FormButton>
      </div>
    </form>
  );
}
