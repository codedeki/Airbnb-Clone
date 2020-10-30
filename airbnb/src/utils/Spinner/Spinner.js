import React from 'react';
import './Spinner.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faSpinner);

function Spinner(props) {
  return(
    <div className={props.class}>
      <FontAwesomeIcon icon={props.icon} size={props.size} spin/>
    </div>
  )
}

export default Spinner;