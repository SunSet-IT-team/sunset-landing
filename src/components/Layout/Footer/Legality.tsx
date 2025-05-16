import { FC } from 'react'

const data = [
	{
		id: 1,
		text: 'Правила пользования платформой',
		src: '',
	},
	{
		id: 2,
		text: 'Политика конфиденциальности',
		src: '',
	},
	{
		id: 3,
		text: 'Все права защищены',
		src: '',
	},
]

const Legality: FC = () => {
	return (
		<ul className='flex flex-col gap-1 font-arodora-pro ml-auto w-56'>
			{data.map(item => {
				return (
					<li key={item.text + item.id}>
						<a href={item.src}>{item.text}</a>
					</li>
				)
			})}
		</ul>
	)
}

export default Legality
