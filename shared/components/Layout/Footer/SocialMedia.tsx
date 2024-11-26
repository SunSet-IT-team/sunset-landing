import { FC } from 'react'
import { FaInstagram, FaTelegramPlane, FaVk, FaYoutube } from 'react-icons/fa'

const data = [
	{
		id: 1,
		icon: <FaTelegramPlane size={38} />,
		src: '',
	},
	{
		id: 2,
		icon: <FaYoutube size={38} />,
		src: '',
	},
	{
		id: 3,
		icon: <FaInstagram size={38} />,
		src: '',
	},
	{
		id: 4,
		icon: <FaVk size={38} />,
		src: '',
	},
]

const SocialMedia: FC = () => {
	return (
		<ul className='flex gap-5 mt-auto justify-center'>
			{data.map(item => {
				return (
					<li key={'social' + item.id}>
						<a href={item.src}>{item.icon}</a>
					</li>
				)
			})}
		</ul>
	)
}

export default SocialMedia
