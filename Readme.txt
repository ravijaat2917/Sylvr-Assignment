Tool used : MONGODB ,EXPRESSJS , REACTJS ,NODEJS

to run in local host
1. download dependicies for backend and frontend part with command npm i.
2. run command npm run dev to run application.

Api's
1.User Registeration : {
    url:{ 'localhost://8080/user/register },
    body:{
        firstName , lastName , email , password
    }
}

2. User Login : {
    url:{ 'localhost://8080/user/register },
    body:{
        email , password 
    },
    response : {token},
}