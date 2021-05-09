import { Col, Row, } from 'antd'
import { Tweet, } from '../../../domain/dto/Tweet'
import { CardDrawer, } from '../cardDrawer'
import { TweetCard, } from '../tweet'

export interface ITwitterTimelineProps {
  tweets: Tweet[],
  nick: string,
  title: string
}

const TwitterTimelineCard: React.FC<ITwitterTimelineProps> = (props: ITwitterTimelineProps): React.ReactElement => {
  return (
    <CardDrawer className='mv-4' title={props.title}>
      <Row>
        <Col span={24}>
          { props.tweets.map(tweet => <TweetCard key={Math.random()} tweet={tweet} />) }
        </Col>
        <Col span={24}>
          <a href={`https://twitter.com/${props.nick}`} target="_blank">Go to account</a>
        </Col>
      </Row>
    </CardDrawer>
  )
}

export default TwitterTimelineCard