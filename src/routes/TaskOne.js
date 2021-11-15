import React, { Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Todo from '../components/ToDo';
import TodoForm from '../components/ToDoForm';

const TaskOne = () => {

    // Get Todos from the Store
    const todos = useSelector(state => state.todos);

    return (
        <Fragment>
            {/* Navigate to The Home Page */}
            <Row
                style={{ backgroundColor: "#c9c9c9" }}
            >
                <Col>
                    <Link to="/">
                        <Button type="primary">Back</Button>
                    </Link>
                </Col>
            </Row>
            <Row
                justify="space-between"
                style={{ backgroundColor: "#c9c9c9", padding: "30px 0px", minHeight: "calc(100vh - 32px)" }}
            >
                <Col
                    span={20}
                    offset={2}
                    style={{ background: "#fff", borderRadius: "16px", padding: "16px" }}
                >
                    {/* Iterate The Todos Here */}
                    {todos.map((todo, index) => {
                        return <Todo todo={todo} key={index} />
                    })}
                    {/* The Modal/Form Section */}
                    <TodoForm />
                </Col>
            </Row>
        </Fragment>
    );
}

export default TaskOne;
