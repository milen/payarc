import React, { Children, useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./Card.scss";

function Card({children, className, id}) {

    return <div id={id && `${id}`} className={className ? `card h-100 ${className}` : 'card h-100'}>{children}</div>
}

export default Card;