import { Alert, AlertProps, } from 'antd'

export interface IErrorNotifProps extends AlertProps {
  comments?: string
}

const ErrorNotifCard: React.FC<IErrorNotifProps> = (props: IErrorNotifProps) => {
  return (
    <>
      <Alert message={props.message} type={props.type} description={props.comments} />
    </>
  )
}

export default ErrorNotifCard