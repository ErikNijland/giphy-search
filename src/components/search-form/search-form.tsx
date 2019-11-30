import React from "react";
import { useHistory } from "react-router-dom";
import useFormInput from "../../hooks/use-form-input/use-form-input";
import useSearchParam from "../../hooks/use-search-param/use-search-param";

export default function SearchForm() {
  const inputQuery = useFormInput(useSearchParam("query") || "");
  const history = useHistory();

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    history.push(`?query=${inputQuery.value}`);
  }

  return (
    <div>
      <form onSubmit={search}>
        <label>
          Search query
          <input {...inputQuery} autoFocus={true} />
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
