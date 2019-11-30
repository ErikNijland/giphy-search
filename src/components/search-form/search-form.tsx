import React from "react";
import { useHistory } from "react-router-dom";
import useFormInputValue from "../../hooks/use-form-input-value/use-form-input-value";
import useSearchParam from "../../hooks/use-search-param/use-search-param";
import {FormInput} from "../form-input/form-input";

export default function SearchForm() {
  const query = useFormInputValue(useSearchParam("query") || "");
  const history = useHistory();

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    history.push(`?query=${query.value}`);
  }

  return (
    <div>
      <form onSubmit={search}>
        <FormInput
          autofocus={true}
          label="Search query"
          formInputValue={query}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
