import React, {useState} from 'react';
import cn from 'classnames';

import styles from './paginator.module.css';

type PropsType = {
	totalItemsCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	portionSize?: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount,pageSize,currentPage,onPageChanged,portionSize=10}) => {
	let pageCount: number = Math.ceil(totalItemsCount / pageSize);
	let total:Array<number> = [];
	for(let i=1;i<= pageCount; i++){
		total.push(i)
	}

	let portionCount: number = Math.ceil(pageCount/portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber: number = (portionNumber-1)*portionSize+1;
	let rightPortionPageNumber: number = portionNumber*portionSize;


return(
		<div className={cn(styles.pages)}>

{portionNumber>1 && <button className = {cn(styles.button)}
														onClick={()=> {setPortionNumber(portionNumber-1) }}>PREV</button> }

		{
			total
			.filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)			
			.map( (p,index) =>	<span 
															key={index} 
															className={ cn({[styles.selectedPage]: currentPage === p }, styles.page) }
															onClick = { (e)=> onPageChanged(p)}> 
															{p} 
													</span> )
		}

		{ portionCount > portionNumber && 
			<button className = {cn(styles.button)} 
							onClick = {()=> {setPortionNumber(portionNumber+1)  }}>NEXT</button> }
	</div>
)}

export default Paginator;

