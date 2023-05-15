import React, { Children, useEffect, useState } from "react";

import "./Card.scss";

function Card({children, className}) {

    return <div className={`parc-card h-100 ${className}`}>{children}</div>
}

export default Card;