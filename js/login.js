function show_login()
{
	frames['main'].location.href = '../login/login.html';
}

function show_front()
{
	frames['main'].location.href = '../front/main.html';
}

function show_back()
{
	frames['main'].location.href = '../back/main.html';
}

function login(obj)
{
	if (obj.username == 'yangjie' && obj.password == '123456')
	{
		parent.show_front();
		return true;
	}
	else if (obj.username == 'yangjie-jack' && obj.password == '12345678')
	{
		parent.show_back();
		return true;
	}
	
	parent.show_login();
	return false;
}