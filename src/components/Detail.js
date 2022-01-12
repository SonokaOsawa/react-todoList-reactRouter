import React from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router";

const Detail = (props) => {
    const { index } = useParams()
    const index = Number(index)
    props.todo.filter(todo)
} 