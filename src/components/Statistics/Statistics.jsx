import s from './Statistics.module.css'

const StatisticComponent = ({ label, percentage }) => {
    return (
        <li className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </li>
    )
}

const Statistics = ({title, stats}) => {
   return (
     <section className={s.statistics}>
       {title && 
         <h2 className={s.title}>{title}</h2>
       }

  <ul className={s.stat_list}>


    {stats.map(stat => (
          <StatisticComponent
          label={stat.label}
          percentage={<><br />{stat.percentage}</>}
          key = {stat.id}
          />
        ))}
  </ul>
</section>
    );
  };



export default Statistics