import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../style'
const Tech = () => {
  return (
    <div>
      <h2 className={styles.sectionHeadText}>Technologies</h2>
      <br />
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28'
            key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')