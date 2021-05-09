import React, { ReactNode, } from 'react'
import { CardDrawer } from '../cardDrawer'

export interface IWorkExperienceCard {
  title: string,
  children?: ReactNode | ReactNode[],
}

const WorkExperienceCard: React.FC<IWorkExperienceCard> = (props: IWorkExperienceCard): React.ReactElement => {
  return (
    <CardDrawer title={props.title}>
      {props.children}
    </CardDrawer>
  )
}

export default WorkExperienceCard