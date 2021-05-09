import { Row, Col, } from 'antd'
import Title from 'antd/lib/typography/Title'
import { Tweet, TweetUserMention, } from '../../../domain/dto/Tweet'

export interface ITwitterProps {
  tweet: Tweet
}

const getUserMention = (tweet: Tweet): TweetUserMention => {
  return (tweet.entities?.user_mentions[0] || { screen_name: tweet.user, name: tweet.user.name, }) as TweetUserMention
}

const TweetCard: React.FC<ITwitterProps> = (props: ITwitterProps): React.ReactElement => {
  const userMention = getUserMention(props.tweet)

  return (
    <div className='mb-8'>
      <Row>
        <Col>
          <Title level={5}>@{userMention.name}</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='m-0'>
            {props.tweet.text}
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default TweetCard