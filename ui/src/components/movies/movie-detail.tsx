import React from "react";

type Props = {
    detail: string
    title?: string
}

const MovieDetail = ({ title, detail }: Props) => 
    title ? <span>{title}: {detail}</span> : <span>{detail}</span>


export default MovieDetail