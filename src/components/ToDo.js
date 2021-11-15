import React from 'react';
import { Row, Col, Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { removeTodo } from '../redux/features/todos';
import formatDate from '../utils/format-date';

const Todo = props => {

    // Getting an Instance of The Dispatch Hook from React-Redux Pack
    const dispatch = useDispatch();

    // Destructure The Props
    const { todo } = props;
    const { name, completed, created, id } = todo;

    return (
        <Row
            align="middle"
            justify="space-between"
            style={{ backgroundColor: `${completed ? "#52c41a" : "red"}`, padding: "5px 0px", borderRadius: "16px", marginBottom: "15px" }}
        >
            <Col span={20} style={{ paddingLeft: "30px" }}>
                <h6 style={{ color: '#c9c9c9', marginTop: "5px" }}>{formatDate(created)}</h6>
                <p style={{ color: '#fff' }}>{name}</p>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
                <Button
                    shape="circle"
                    icon={<DeleteFilled />}
                    style={{ backgroundColor: "fff", color: '#f00' }}
                    onClick={() => dispatch(removeTodo(id))}
                />
            </Col>
        </Row>
    );
}

export default Todo;
