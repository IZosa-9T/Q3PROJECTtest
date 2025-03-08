function Personal (a, b) {
						var a = document.getElementById('fullname').value;
						window.alert ('We have accepted your submission, ' +  a + '!')
					}

					function mouseOver(){
						forprice.style.background = "#38394D";
						forprice.style.color = "ghostwhite"

					}

					function mouseOut(){
						forprice.style.background = "#6D6E7A"
						forprice.style.color = "ghostwhite"
					}

					function mouseOver2(){
						forrefresh.style.background = "#38394D";
						forrefresh.style.color = "ghostwhite"

					}

					function mouseOut2(){
						forrefresh.style.background = "#6D6E7A"
						forrefresh.style.color = "ghostwhite"
					}

					function mouseOver3(){
						forbuy.style.background = "#38394D";
						forbuy.style.color = "ghostwhite"

					}

					function mouseOut3(){
						forbuy.style.background = "#6D6E7A"
						forbuy.style.color = "ghostwhite"
					}

					function refreshPage() {
					    location.reload();
					}

					// onchange js event
					document.getElementById("fullname").onchange = function() {ChangeToCapital()}
					function ChangeToCapital() {
						var fname = document.getElementById("fullname");
						fname.value = fname.value.toUpperCase();
					}

					function Price() {
						var f = document.getElementById("from").value;
						var t = document.getElementById("to").value;
						var d = document.getElementById("option").value;

						if (f === "Roosevelt") {Km1 = 20.7;}
						if (f === "Balintawak") {Km1 = 19;}
						if (f === "Monumento") {Km1 = 18;}
						if (f === "5th Avenue") {Km1 = 17.7;}
						if (f === "R. Papa") {Km1 = 16.4;}
						if (f === "Abad Santos") {Km1 = 15;}
						if (f === "5th Avenue") {Km1 = 14.1;}
						if (f === "Blumentritt") {Km1 = 12.9;}
						if (f === "Tayuman") {Km1 = 12;}
						if (f === "Bambang") {Km1 = 11.4;}
						if (f === "Doroteo Jose") {Km1 = 10.4;}
						if (f === "Carriedo") {Km1 = 9;}
						if (f === "Central Terminal") {Km1 = 8;}
						if (f === "United Nations") {Km1 = 7;}
						if (f === "Pedro Gil") {Km1 = 5.8;}
						if (f === "Quirino") {Km1 = 4.6;}
						if (f === "Vito Cruz") {Km1 = 3;}
						if (f === "Libertad") {Km1 = 1.7;}
						if (f === "EDSA") {Km1 = 0.9;}
						if (f === "Baclaran") {Km1 = 0;}

						if (t === "Roosevelt") {Km2 = 20.7;}
						if (t === "Balintawak") {Km2 = 19;}
						if (t === "Monumento") {Km2 = 18;}
						if (t === "5th Avenue") {Km2 = 17.7;}
						if (t === "R. Papa") {Km2 = 16.4;}
						if (t === "Abad Santos") {Km2 = 15;}
						if (t === "5th Avenue") {Km2 = 14.1;}
						if (t === "Blumentritt") {Km2 = 12.9;}
						if (t === "Tayuman") {Km2 = 12;}
						if (t === "Bambang") {Km2 = 11.4;}
						if (t === "Doroteo Jose") {Km2 = 10.4;}
						if (t === "Carriedo") {Km2 = 9;}
						if (t === "Central Terminal") {Km2 = 8;}
						if (t === "United Nations") {Km2 = 7;}
						if (t === "Pedro Gil") {Km2 = 5.8;}
						if (t === "Quirino") {Km2 = 4.6;}
						if (t === "Vito Cruz") {Km2 = 3;}
						if (t === "Libertad") {Km2 = 1.7;}
						if (t === "EDSA") {Km2 = 0.9;}
						if (t === "Baclaran") {Km2 = 0;}
					

						if (d === "None") {Discount = 1;}
						if (d === "Student") {Discount = 0.8;}
						if (d === "Patron") {Discount = 0.7;}

						var ans = Math.abs(Km1-Km2) * 3 * Discount
						var r_ans =ans.toFixed(2)
						document.getElementById('price').innerHTML=r_ans + ' Pesos' 	

					}

					function Buy() {
						window.alert('Your ticket has been sent to your email!')
					}

