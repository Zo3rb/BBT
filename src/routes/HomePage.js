import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';

const HomePage = () => {
    return (
        <Fragment>
            <Row align="middle" justify="space-around" style={{ padding: "20px 0" }}>
                <Col span={6}>
                    <Link to="task1">
                        <Button type="primary">Task One</Button>
                    </Link>
                </Col>
            </Row>

            <Row align="middle" justify="space-around">
                <Col span={6}>
                    <Link to="task2">
                        <Button type="primary">Task Two</Button>
                    </Link>
                </Col>
            </Row>
        </Fragment>
    );
}

export default HomePage;
