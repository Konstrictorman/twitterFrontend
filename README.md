# twitterFrontend
<br><br>
## Acerca del proyecto

Esta es una simple aplicación de React.js creada a partir de vite [https://vitejs.dev/guide/].  Que pretende listar un arreglo de tweets (idealement consumiendo el API rest publicado previamente vía API Gateway).

![image](https://github.com/Konstrictorman/twitterFrontend/assets/5210457/97c09b92-ad12-4f17-b5c4-c5cb3fff673f)

La aplicación está desplegada en 3 instancias de EC2, aprovisionadas a través de CloudFormation

<br><br>
## Stack CloudFormation

La plantilla utilizada para crear el stack es como sigue:

```yaml
AWSTemplateFormatVersion: "2010-09-09"

Parameters:
  GitHubRepository:
    Type: String
    Description: "GitHub repository URL for the React application"
    Default: "https://github.com/Konstrictorman/twitterFrontend"

Resources:
  EC2Instance1:
    Type: "AWS::EC2::Instance"
    Properties:
      ImageId: "ami-05c13eab67c5d8861"
      InstanceType: "t2.micro"
      SecurityGroupIds:
        - !Ref EC2SecurityGroup
      KeyName: "MyKeyPair"
      UserData:
        Fn::Base64: !Sub |
          #!/bin/bash
          yum update -y
          yum install -y git
          git clone ${GitHubRepository}
          cd twitterFrontend
          yum install -y nodejs npm
          npm install
          npm start
      Tags:
        - Key: Name
          Value: "EC2Instance1"

  EC2Instance2:
    Type: "AWS::EC2::Instance"
    Properties:
      ImageId: "ami-05c13eab67c5d8861"
      InstanceType: "t2.micro"
      SecurityGroupIds:
        - !Ref EC2SecurityGroup
      KeyName: "MyKeyPair"
      UserData:
        Fn::Base64: !Sub |
          #!/bin/bash
          yum update -y
          yum install -y git
          git clone ${GitHubRepository}
          cd twitterFrontend
          yum install -y nodejs npm
          npm install
          npm start
      Tags:
        - Key: Name
          Value: "EC2Instance2"

  EC2Instance3:
    Type: "AWS::EC2::Instance"
    Properties:
      ImageId: "ami-05c13eab67c5d8861"
      InstanceType: "t2.micro"
      SecurityGroupIds:
        - !Ref EC2SecurityGroup
      KeyName: "MyKeyPair"
      UserData:
        Fn::Base64: !Sub |
          #!/bin/bash
          yum update -y
          yum install -y git
          git clone ${GitHubRepository}
          cd twitterFrontend
          yum install -y nodejs npm
          npm install
          npm start
      Tags:
        - Key: Name
          Value: "EC2Instance3"

  EC2SecurityGroup:
    Type: "AWS::EC2::SecurityGroup"
    Properties:
      GroupDescription: "Security group for EC2 instances"
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 22
          ToPort: 22
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 3000
          ToPort: 3000
          CidrIp: 0.0.0.0/0

  Outputs:
  WebsiteURL:
    Description: 'URL of the React application'
    Value: !Sub 'http://${EC2Instance1.PublicDnsName}:3000'
```

Vale la pena resaltar los siguientes aspectos de la plantilla yaml:

- La ruta al repositorio donde está la aplicación react a desplegar está definida como el parámetro (GitHubRepository)
- Cada instancia EC2 corre una imagen de Amazon Linux, identificada por id: ami-05c13eab67c5d8861 []
- Cada instancia EC2 se instala con git, npm y nodejs
- Se crea un grupo de seguridad con permiso de acceso a través del puerto 22 (Necesario para la comunicación vía SSH) y otro permiso para el puerto 3000, por donde responderá la aplicación de React


Al final de la creación del stack, al que se ha llamado  "react-app-stack"

![image](https://github.com/Konstrictorman/twitterFrontend/assets/5210457/7a79977c-b45e-48f5-9c9b-40a839cb6f89)

Con las 3 instancias de EC2 creadas y un security group

![image](https://github.com/Konstrictorman/twitterFrontend/assets/5210457/bf2924e5-64fd-4b93-a33b-42e514a93f8c)

Detalles de una instancia

![image](https://github.com/Konstrictorman/twitterFrontend/assets/5210457/b7303e03-9b54-4343-9d59-ed52babb18d1)

![image](https://github.com/Konstrictorman/twitterFrontend/assets/5210457/03483d4b-9d1e-424c-9a91-bfae87c6336b)

  <br><br>
## Conección SSH a las instancias de EC2

Las propias instancias de EC2 nos dicen como conectarnos a través de SSH como lo sugiere la siguiente imagen

![image](https://github.com/Konstrictorman/twitterFrontend/assets/5210457/c8a18d63-50e5-4fdf-8d69-34fa75676907)

Como resultado de correr el comando se obtiene:

![image](https://github.com/Konstrictorman/twitterFrontend/assets/5210457/45c85ed8-22a4-4a15-9db1-b90bcdfea3bb)

<br><br>
## Instalación de la aplicación React

Habiendo clonado el repositorio deben correrse los siguientes comandos en la terminal para terminar de instalar las dependencias de la aplicación

```
cd twitterFrontend/
npm install
```

Posteriormente se debe generar un build productivo con el comando:
```
npm run build
```
Como resultado de esta operación se genera una carpeta llamada "dist"
  
Finalmente se debe instalar un servidor web y ejecutarlo para que disponibilice el contenido de la recién creada carpeta "dist"
```
sudo npm install -g serve
serve -n -s dist
```

Obteniendo:
  
![image](https://github.com/Konstrictorman/twitterFrontend/assets/5210457/bde4c3b1-23ba-46ce-b0b1-ee9883986eac)

Para finalmente acceder a la aplicación https://54.235.2.216:3000/

![image](https://github.com/Konstrictorman/twitterFrontend/assets/5210457/3d64f5e9-7ed8-4ad2-b4cd-35abab78fb30)


<br><br>
## Referencias

- https://vitejs.dev/guide/
- https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#AMICatalog:
- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/deploying.applications.html
- https://awstip.com/deploying-your-project-on-aws-da4dd967f008
  


  






  


