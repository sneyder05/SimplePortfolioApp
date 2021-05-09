import React, { ReactNode, } from 'react'
import Title from 'antd/lib/typography/Title'
import { Col, Divider, Row, } from 'antd'

export interface ICardDrawerProps {
  title: string,
  children?: ReactNode | ReactNode[],
  className?: string
}

const CardDrawer: React.FC<ICardDrawerProps> = (props: ICardDrawerProps): React.ReactElement => {
  return (
    <div className={`card-drawer ${props.className}`}>
      <div className='wrapper'>
        <Row>
          <Col span={24}>
            <Title className='title' level={4}>{props.title}</Title>
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col span={24} className='content'>
            {props.children}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CardDrawer