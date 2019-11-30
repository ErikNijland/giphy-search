import React from "react";
import {Link} from "react-router-dom";
import useSearchParam from "../../hooks/use-search-param/use-search-param";
import "./pager.css";

interface IProps {
  currentPage: number;
  numberOfPages: number;
}

export default function Pager(props: IProps) {
  const query = useSearchParam("query");

  return (
    <>
      {props.numberOfPages > 1 && (
        <nav className="Pager">
          {props.currentPage > 1 &&
            <Link className="Pager__Link" to={`?query=${query}&page${props.currentPage - 1}`}>Previous</Link>
          }

          {props.currentPage < props.numberOfPages &&
            <Link className="Pager__Link" to={`?query=${query}&page=${props.currentPage + 1}`}>Next</Link>
          }
        </nav>
      )}
    </>
  );
}
