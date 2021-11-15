import React, { useState } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import { DeleteFilled, EditFilled, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/todos';

const TodoForm = () => {

    // Getting an Instance of The Dispatch Hook from React-Redux Pack
    const dispatch = useDispatch();

    // Component Scope State
    const [todoData, setTodoData] = useState({
        id: '',
        name: "",
        completed: false, // Default -> Could be changed from the Modal
        created: new Date()
    });
    const onInputChange = e => setTodoData({ ...todoData, [e.target.name]: e.target.value });
    const onInputSubmit = () => {
        setTodoData({ ...todoData, created: new Date(), id: uuidv4() });
        dispatch(addTodo(todoData));
        // Reset States
        setTodoData({
            id: '',
            name: "",
            completed: false, // Default -> Could be changed from the Modal
            created: new Date()
        })
        handleOk();
    }

    // Modal Triggers
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        // Reset States
        setTodoData({
            id: '',
            name: "",
            completed: false, // Default -> Could be changed from the Modal
            created: new Date()
        })
        setIsModalVisible(false);
    };

    return (
        <Row
            align="bottom"
            justify="space-between"
        >
            <Col span={24} style={{ textAlign: "center" }}>
                <Button
                    style={{
                        background: "#52c41a",
                        border: "none",
                        color: "#fff",
                        height: "45px",
                        width: "45px",
                        lineHeight: "100%",
                        fontSize: "22.5px"
                    }}
                    shape="circle"
                    onClick={showModal}
                >
                    +
                </Button>
                {/* Modal Body */}
                <Modal
                    visible={isModalVisible}
                    onOk={handleOk}
                    centered
                    onCancel={handleCancel}
                    footer={null}
                    closable={false}
                >
                    <Row
                        align="middle"
                        justify="space-between"
                    >
                        <Col span={16}>
                            <input
                                type="text"
                                name="name"
                                value={todoData.name}
                                onChange={onInputChange}
                                placeholder="Please Add The Todo's Name Here"
                                style={{ width: "100%" }}
                            />
                        </Col>
                        <Col span={8} style={{ textAlign: "right" }}>
                            <Button
                                shape="circle"
                                icon={<DeleteFilled />}
                                style={{ backgroundColor: "red", color: "#fff", marginRight: "2px", border: "none" }}
                                onClick={handleCancel}
                            />
                            <Button
                                shape="circle"
                                icon={<EditFilled />}
                                style={{ backgroundColor: "blue", color: "#fff", marginRight: "2px", border: "none" }}
                                onClick={onInputSubmit}
                            />
                            <Button
                                shape="circle"
                                icon={<CloseCircleFilled />}
                                style={{ backgroundColor: "red", color: "#fff", marginRight: "2px", border: "none" }}
                                onClick={() => setTodoData({ ...todoData, completed: false })}
                                disabled={!todoData.completed}
                            />
                            <Button
                                shape="circle"
                                icon={<CheckCircleFilled />}
                                style={{ backgroundColor: "green", color: "#fff", marginRight: "2px", border: "none" }}
                                onClick={() => setTodoData({ ...todoData, completed: true })}
                                disabled={todoData.completed}
                            />
                        </Col>
                    </Row>
                </Modal>
            </Col>
        </Row>
    );
}

export default TodoForm;
