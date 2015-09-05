function updateTimer() {
					  future  = Date.parse("March 14, 2016 10:00:00");
					  now     = new Date();
					  diff    = future - now;

					  days  = Math.floor( diff / (1000*60*60*24) );
					  hours = Math.floor( diff / (1000*60*60) );
					  mins  = Math.floor( diff / (1000*60) );
					  secs  = Math.floor( diff / 1000 );

					  d = days;
					  h = hours - days  * 24;
					  m = mins  - hours * 60;
					  s = secs  - mins  * 60;

					  document.getElementById("timer")
						.innerHTML =
						  '<div class="fstimewrap" >' + d + '<span class="fs">days</span></div>' +
						  '<div class="fstimewrap">' + h + '<span class="fs">hours</span></div>' +
						  '<div class="fstimewrap">' + m + '<span class="fs">min</span></div>' +
						  '<div class="fstimewrap">' + s + '<span class="fs">sec</span></div>' ;
					}
					setInterval('updateTimer()', 1000 );