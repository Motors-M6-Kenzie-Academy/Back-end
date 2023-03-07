<h1 align="center">
Motors shop - API
</h1>

<p>
Esta é a API do e-commerce Motors shop, pensada em conectar o usuário que quer vender o seu carro ou a sua moto ao usuário que deseja adquirir.
É possível realizar o cadastro, leitura e atualização de usuários, o CRUD dos anúncios e fazer o login.
</p>

<p>
Para configurar o servidor, primeiro faça um cópia do arquivo .env.example, preencha com os dados do seu usuário e renomeie para .env
</p>

<h3>Instruções</h3>
<p>
Para rodar o servidor em sua máquina, basta dar os seguintes comandos:
</p>

<strong>yarn install</strong>

<strong>yarn build</strong>

<strong>yarn typeorm migration:run -d src/data-source.ts</strong>

<strong>yarn dev</strong>

<h3>Link deploy</h3>
<p>A URL base da API é </p>

<h2 align ='center'> Rotas </h2>
<h3 align = "center" id="users">Users</h3>
<h4 align = "center">Criação de user</h4>

`POST /user - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Natalia",
  "email": "usuario@gmail.com",
  "phoneNumber": "+55(11)91234-1234",
  "cpf": "000.000.000-00",
  "password": "Usuario1*",
  "birthDate": "07/04/1997",
  "accountType": "Anunciante",
  "roadName": "Rua tal tal",
  "houseNumber": 301,
  "city": "São Paulo",
  "complement": "complemento tal",
  "zipCode": "60873-905",
  "state": "SP",
  "description": "texto de descrição"
}
```

Caso o cadastro seja realizado de forma correta, a resposta será assim:

`POST /user - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"user": {
		"name": "Natalia",
		"email": "usuario@gmail.com",
		"phoneNumber": "+55(11)91234-1234",
		"birthDate": "07/04/1997",
		"accountType": "Anunciante",
		"description": "texto de descrição",
		"cpf": "000.000.000-00",
		"id": "a0a835a4-f077-4002-9fee-1d633b505fb0",
		"isActive": true,
		"createdAt": "2023-02-23T18:50:20.386Z",
		"updatedAt": "2023-02-23T18:50:20.386Z"
	},
	"address": {
		"roadName": "Rua tal tal",
		"houseNumber": 301,
		"complement": "complemento tal",
		"zipCode": "60873-905",
		"state": "SP",
		"city": "São Paulo",
		"id": "01e1a806-690d-47dd-a2ff-32a8ec44c923",
		"createdAt": "2023-02-23T18:50:20.408Z",
		"updatedAt": "2023-02-23T18:50:20.408Z"
	}
}
```

<h4 align = "center"> Login </h4>

`POST /signin - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "usuario@gmail.com",
  "password": "Usuario1*"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /signin - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hbmFAa2VuemllLmNvbSIsImlhdCI6MTY3NTM0Mzc4MCwiZXhwIjoxNjc3OTM1NzgwLCJzdWIiOiJiZjBlNWFiOS01OTMwLTQwMjYtYTU3OS04MGVkOTljYWRkYmIifQ.MBEBbqWr1RB8_NT78IM3Jx4uBLtbBkBx7M3RZLz1_sc"
}
```

Com esta resposta, temos uma informação importante, token, sendo que pode ser guardado no localStorage para fazer a gestão do usuário no Frontend.

<h4 align ='center'> Listar users </h4>

`GET /user - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "a0a835a4-f077-4002-9fee-1d633b505fb0",
		"name": "Natalia",
		"email": "usuario@gmail.com",
		"cpf": "000.000.000-00",
		"phoneNumber": "+55(11)91234-1234",
		"birthDate": "07/04/1997",
		"description": "texto de descrição",
		"accountType": "Anunciante",
		"isActive": true,
		"createdAt": "2023-02-23T18:50:20.386Z",
		"updatedAt": "2023-02-23T18:50:20.386Z"
	}
]
```

<h4 align ='center'> Listar user por id</h4>

`GET /user/id (id do user a ser listado) - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "a0a835a4-f077-4002-9fee-1d633b505fb0",
	"name": "Natalia",
	"email": "usuario@gmail.com",
	"cpf": "000.000.000-00",
	"phoneNumber": "+55(11)91234-1234",
	"birthDate": "07/04/1997",
	"description": "texto de descrição",
	"accountType": "Anunciante",
	"isActive": true,
	"createdAt": "2023-02-23T18:50:20.386Z",
	"updatedAt": "2023-02-23T18:50:20.386Z"
}
```

<h4 align ='center'> Listar users que são anunciantes</h4>

`GET /users/announcers - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "a0a835a4-f077-4002-9fee-1d633b505fb0",
		"name": "Natalia",
		"email": "usuario@gmail.com",
		"cpf": "000.000.000-00",
		"phoneNumber": "+55(11)91234-1234",
		"birthDate": "07/04/1997",
		"description": "texto de descrição",
		"accountType": "Anunciante",
		"isActive": true,
		"createdAt": "2023-02-23T18:50:20.386Z",
		"updatedAt": "2023-02-23T18:50:20.386Z"
	}
]
```

<h4 align ='center'> Atualizar user </h4>

`PATCH /user/id - (id do user a ser editado) FORMATO DA REQUISIÇÃO`

```json
{
	"name": "Editado"
}
```

`PATCH /user/id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "c7ad4563-e503-45c7-8c18-cd775cf08fea",
	"name": "Editado",
	"email": "usuario@gmail.com",
	"phoneNumber": "+55(11)91234-1234",
	"isActive": true,
	"isAdmin": false,
	"createdAt": "2023-02-12T21:11:03.687Z",
	"updatedAt": "2023-02-12T22:04:41.766Z"
}
```

*É possível fazer uma atualização tanto parcial, quanto total.

<h4 align ='center'> Deletar user </h4>

`DELETE /user/id - (id do user a ser deletado) - Não é necessário passar corpo na requisição!``

<h3 align = "center" id="ads">Ads</h3>
<h4 align ='center'> Criar ads </h4>

`POST /ads - FORMATO DA REQUISIÇÃO`

```json
{
	"title": "Novo anúncio",
	"description": "Descrição do novo anúncio",
	"typeVehicle": "car",
	"releaseYear": "2000",
	"mileage": "50.000 km",
	"price": "20.000",
	"cover": "",
	"gallery_image": ""
}
```

`POST /ads - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"title": "Novo anúncio",
	"description": "Descrição do novo anúncio",
	"cover": "",
	"gallery_image": "",
	"mileage": "50.000 km",
	"price": "20.000",
	"releaseYear": "2000",
	"typeVehicle": "car",
	"id": "560be034-3513-4e04-986e-8abd82022b6e",
	"typeAds": "sell",
	"createdAt": "2023-02-23T18:46:23.448Z",
	"updatedAt": "2023-02-23T18:46:23.448Z"
}
```

1. o campo - typeVehicle pode receber um dos dois tipos:

- car
- motorbike

2. o campo - typeAds pode receber um dos dois tipos:

- sell
- bid

Porém por padrão o typeAds vem como "sell".

<h4 align ='center'> Listar ads </h4>

`GET /ads - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "560be034-3513-4e04-986e-8abd82022b6e",
		"title": "Novo anúncio",
		"description": "Descrição do novo anúncio",
		"typeVehicle": "car",
		"typeAds": "sell",
		"releaseYear": "2000",
		"mileage": "50.000 km",
		"price": "20.000",
		"cover": "",
		"gallery_image": "",
		"createdAt": "2023-02-23T18:46:23.448Z",
		"updatedAt": "2023-02-23T18:46:23.448Z",
		"user": null
	}
]
```

<h4 align ='center'> Listar ad por id</h4>

`GET /ads/id (id do ad a ser listado) - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "560be034-3513-4e04-986e-8abd82022b6e",
	"title": "Novo anúncio",
	"description": "Descrição do novo anúncio",
	"typeVehicle": "car",
	"typeAds": "sell",
	"releaseYear": "2000",
	"mileage": "50.000 km",
	"price": "20.000",
	"cover": "",
	"gallery_image": "",
	"createdAt": "2023-02-23T18:46:23.448Z",
	"updatedAt": "2023-02-23T18:46:23.448Z",
	"user": null
}
```

<h4 align ='center'> Atualizar ad </h4>

`PATCH /ads/id (id da ad a ser editada) - FORMATO DA REQUISIÇÃO`

```json
{
	"title": "Novo Anúncio - Atualizado"
}
```

`PATCH /ads/id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "9852feec-9f1e-47e8-afd8-1fc2383092e8",
	"title": "Novo Anúncio - Atualizado",
	"description": "Descrição do novo anúncio",
	"typeVehicle": "car",
	"typeAds": "sell",
	"releaseYear": "2000",
	"mileage": "50.000 km",
	"price": "20.000",
	"cover": "",
	"gallery_image": "",
	"createdAt": "2023-02-23T13:35:30.357Z",
	"updatedAt": "2023-02-23T13:36:42.024Z",
	"user": null
}
```

*É possível fazer uma atualização tanto parcial, quanto total.

<h4 align ='center'> Deletar ad </h4>

`DELETE /ads/id (id da ad a ser deletada) - Não é necessário passar corpo na requisição!`

<h3 align = "center" id="comments">Comments</h3>
<h4 align ='center'> Criar comment </h4>

`POST /comments/id (id do anúncio que receberá o comentário) - FORMATO DA REQUISIÇÃO`

```json
{
	"content": "Novo comentário"
}
```

`POST /comments/id - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	{
	"content": "Novo comentário",
	"user": {
		"id": "da0967e3-c1b2-4bae-956e-30da1030d0d0",
		"name": "Usuário",
		"email": "usuario@gmail.com",
		"cpf": "002.020.000-00",
		"password": "$2b$10$SPeh1T6AdnUpwcuDtpY1r.9pOBsuxx2F8R/ubo1sooqCs43EcBLHe",
		"resetCode": "xxxxxxxx",
		"phoneNumber": "+55(99)99999-9999",
		"birthDate": "07/04/1997",
		"description": "texto de descrição",
		"accountType": "Anunciante",
		"isActive": true,
		"createdAt": "2023-02-27T14:29:43.017Z",
		"updatedAt": "2023-02-27T18:31:01.403Z"
	},
	"ad": {
		"id": "8554a18a-3909-459e-b548-e41bb37b7080",
		"title": "Novo anúncio2",
		"description": "Descrição do novo anúncio",
		"typeVehicle": "car",
		"isPublished": false,
		"typeAds": "sell",
		"releaseYear": "2000",
		"mileage": "50.000 km",
		"price": "20.000",
		"cover": "",
		"gallery_image": "",
		"createdAt": "2023-02-27T18:26:26.087Z",
		"updatedAt": "2023-02-27T18:30:35.259Z"
	},
	"id": "f3e3f5e4-26da-4eea-964b-4110a2e9c695",
	"createdAt": "2023-03-06T13:14:19.440Z"
	}
}
```


<h4 align ='center'> Listar comments </h4>

`GET /comments/id (id do anúncio que conterá os comentários) - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "f3e3f5e4-26da-4eea-964b-4110a2e9c695",
		"content": "Novo comentário",
		"createdAt": "2023-03-06T13:14:19.440Z",
		"ad": {
			"id": "8554a18a-3909-459e-b548-e41bb37b7080",
			"title": "Novo anúncio2",
			"description": "Descrição do novo anúncio",
			"typeVehicle": "car",
			"isPublished": false,
			"typeAds": "sell",
			"releaseYear": "2000",
			"mileage": "50.000 km",
			"price": "20.000",
			"cover": "",
			"gallery_image": "",
			"createdAt": "2023-02-27T18:26:26.087Z",
			"updatedAt": "2023-02-27T18:30:35.259Z"
		},
		"user": {
			"id": "da0967e3-c1b2-4bae-956e-30da1030d0d0",
			"name": "Usuário",
			"email": "usuario@gmail.com",
			"cpf": "002.020.000-00",
			"password": "$2b$10$SPeh1T6AdnUpwcuDtpY1r.9pOBsuxx2F8R/ubo1sooqCs43EcBLHe",
			"resetCode": "xxxxxxxx",
			"phoneNumber": "+55(99)99999-9999",
			"birthDate": "07/04/1997",
			"description": "texto de descrição",
			"accountType": "Anunciante",
			"isActive": true,
			"createdAt": "2023-02-27T14:29:43.017Z",
			"updatedAt": "2023-02-27T18:31:01.403Z"
		}
	}
]
```

<h4 align ='center'> Atualizar comment </h4>

`PATCH /comments/id (id do comentário a ser editado) - FORMATO DA REQUISIÇÃO`

```json
{
	"content": "Novo comentário - Atualizado"
}
```

`PATCH /comments/id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "f3e3f5e4-26da-4eea-964b-4110a2e9c695",
	"content": "Novo comentário - Atualizado",
	"createdAt": "2023-03-06T13:14:19.440Z",
	"user": {
		"id": "da0967e3-c1b2-4bae-956e-30da1030d0d0",
		"name": "Usuário",
		"email": "usuario@gmail.com",
		"cpf": "002.020.000-00",
		"password": "$2b$10$SPeh1T6AdnUpwcuDtpY1r.9pOBsuxx2F8R/ubo1sooqCs43EcBLHe",
		"resetCode": "xxxxxxxx",
		"phoneNumber": "+55(99)99999-9999",
		"birthDate": "07/04/1997",
		"description": "texto de descrição",
		"accountType": "Anunciante",
		"isActive": true,
		"createdAt": "2023-02-27T14:29:43.017Z",
		"updatedAt": "2023-02-27T18:31:01.403Z"
	},
	"ad": {
		"id": "8554a18a-3909-459e-b548-e41bb37b7080",
		"title": "Novo anúncio2",
		"description": "Descrição do novo anúncio",
		"typeVehicle": "car",
		"isPublished": false,
		"typeAds": "sell",
		"releaseYear": "2000",
		"mileage": "50.000 km",
		"price": "20.000",
		"cover": "",
		"gallery_image": "",
		"createdAt": "2023-02-27T18:26:26.087Z",
		"updatedAt": "2023-02-27T18:30:35.259Z"
	}
}
```

<h4 align ='center'> Deletar comment </h4>

`DELETE /comments/id (id do comentário a ser deletado) - Não é necessário passar corpo na requisição!`

