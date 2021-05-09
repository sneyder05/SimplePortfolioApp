import React from 'react'
import { useRouter, } from 'next/router'
import { useGetUser, } from '../../../hooks/usetGetUser'
import { useGetUserTimeline, } from '../../../hooks/useGetUserTImeline'
import { Col, Image, Row, Spin, } from 'antd'
import { WorkExperienceCard, } from '../../../components/shared/workExperience'
import { TwitterTimelineCard, } from '../../../components/shared/twitterTimeline'
import Title from 'antd/lib/typography/Title'
import { ErrorNotifCard, } from '../../../components/shared/errorNotif'
import { AppFooter, } from '../../../components/shared/footer'

const UserPage: React.FC = (): React.ReactElement => {
  const router = useRouter()
  const { id, } = router.query
  const userId = id as string

  const { getUser, isLoading: isUserLoading, error: userError, isSuccess: isUserSuccess, user, } = useGetUser()
  const { getUserTimeline, isLoading: isTimelineLoading, error: timelineError, isSuccess: isTimelineSuccess, tweets, } = useGetUserTimeline()

  React.useEffect(() => {
    if (userId) {
      getUser(userId)
    }
  }, [ getUser, userId, ])

  React.useEffect(() => {
    if (userId) {
      getUserTimeline(userId, 5)
    }
  }, [ getUserTimeline, userId, ])

  return (
    <>
      <Row className="p-16">
        <Col xl={{ span: 12, offset: 6, }}>
          <Row gutter={[ 8, 8, ]}>
            <Col span={8}>
              <Row className="mb-8 text-center">
                <Col span={24}>
                  {
                    !isUserLoading && isUserSuccess &&
                    <Image src={user.image} fallback='/images/default.png' preview={false} />
                  }
                  {
                    isUserLoading && <Spin tip='Getting image...' size="large" />
                  }
                </Col>
              </Row>
              <Row>
                <Col>
                  {
                    isTimelineLoading && <Spin tip='Getting timeline...' size="large" />
                  }
                  {
                    !isTimelineLoading && isTimelineSuccess &&
                    <TwitterTimelineCard nick={user.twitterUserName} title={`${user.fullname}'s Timeline`} tweets={tweets} />
                  }
                  {
                    !isTimelineLoading && !isTimelineSuccess && timelineError && <ErrorNotifCard message={timelineError} />
                  }
                </Col>
              </Row>
            </Col>
            <Col span={16}>
              {
                isUserLoading && <Spin tip='Getting work experience...' size="large" />
              }
              {
                !isUserLoading && isUserSuccess &&
                <Row>
                  <Col span={24}>
                    <Title level={2}>{user.fullname}</Title>
                  </Col>
                  <Col span={24}>
                    <WorkExperienceCard title="My Work Experience">
                      {user.description}
                    </WorkExperienceCard>
                  </Col>
                </Row>
              }
              {
                !isUserLoading && !isUserSuccess && userError && <ErrorNotifCard message={userError} />
              }
            </Col>
          </Row>
          <AppFooter />
        </Col>
      </Row>
    </>
  )
}

export default UserPage