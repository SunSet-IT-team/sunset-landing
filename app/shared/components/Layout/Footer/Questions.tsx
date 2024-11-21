import { FC } from 'react'

const Questions: FC = () => {
	return (
		<div className='w-72'>
			<h3 className='text-xs font-akony'>Вопросы</h3>
			<ul className='flex flex-col gap-3 mt-7 '>
				<li className='font-arodora-pro text-base'>
					<a href=''>Отдел рекламы</a>
				</li>
				<li className='font-arodora-pro text-base'>
					<a href=''>Связаться по вопросам сотрудничества</a>
				</li>
			</ul>
		</div>
	)
}

export default Questions
