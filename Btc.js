import { useState } from "react";
import axios from "axios";

function Btc ()
{
	const [currency,setCurrency] = useState("usd");
	const [ans, setAns] = useState("");

	const hCurrency = (event) => { setCurrency(event.target.value); }

	const gr = (event) => {
		event.preventDefault();
		let urladd = "https://api.coindesk.com/v1/bpi/currentprice.json";
		axios.get(urladd)
		.then(res => {
			if (currency == "usd")
				setAns(res.data.bpi.USD.rate)
			else if (currency == "gbp")
				setAns(res.data.bpi.GBP.rate)
			else if (currency == "eur")
				setAns(res.data.bpi.EUR.rate)
		})
		.catch(err => setAns(err));
		}
return(
<>
<center>
<h1> Bitcoin App</h1>
<form onSubmit={ gr }>
	<label class="custom-radio">
	<input type="radio" name="c" value="usd" defaultChecked={true}
	onChange={hCurrency} />USD
	<br/>
	<input type="radio" name="c" value="gbp" 
	onChange={hCurrency} />GBP
	<br/>
	<input type="radio" name="c" value="eur" 
	onChange={hCurrency} />EUR
	</label>
	<br/><br/>
	<input type="submit"/>
</form>
<h1> { ans } </h1>
</center>
</>
);
}
export default Btc;