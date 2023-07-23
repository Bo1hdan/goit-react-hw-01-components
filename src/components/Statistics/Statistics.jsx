import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

export const  Statistics = ({stats})=>{
    return(

<section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

    <ul className={css.statList}>
        {stats.map(({id,label,percentage}) =>(
              <li key={id} className={css.item}>
                           <span className={css.label}>{label}</span>Name
                           <span className={css.percentage}>{percentage}</span>
             </li>
        ))}
        
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title : PropTypes.string,
    stats : PropTypes.array.isRequired,
    
  };


