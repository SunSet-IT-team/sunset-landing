import Image from 'next/image'
import { FC } from 'react'
const TechWorks: FC = () => {
	return <div className='flex flex-col px-20 '>
		<div className="flex ">
			<p className='font-arodora-pro w-48 my-auto -mr-48'>Прямо сейчас ведутся технические работы. Просим вас немного подождать и мы станем ещё лучше!</p>
		<Image alt='Каска' src={'/tech_works/helmet.png'} width={626} height={626} className='mx-auto '/>
		</div>
		<h1 className='text-8xl -mt-40'>Тех.<br />работы</h1>
	</div>
}

export default TechWorks