import React from 'react'
import { Avatar, Col, Divider, List, Row, } from 'antd'
import { UserOutlined, } from '@ant-design/icons'
import Link from 'next/link'
import Title from 'antd/lib/typography/Title'
import { AppFooter } from '../components/shared/footer'

const users = [
  { name: 'Jon Doe', desc: 'Click over the name to view a simple portfolio user experience', },
  { name: 'Jane Doe', desc: 'Click over the name to view a simple portfolio user experience', },
]

const Index: React.FC = (): React.ReactElement => {
  return (
    <div>
      <Row>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Row>
            <Col span={24} className='text-center'>
              <Title level={2}>Simple Portfolio App</Title>
            </Col>
            <Col span={24}>
              <Divider>Users</Divider>
              <List
                itemLayout='horizontal'
                dataSource={users}
                renderItem={item =>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar icon={<UserOutlined />} />}
                      title={
                        <Link href='/users/3023b84a/portfolio'>
                          <a>{item.name}</a>
                        </Link>
                      }
                      description={item.desc}
                    />
                  </List.Item>
                }
              />
            </Col>
          </Row>
          <Row>
            <AppFooter />
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Index