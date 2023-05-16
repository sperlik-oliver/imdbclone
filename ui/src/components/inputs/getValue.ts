import React from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export default (event: ChangeEvent) => event.target.value