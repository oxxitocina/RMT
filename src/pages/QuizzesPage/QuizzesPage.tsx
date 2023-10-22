import classNames from "classnames"
import cls from './QuizzesPage.module.css'
import CheckIcon from '@/assets/svg/check.svg?react'
import { IconButton } from "@/common/IconButton/IconButton"
import {useState} from 'react'
import { AnswersList } from "./Components/AnswersList/AnswersList"

interface QuizzesPageProps {
    className?: string
}

export const QuizzesPage = ({className}: QuizzesPageProps) => {
    const [isAnswer, setIsAnswer] = useState<number | null>(null)
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const arr2 = [0, 1, 2, 3]

    const handleClick = (id: number) => {
        setIsAnswer(id)
    }

  return (
    <div className={classNames(cls.quizzes_page, {}, [className])}>
    <div className={cls.questions_wrapper}>

        {arr.map((question, index) => 
            <div className={cls.question_wrapper}>
                <div className={cls.question_count}>Question {index+1}:</div>
                <div className={cls.question}>which hero is the strongest in dota?</div>
                <AnswersList/>
            </div>
        )}
    </div>
    </div>
  )
}


