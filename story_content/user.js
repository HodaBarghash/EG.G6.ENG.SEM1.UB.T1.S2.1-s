function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mNcmNfbghb":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v27q1attempts:player.GetVar("v27q1attempts"),v27q1answeredcorrect:player.GetVar("v27q1answeredcorrect"),v27q2attempts:player.GetVar("v27q2attempts"),v27q2answeredcorrect:player.GetVar("v27q2answeredcorrect"),v27q3attempts:player.GetVar("v27q3attempts"),v27q3answeredcorrect:player.GetVar("v27q3answeredcorrect")})
	}
	)
}

