import * as React from "react";

function PrevButton(props) {
  let prevButton;

  function selectPrev() {
    props.onHandleNav();
  }

  function PrevAvailable(array) {
    if (array.length <= 1) {
      return false;
    } else {
      return true;
    }
  }

  if (PrevAvailable(props.filteredErrorArray)) {
    prevButton = (
      <button onClick={selectPrev} className="button button--previous">
        ← Previous
      </button>
    );
  } else {
    prevButton = (
      <button
        onClick={selectPrev}
        disabled
        className="button button--disabled button--next"
      >
        ← Previous
      </button>
    );
  }

  return <React.Fragment>{prevButton}</React.Fragment>;
}

export default PrevButton;
