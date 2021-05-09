import React from 'react'
import { Col, Row, } from 'antd'

const AppFooter: React.FC = (): React.ReactElement => {
  return (
    <Row className='mt-24'>
      <Col span={24}>
        Created by <a href='https://linkedin.com/in/sneydernavia'>Sneyder Navia</a>
      </Col>
      <Col span={24}>
        &copy; All rights reserved
      </Col>
    </Row>
  )
}

export default AppFooter