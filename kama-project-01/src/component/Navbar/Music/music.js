import React, { Component} from 'react';
import style from './music.module.css';

export default class Music extends Component {
	render(){
		return (
			<>
			<form className={style.form_music}>
						<fieldset className={style.form_music_fieldset}>
							<legend> Расчет заработной платы</legend>
							<div>
								<label htmlFor='totalDay'>Всего рабочих дней в расчетном месяце: </label> 
								<input id='totalDay' type="text" value=''/>
							</div>
							<div>
								<label htmlFor='currentDay'>Кол-во отработанных дней в расчетном месяце: </label> 
								<input id='currentDay' type="text" value=''/>
							</div>
														
							<div> Выберите коэффициент:
								<div>
										<label><input name='koef' type="radio" value='0.8'/> 0.8 </label>
										<label><input name='koef' type="radio" value='1' />  1 </label>
										<label><input name='koef' type="radio" value='1.2' />  1.2 </label>
								</div>
							</div>

							<div>
								Доставки ИМ без примерки: 
								<p className={style.line_dostavki}>
									<input type="text" value='70' disabled/>
									<label><input type="text" value=' '/> </label>
								</p>
							</div>

							<div>
								Доставки ИМ с примеркой: 
								<p className={style.line_dostavki}>
									<input type="text" value='90' disabled/>
									<label><input type="text" value=' '/> </label>
								</p>
							</div>

							<div>
								Доставка почты(B2B):  
								<p className={style.line_dostavki}>
									<input type="text" value='47' disabled/>
									<label><input type="text" value=' '/> </label>
								</p>
							</div>

							<div>
							Заказы: 
								<p className={style.line_dostavki}>
									<input type="text" value='47' disabled/>
									<label><input type="text" value=' '/> </label>
								</p>
							</div>

<div className={style.btnList}>
	<input type="button" value="Сбросить все поля" className={ style.resetBtn}/>
	<input type="button" value="Рассчитать заработную плату" className={style.completeBtn}/>
</div>

						</fieldset>
					</form>

					<form className={style.form_totalCount} name='form_totalCount'>
						<fieldset className={style.form_totalCount_fieldset}>
							<legend> Итоги расчетов: </legend>
							<div>
								<label htmlFor='okladDay'>Оклад/день: </label> 
								<input id='okladDay' type="text" value='' disabled/>
							</div>
							<div>
								<label htmlFor='okladMonth'>Оклад/месяц: </label> 
								<input id='okladMonth' type="text" value='' disabled/>
							</div>
							<div>
								<label htmlFor='premiya50'>Премия 50% от оклада: </label> 
								<input id='premiya50' type="text" value='' disabled/>
							</div>
							<div>
								<label htmlFor='rentCar'>Аренда авто: </label> 
								<input id='rentCar' type="text" value='' disabled/>
							</div>
							<div>
								<label htmlFor='totalCount'>Всего начислено: </label> 
								<input id='totalCount' type="text" value='' disabled/>
							</div>
							<div>
								<label htmlFor='nalog'>13%: </label> 
								<input id='nalog' type="text" value='' disabled/>
							</div>
							<div>
								<label htmlFor='totalClear'>Сумма "на руки": </label> 
								<input id='totalClear' type="text" value='' disabled/>
							</div>

					</fieldset>
			</form>
			
			</>
		)
	}
} 

