
import {QuotationMarks} from './assets/images/'

function Card({phrase}){
    return(
    <div className='card' >
    <div className="card__body">

       <q className='phrase'>{phrase.phrase}</q>
          
        <cite className='author'>- <b>{phrase.author}</b></cite>
        <img src={QuotationMarks} alt="Quotation Marks" className='QuotationImg'/>
    </div>
         
     </div>
    )
}

export default Card